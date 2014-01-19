$(document).ready(function() {
	//set the body tag for the first theme just in case there is one
	$("body").attr("class", window.location.hash.replace("#", ""));

	$(window).on("hashchange", function() {
		// change the theme
		$("body").attr("class", window.location.hash.replace("#", ""));
	});

	$(".toc").click(function(e) {
		e.preventDefault();
		$(".page-container").toggleClass("show-toc");
	});
});