
	var txt = ""
$(function() {

	var site = '';

	if (document.URL.search("twitter.com") != -1) {
		site = 'twitter'
	} else if (document.URL.search("facebook.com") != -1) {
		site = 'fb';
		//classIdentifier = '_5pbx userContent';
	} else {
		//
	}

	var posts = null;
	if(site == 'twitter') {
		posts = $(".tweet-text");
		txt = ".tweet-text";
	}
	else if(site == 'fb') {
		posts = $(".userContent");
		txt = ".userContent";
	}

	for(i = 0; i < $(txt).length; i++) {

		var originalText = $(txt).eq(i).text();
		console.log(originalText);
		var xmlHttp = null;
	    xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", "https://polar-atoll-9643.herokuapp.com/?text="+originalText, false );
	    xmlHttp.send(null);
	    var responseText = xmlHttp.responseText;
	    console.log(responseText);
		$(txt).eq(i).text(responseText);
		$(txt).eq(i).attr("title", originalText);

		}

  Tipped.create(txt);
  $(txt).css("float", "left");
	// 
	// var posts = $(txt);
	// for (i = 0; i < posts.length; i++) {
	// 	var currentPost = posts[i];
	// 	var currentPostObject;
	// 	if (document.URL.search("twitter.com") != -1) {
	// 		currentPostObject = currentPost;
	// 	} else {
	// 	 	currentPostObject = currentPost.getElementsByTagName('p')[0];
	// 	}
	// 	var textWithTags = currentPostObject.innerHTML;
	// 	var plainText = currentPostObject.innerText;
	// }

});

// $(window).scroll(function() {
// 	Tipped.create(txt, 'Some tooltip text');
// })

$(document).ready(function() {
  Tipped.create(txt);
  $(txt).css("float", "left");
});
