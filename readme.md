We have 2 apps meant to extract metadata from EurLEX XML notices with legislation metadata.

Structure:
Legal XML -- specific XPATHS -- among other metadata, may refer to CASE LAW and which provisions are intrpreted
Case Law XML -- returns details on cases

Goals:

1. Create an integrated version where
- Legislative XML is parsed
- If it refers to cases, and we have XML of that case, we parse that too
- Store separate and joint output

2. Have that version retrieve XML from API:


EU Publications Office API

apiUrl = `https://publications.europa.eu/resource/celex/${celexRef}`; // or http unsure
 
 // must set headers
                'Accept': 'application/xml;notice=branch'
                'Accept-Language': 'eng' 

// must allow redirects

Flow: user types in CELEX, XML is retreived and parsed. If user chooses so, if XML is legislative and contains case CELEX references, XML is retreived and parsed for all those too.

Considerations:

1. Parsing works great for now, ideally, minimal refactor
2. User will for now run from localhost
3. We may want to do a small modification of article reference logic as to also include INT value of article interpreted per case