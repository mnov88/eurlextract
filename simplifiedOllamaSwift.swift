import SwiftUI
import AppKit

// MARK: - Models

struct PresetConfiguration: Identifiable, Hashable {
    let id: String
    var systemPrompt: String
    var mainPrompt: String
    var temperature: Double
    var topP: Double
    var topK: Int
    var repeatPenalty: Double
    var maxTokens: Int
}

struct ModelParams: Codable {
    var temperature: Double
    var topP: Double
    var topK: Int
    var repeatPenalty: Double
    var numPredict: Int
    var numCtx: Int
}

struct ProcessingResult: Identifiable, Codable {
    var id: UUID = UUID()
    var file: URL
    var success: Bool
    var outputPath: URL?
    var error: String?
    var processingTime: TimeInterval
}

struct RunSummary: Codable {
    var totalFiles: Int
    var successful: Int
    var failed: Int
    var totalTime: TimeInterval
    var averageTime: TimeInterval
    var processingMode: String
    var maxWorkers: Int
    var gitEnabled: Bool
}

// MARK: - Presets Provider

enum PresetsProvider {
    static func defaults() -> [PresetConfiguration] {
        return [
            PresetConfiguration(
                id: "Custom",
                systemPrompt: """
You are ....

Document content:
{document_content}

Provide your analysis in a clear, structured format.
""",
                mainPrompt: "{document_content}",
                temperature: 0.15,
                topP: 0.9,
                topK: 40,
                repeatPenalty: 1.1,
                maxTokens: -1
            ),
            PresetConfiguration(
                id: "LM Studio Style - EU DPA Extraction",
                systemPrompt: """
SYSTEM
Extract ...
<<DECISION_TEXT>>
{document_content}
</<DECISION_TEXT>>
""",
                mainPrompt: "{document_content}",
                temperature: 0.15,
                topP: 0.9,
                topK: 40,
                repeatPenalty: 1.1,
                maxTokens: -1
            ),
            PresetConfiguration(
                id: "JSON Structured Output",
                systemPrompt: """
You are ...
}
""",
                mainPrompt: """
Extract key information from this EU DPA decision and return as JSON:

{document_content}

Return valid JSON only.
""",
                temperature: 0.1,
                topP: 0.9,
                topK: 40,
                repeatPenalty: 1.1,
                maxTokens: 1000
            )
        ]
    }
}

// MARK: - Ollama Client

final class OllamaClient {
    var baseURL: URL
    private var apiURL: URL { baseURL.appendingPathComponent("api") }

    init(baseURL: URL = URL(string: "http://localhost:11434")!) {
        // Normalize host to a routable address for client connections
        if var comps = URLComponents(url: baseURL, resolvingAgainstBaseURL: false) {
            if comps.host == "0.0.0.0" || comps.host == "localhost" || comps.host == "localhost.localdomain" || comps.host == nil || comps.host == "" {
                comps.host = "127.0.0.1"
            }
            self.baseURL = comps.url ?? baseURL
        } else {
            self.baseURL = baseURL
        }
    }

    private func url(byReplacingHost host: String, of url: URL) -> URL? {
        var comps = URLComponents(url: url, resolvingAgainstBaseURL: false)
        comps?.host = host
        return comps?.url
    }

    func testConnection() async -> (Bool, String) {
        // Try multiple candidates to be resilient: current base, 127.0.0.1, localhost
        var candidates: [URL] = [baseURL]
        if let loopback = url(byReplacingHost: "127.0.0.1", of: baseURL), !candidates.contains(loopback) { candidates.append(loopback) }
        if let local = url(byReplacingHost: "localhost", of: baseURL), !candidates.contains(local) { candidates.append(local) }
        for candidate in candidates {
            var request = URLRequest(url: candidate.appendingPathComponent("api").appendingPathComponent("version"))
            request.timeoutInterval = 5
            do {
                let (_, response) = try await URLSession.shared.data(for: request)
                if let http = response as? HTTPURLResponse, http.statusCode == 200 {
                    // Update baseURL to the working candidate for future requests
                    self.baseURL = candidate
                    return (true, "Connection successful")
                }
            } catch {
                // Try next candidate
                continue
            }
        }
        return (false, "Connection failed: server unreachable. If using HTTP, ensure ATS allows localhost.")
    }

