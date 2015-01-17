
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

	//$(txt).length

});

$(window).scroll(function() {
	Tipped.create(txt, 'Some tooltip text');
})

$(document).ready(function() {
  Tipped.create(txt, 'Some tooltip text');
  $(txt).css("float", "left");
});
