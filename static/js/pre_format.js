$(function() {
	// pretty print pre tag
	$('pre').addClass('prettyprint')
		.css('padding', '10px');

	// remove all <br> tags in pre tags
	var pre = document.querySelectorAll('pre');
 	pre.forEach(function(x) {
 		x.innerHTML = x.innerHTML.replace(/<br>/g, '');
 	});
});