    func listModels() async throws -> [String] {
        let url = apiURL.appendingPathComponent("tags")
        let (data, _) = try await URLSession.shared.data(from: url)
        let obj = try JSONSerialization.jsonObject(with: data, options: [])
        guard let dict = obj as? [String: Any], let models = dict["models"] as? [[String: Any]] else {
            return []
        }
        var names: [String] = []
        for m in models {
            if let name = (m["name"] as? String) ?? (m["model"] as? String) {
                names.append(name)
            }
        }
        return names.sorted()
    }

    struct GeneratePayload: Encodable {
        let model: String
        let prompt: String
        let options: Options
        let stream: Bool = false
        let system: String?

        struct Options: Encodable {
            let temperature: Double
            let top_p: Double
            let top_k: Int
            let repeat_penalty: Double
            let num_predict: Int
            let num_ctx: Int?
        }
    }

    func generate(model: String, prompt: String, systemPrompt: String?, params: ModelParams) async throws -> String {
        let payload = GeneratePayload(
            model: model,
            prompt: prompt,
            options: .init(
                temperature: max(0.0, min(2.0, params.temperature)),
                top_p: max(0.1, min(1.0, params.topP)),
                top_k: max(1, min(100, params.topK)),
                repeat_penalty: max(0.5, min(2.0, params.repeatPenalty)),
                num_predict: params.numPredict,
                num_ctx: max(512, params.numCtx)
            ),
            system: (systemPrompt?.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty == false) ? systemPrompt : nil
        )

        var request = URLRequest(url: apiURL.appendingPathComponent("generate"))
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.timeoutInterval = 300
        request.httpBody = try JSONEncoder().encode(payload)
        let (data, response) = try await URLSession.shared.data(for: request)
        guard let http = response as? HTTPURLResponse else { throw NSError(domain: "http", code: -1) }
        guard (200..<300).contains(http.statusCode) else {
            let body = String(data: data, encoding: .utf8) ?? "<no body>"
            throw NSError(domain: "ollama", code: http.statusCode, userInfo: [NSLocalizedDescriptionKey: "Ollama HTTP error \(http.statusCode): \(body)"])
        }
        let obj = try JSONSerialization.jsonObject(with: data, options: [])
        if let dict = obj as? [String: Any], let resp = dict["response"] as? String {
            return resp
        }
        return ""
    }

    func generateWithRetry(model: String, prompt: String, systemPrompt: String?, params: ModelParams, maxRetries: Int = 3) async throws -> String {
        var attempt = 0
        var lastError: Error?
        while attempt < maxRetries {
            do {
                return try await generate(model: model, prompt: prompt, systemPrompt: systemPrompt, params: params)
            } catch {
                lastError = error
                attempt += 1
                if attempt < maxRetries {
                    let delay = pow(2.0, Double(attempt - 1))
                    try? await Task.sleep(nanoseconds: UInt64(delay * 1_000_000_000))
                }
            }
        }
        throw lastError ?? NSError(domain: "ollama", code: -1, userInfo: [NSLocalizedDescriptionKey: "Unknown error"])        
    }
}

// MARK: - File Utilities

enum FileUtils {
    static func findMarkdownFiles(in folders: [URL]) -> [URL] {
        var results: [URL] = []
        let fm = FileManager.default
        for folder in folders {
            guard let enumerator = fm.enumerator(at: folder, includingPropertiesForKeys: [.isDirectoryKey, .isRegularFileKey, .nameKey], options: [.skipsHiddenFiles]) else { continue }
            for case let url as URL in enumerator {
                if url.pathExtension.lowercased() == "md" {
                    results.append(url)
                }
            }
        }
        return results.sorted { $0.path < $1.path }
    }

    static func validateFileSafety(_ url: URL, maxSizeMB: Double = 10) -> (Bool, String) {
        let fm = FileManager.default
        guard fm.fileExists(atPath: url.path) else { return (false, "File does not exist") }
        do {
            let attrs = try fm.attributesOfItem(atPath: url.path)
            if let size = attrs[.size] as? NSNumber {
                let mb = size.doubleValue / (1024.0 * 1024.0)
                if mb > maxSizeMB { return (false, String(format: "File too large (%.1fMB > %.1fMB)", mb, maxSizeMB)) }
            }
            let handle = try FileHandle(forReadingFrom: url)
            defer { try? handle.close() }
            let data = try handle.read(upToCount: 1024) ?? Data()
            if data.contains(0) { return (false, "File appears to be binary, not text") }
            _ = String(data: data, encoding: .utf8) // if nil, still allow; full file decoding happens later
            return (true, "File is safe to process")
        } catch {
            return (false, "Error validating file: \(error.localizedDescription)")
        }
    }

