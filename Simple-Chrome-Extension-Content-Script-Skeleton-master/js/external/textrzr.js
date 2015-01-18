

		var xmlHttp = null;
	    xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", "http://myflyr.me/cgi-bin/test-textrzr.py?text=why am I doing this shit", false );
	    //xmlHttp.send('apiKey=5baac325bc09c70ee5f9f66a9a7ed91312dda96a0c2f51cdb39322bf&text=What the fuck is this shit&extractors=entailments');
		xmlHttp.send(null);
		console.log(xmlHttp.response);
