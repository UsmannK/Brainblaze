var posts = document.getElementsByClassName('_5pbx userContent');
for (i = 0; i < posts.length; i++) {
	var currentPost = posts[i];
	var currentPostObject = currentPost.getElementsByTagName('p')[0];
	var textWithTags = currentPostObject.innerHTML;
	var plainText = currentPostObject.innerText;

	// synonym magic goes here

	var oldWord = "";
	var newWord = "";

	var newText = textWithTags.replace(oldWord, newWord);
	currentPostObject.innerHTML = newText;
}

//testing
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