    static func saveProcessedFile(original: URL, response: String, outputFolder: URL) throws -> URL {
        let id = IdExtractor.extract(from: response)
        let originalName = original.deletingPathExtension().lastPathComponent
        let newName: String
        if let id {
            newName = "\(id)_\(originalName)_extracted.md"
        } else {
            newName = "\(originalName)_extracted.md"
        }
        let destDir = outputFolder
        try FileManager.default.createDirectory(at: destDir, withIntermediateDirectories: true)
        let dest = destDir.appendingPathComponent(newName)
        var header = "# Processed: \(original.lastPathComponent)\n\n"
        header += "**Original file:** \(original.path)\n"
        header += "**Processed at:** \(ISO8601DateFormatter().string(from: Date()))\n\n"
        header += "---\n\n"
        let full = header + response
        try full.write(to: dest, atomically: true, encoding: .utf8)
        return dest
    }

    static func totalSize(of files: [URL]) -> Double {
        var bytes: UInt64 = 0
        for f in files {
            if let attr = try? FileManager.default.attributesOfItem(atPath: f.path), let size = attr[.size] as? NSNumber {
                bytes += size.uint64Value
            }
        }
        return Double(bytes) / (1024.0 * 1024.0)
    }
}

// MARK: - ID Extractor

enum IdExtractor {
    static func extract(from response: String) -> String? {
        let patterns = [
            #"\b([A-Z]{2,3}_\d+)\b"#,
            #"\b([A-Z]{2,3}\d+)\b"#,
            #"\b([A-Z]+_\d+)\b"#
        ]
        for p in patterns {
            if let regex = try? NSRegularExpression(pattern: p) {
                let range = NSRange(location: 0, length: response.utf16.count)
                if let match = regex.firstMatch(in: response, options: [], range: range), match.numberOfRanges > 1 {
                    if let r = Range(match.range(at: 1), in: response) { return String(response[r]) }
                }
            }
        }
        return nil
    }
}

// MARK: - Processor

enum Processor {
    static func processSingleFile(file: URL, model: String, promptTemplate: String, systemPrompt: String?, outputFolder: URL, params: ModelParams, client: OllamaClient) async -> ProcessingResult {
        let start = Date()
        var result = ProcessingResult(file: file, success: false, outputPath: nil, error: nil, processingTime: 0)
        do {
            let (safe, message) = FileUtils.validateFileSafety(file)
            guard safe else { throw NSError(domain: "validate", code: 1, userInfo: [NSLocalizedDescriptionKey: "File validation failed: \(message)"]) }
            let content = try String(contentsOf: file, encoding: .utf8)
            let fullPrompt = promptTemplate.replacingOccurrences(of: "{document_content}", with: content)
            let response = try await client.generateWithRetry(model: model, prompt: fullPrompt, systemPrompt: systemPrompt, params: params)
            let out = try FileUtils.saveProcessedFile(original: file, response: response, outputFolder: outputFolder)
            result.success = true
            result.outputPath = out
        } catch {
            result.success = false
            result.error = error.localizedDescription
        }
        result.processingTime = Date().timeIntervalSince(start)
        return result
    }
}

// MARK: - App State

@MainActor
final class AppState: ObservableObject {
    // Connection
    @Published var baseURLString: String = "http://127.0.0.1:11434"
    @Published var models: [String] = []
    @Published var selectedModel: String? = nil
    @Published var connectionStatus: String = ""

    // Presets / prompts
    let presets: [PresetConfiguration] = PresetsProvider.defaults()
    @Published var selectedPresetId: String = "LM Studio Style - EU DPA Extraction"
    @Published var systemPrompt: String = ""
    @Published var mainPrompt: String = ""

    // Model params
    @Published var params = ModelParams(temperature: 0.15, topP: 0.9, topK: 40, repeatPenalty: 1.1, numPredict: -1, numCtx: 15000)

