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
	if(site == 'twitter')
		posts = $(".tweet-text");
	else if(site == 'fb')
		posts = $("._5pbx", "userContent");

	for (i = 0; i < posts.length; i++) { 
	posts.eq(i).addClass("demo-tooltip");
}


});

$(document).ready(function() {
  Tipped.create('.demo-tooltip', 'Some tooltip text');
});
