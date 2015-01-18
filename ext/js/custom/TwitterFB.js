var wordCount = 0;
function parse() {
	var classIdentifier = '';

	if (document.URL.search("twitter.com") != -1) {
		classIdentifier = 'js-tweet-text tweet-text';
	} else if (document.URL.search("facebook.com") != -1) {
		classIdentifier = '_5pbx userContent';
	} else {

	}

	var posts = document.getElementsByClassName(classIdentifier);
	for (i = 0; i < posts.length; i++) {
		var currentPost = posts[i];
		var currentPostObject;
		if (document.URL.search("twitter.com") != -1) {
			currentPostObject = currentPost;
		} else {
		 	currentPostObject = currentPost.getElementsByTagName('p')[0];
		}
		var textWithTags = currentPostObject.innerHTML;
		var plainText = currentPostObject.innerText;
		currentPostObject.innerText = "this has been changed";
		// synonym magic goes here

		// NOTE: the replacing the word is CASE-SENSITIVE
		var oldWord = " the "; // issue: for words like 'and' it replaces itself in longer words such as 'anderson'  
		var newWord = "!!!!chortle!!!!"; // possible fix ^^^ add spaces: ' and ' 
		var definition = "a slight chuckle";
		// var insertion = "<span 
		// data-tipped-options=\"title: '" + newWord + "', position: 'top'\"
		// title=\"" + definition + "\"  
		// id=\"translated" + wordCount + "\">" + 
		// newWord + 
		// "</span>";
		var insertion = 
		"<span 
		title=\"" + definition + "\" 
		id=\"translated" + wordCount + "\" 
		data-tipped-options=\"title: '" + newWord + "', position: 'top'\">" + 
		newWord + "</span>";
		
		//"<span title=\"" + "word" + "\" id=\"translated" + "1" + "\" data-tipped-options=\"title: '" + newWord + "', position: 'top'\">hella</span>"
		//"<span title=\"" + definition + "\" id=\"translated" + wordCount + "\" data-tipped-options=\"title: '" + newWord + "', position: 'top'\">hella</span>"



		Tipped.create('#word\'' + wordCount, { title: true, title: newWord });


		var newText = textWithTags.replace(oldWord, insertion);
		currentPostObject.innerHTML = newText;
		wordCount++;
	}
} 

// --- TEST ZONE --- //
// js-tweet-text tweet-text
// var posts = document.getElementsByClassName('_5pbx userContent');

// var currentPost = posts[0];
// var currentPostObject = currentPost.getElementsByTagName('p')[0];
// var textWithTags = currentPostObject.innerHTML;
// var plainText = currentPostObject.innerText;

// var newText = textWithTags.replace("MHacks", "Marty Kausas");
// currentPostObject.innerHTML = newText;

//

// var index1;
// var index2;
// while ((index1 = text.indexOf("<")) != -1) {
// 	var index2 = text.indexOf(">");
// 	text = text.substr(0, index1) + text.substr(index2 + 1, text.length - 1);
// 	index2 = text.indexOf(">");
// 	text = text.substr(0, index1) + text.substr(index2 + 1, text.length - 1);

// }