    // Files and options
    @Published var folders: [URL] = []
    @Published var discovered: [URL] = []
    @Published var outputFolder: URL? = nil
    @Published var maxFiles: Int = 10
    @Published var useConcurrent: Bool = false
    @Published var maxWorkers: Int = 3
    @Published var delaySeconds: Double = 1.0
    @Published var showDebug: Bool = false

    // Run state
    @Published var isRunning: Bool = false
    @Published var progress: Double = 0
    @Published var processed: [ProcessingResult] = []
    @Published var failures: [ProcessingResult] = []

    private func currentPreset() -> PresetConfiguration {
        presets.first { $0.id == selectedPresetId } ?? presets.first!
    }

    func applyPresetDefaults() {
        let p = currentPreset()
        systemPrompt = p.systemPrompt
        mainPrompt = p.mainPrompt
        params.temperature = p.temperature
        params.topP = p.topP
        params.topK = p.topK
        params.repeatPenalty = p.repeatPenalty
        params.numPredict = p.maxTokens
    }

    func testConnection() async {
        let normalized = normalizeBaseURLString(baseURLString)
        if normalized != baseURLString { baseURLString = normalized }
        guard let url = URL(string: normalized) else { connectionStatus = "Invalid URL"; return }
        let client = OllamaClient(baseURL: url)
        let (ok, msg) = await client.testConnection()
        connectionStatus = (ok ? "✅ " : "❌ ") + msg
        if ok {
            await refreshModels()
        }
    }

    func refreshModels() async {
        let normalized = normalizeBaseURLString(baseURLString)
        if normalized != baseURLString { baseURLString = normalized }
        guard let url = URL(string: normalized) else { return }
        let client = OllamaClient(baseURL: url)
        do {
            let list = try await client.listModels()
            models = list
            if selectedModel == nil { selectedModel = list.first }
        } catch {
            connectionStatus = "❌ Failed to get models: \(error.localizedDescription)"
        }
    }

    private func normalizeBaseURLString(_ s: String) -> String {
        guard var comps = URLComponents(string: s) else { return s }
        if comps.host == nil || comps.host == "" || comps.host == "localhost" || comps.host == "0.0.0.0" || comps.host == "localhost.localdomain" {
            comps.host = "127.0.0.1"
        }
        if comps.scheme == nil { comps.scheme = "http" }
        return comps.url?.absoluteString ?? s
    }

    func chooseFolders() {
        let panel = NSOpenPanel()
        panel.canChooseFiles = false
        panel.canChooseDirectories = true
        panel.allowsMultipleSelection = true
        if panel.runModal() == .OK {
            folders.append(contentsOf: panel.urls)
        }
    }

    func chooseOutputFolder() {
        let panel = NSOpenPanel()
        panel.canChooseFiles = false
        panel.canChooseDirectories = true
        panel.allowsMultipleSelection = false
        if panel.runModal() == .OK {
            outputFolder = panel.urls.first
        }
    }

    func discoverFiles() {
        discovered = FileUtils.findMarkdownFiles(in: folders)
    }

    func exportResultsJSON() {
        let total = processed.count + failures.count
        let avg: Double = processed.isEmpty ? 0 : processed.map { $0.processingTime }.reduce(0, +) / Double(processed.count)
        let configuration: [String: Any] = [
            "model": selectedModel ?? "",
            "model_parameters": [
                "temperature": params.temperature,
                "top_p": params.topP,
                "top_k": params.topK,
                "repeat_penalty": params.repeatPenalty,
                "num_predict": params.numPredict,
                "num_ctx": params.numCtx
            ],
            "system_prompt": systemPrompt,
            "main_prompt_template": mainPrompt,
            "git_options": ["enable_git": false]
        ]
        let summary: [String: Any] = [
            "total_files": total,
            "successful": processed.count,
            "failed": failures.count,
            "total_time": 0,
            "average_time": avg,
            "processing_mode": useConcurrent ? "concurrent" : "sequential",
            "max_workers": maxWorkers,
            "git_enabled": false
        ]
        let payload: [String: Any] = [
            "summary": summary,
            "processed_files": processed.map { [
                "file": $0.file.path,
                "success": $0.success,
                "output_path": $0.outputPath?.path as Any,
                "error": $0.error as Any,
                "processing_time": $0.processingTime
            ] },
            "failed_files": failures.map { [
                "file": $0.file.path,
                "success": $0.success,
                "output_path": $0.outputPath?.path as Any,
                "error": $0.error as Any,
                "processing_time": $0.processingTime
            ] },
            "configuration": configuration,
            "timestamp": ISO8601DateFormatter().string(from: Date())
        ]
        guard let data = try? JSONSerialization.data(withJSONObject: payload, options: [.prettyPrinted]) else { return }
        let panel = NSSavePanel()
        panel.nameFieldStringValue = "enhanced_results_\(Int(Date().timeIntervalSince1970)).json"
        if panel.runModal() == .OK, let url = panel.url {
            try? data.write(to: url)
        }
    }

    func runProcessing() async {
        guard let model = selectedModel else { connectionStatus = "Select a model"; return }
        guard let output = outputFolder else { connectionStatus = "Choose output folder"; return }
        guard let base = URL(string: baseURLString) else { connectionStatus = "Invalid base URL"; return }
        let client = OllamaClient(baseURL: base)

        isRunning = true
        processed = []
        failures = []
        progress = 0
        let files = Array(discovered.prefix(maxFiles))
        let total = files.count
        let start = Date()

        if useConcurrent {
            await withTaskGroup(of: ProcessingResult.self) { group in
                for f in files {
                    group.addTask { await Processor.processSingleFile(file: f, model: model, promptTemplate: self.mainPrompt, systemPrompt: self.systemPrompt, outputFolder: output, params: self.params, client: client) }
                }
                var done = 0
                for await res in group {
                    done += 1
                    if res.success { processed.append(res) } else { failures.append(res) }
                    progress = Double(done) / Double(total)
                }
            }
        } else {
            for (idx, f) in files.enumerated() {
                let res = await Processor.processSingleFile(file: f, model: model, promptTemplate: self.mainPrompt, systemPrompt: self.systemPrompt, outputFolder: output, params: self.params, client: client)
                if res.success { processed.append(res) } else { failures.append(res) }
                progress = Double(idx + 1) / Double(total)
                if idx < total - 1 && delaySeconds > 0 {
                    try? await Task.sleep(nanoseconds: UInt64(delaySeconds * 1_000_000_000))
                }
            }
        }

        let elapsed = Date().timeIntervalSince(start)
        if showDebug { print("Total time: \(elapsed)s") }
        isRunning = false
    }
}

// MARK: - UI

struct ContentView: View {
    @StateObject private var state = AppState()

    var body: some View {
        NavigationView {
            sidebar
            main
        }
        .navigationTitle("Enhanced Ollama Processor (No-Git)")
        .frame(minWidth: 1100, minHeight: 700)
        .onAppear { state.applyPresetDefaults() }
    }

    private var sidebar: some View {
        VStack(alignment: .leading, spacing: 12) {
            GroupBox(label: Text("Ollama Connection")) {
                VStack(alignment: .leading) {
                    TextField("Base URL", text: $state.baseURLString)
                    HStack {
                        Button("Test & Refresh Models") { Task { await state.testConnection() } }
                        Text(state.connectionStatus).font(.caption)
                    }
                    Picker("Model", selection: $state.selectedModel) {
                        ForEach(state.models, id: \.self) { Text($0).tag(Optional($0)) }
                    }
                }
            }

            GroupBox(label: Text("Presets & Prompts")) {
                Picker("Preset", selection: $state.selectedPresetId) {
                    ForEach(state.presets) { Text($0.id).tag($0.id) }
                }
                Button("Apply Preset Defaults") { state.applyPresetDefaults() }
                Text("System Prompt")
                TextEditor(text: $state.systemPrompt).font(.system(.body, design: .monospaced)).frame(minHeight: 120)
                Text("Main Prompt Template (use {document_content})")
                TextEditor(text: $state.mainPrompt).font(.system(.body, design: .monospaced)).frame(minHeight: 100)
            }

            GroupBox(label: Text("Model Parameters")) {
                HStack {
                    VStack(alignment: .leading) {
                        HStack { Text("Temperature"); Slider(value: $state.params.temperature, in: 0...2, step: 0.05); Text(String(format: "%.2f", state.params.temperature)).frame(width: 48) }
                        HStack { Text("Top P"); Slider(value: $state.params.topP, in: 0.1...1, step: 0.05); Text(String(format: "%.2f", state.params.topP)).frame(width: 48) }
                        HStack { Text("Top K"); Slider(value: Binding(get: { Double(state.params.topK) }, set: { state.params.topK = Int($0) }), in: 1...100, step: 1) ; Text("\(state.params.topK)").frame(width: 48) }
                        HStack { Text("Repeat Penalty"); Slider(value: $state.params.repeatPenalty, in: 0.5...2, step: 0.05); Text(String(format: "%.2f", state.params.repeatPenalty)).frame(width: 48) }
                        HStack {
                            Text("Max Tokens")
                            TextField("-1 for unlimited", value: $state.params.numPredict, formatter: NumberFormatter())
                                .frame(width: 120)
                        }
                        HStack {
                            Text("Context Window")
                            TextField("e.g. 15000", value: $state.params.numCtx, formatter: NumberFormatter())
                                .frame(width: 120)
                        }
                    }
                }
            }
        }
        .padding()
        .frame(minWidth: 420)
    }

    private var main: some View {
        VStack(alignment: .leading, spacing: 12) {
            GroupBox(label: Text("Folder Selection")) {
                HStack {
                    Button("Add Folders") { state.chooseFolders() }
                    Button("Discover .md Files") { state.discoverFiles() }
                    Spacer()
                }
                if !state.folders.isEmpty {
                    Text("Folders:")
                    ForEach(state.folders, id: \.self) { Text($0.path).font(.caption) }
                }
            }

            if !state.discovered.isEmpty {
                let totalSize = FileUtils.totalSize(of: state.discovered)
                GroupBox(label: Text("Found \(state.discovered.count) Markdown Files (
\(String(format: "%.2f", totalSize)) MB)")) {
                    ScrollView { VStack(alignment: .leading) {
                        ForEach(Array(state.discovered.prefix(10)), id: \.self) { url in
                            Text(url.path).font(.caption)
                        }
                        if state.discovered.count > 10 { Text("... and \(state.discovered.count - 10) more files") }
                    } }
                }
            }

            GroupBox(label: Text("Processing Settings")) {
                HStack {
                    Button("Choose Output Folder") { state.chooseOutputFolder() }
                    Text(state.outputFolder?.path ?? "No folder selected").font(.caption)
                }
                HStack {
                    Stepper("Max files: \(state.maxFiles)", value: $state.maxFiles, in: 1...1000)
                    Toggle("Concurrent", isOn: $state.useConcurrent)
                    Stepper("Workers: \(state.maxWorkers)", value: $state.maxWorkers, in: 1...8).disabled(!state.useConcurrent)
                    HStack { Text("Delay (s)"); Stepper(value: $state.delaySeconds, in: 0...5, step: 0.1) { Text(String(format: "%.1f", state.delaySeconds)) } }
                    Toggle("Debug", isOn: $state.showDebug)
                }
            }

            HStack {
                Button(role: .none) {
                    Task { await state.runProcessing() }
                } label: {
                    Text(state.isRunning ? "Running..." : "Start Processing").bold()
                }
                .disabled(state.isRunning || state.discovered.isEmpty)

                ProgressView(value: state.progress).frame(width: 200)

                Spacer()

                Button("Export JSON") { state.exportResultsJSON() }.disabled(state.processed.isEmpty && state.failures.isEmpty)
            }

            GroupBox(label: Text("Results")) {
                HStack {
                    Text("Success: \(state.processed.count)")
                    Text("Failures: \(state.failures.count)")
                }
                ScrollView { VStack(alignment: .leading, spacing: 6) {
                    ForEach(state.processed) { r in
                        Text("✅ \(r.file.lastPathComponent) → \(r.outputPath?.lastPathComponent ?? "<none>") (\(String(format: "%.1f", r.processingTime))s)").font(.caption)
                    }
                    ForEach(state.failures) { r in
                        Text("❌ \(r.file.lastPathComponent): \(r.error ?? "Unknown error")").font(.caption)
                    }
                } }
            }
            Spacer()
        }
        .padding()
    }
}

// MARK: - App Entry

@main
struct SimplifiedOllamaApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}