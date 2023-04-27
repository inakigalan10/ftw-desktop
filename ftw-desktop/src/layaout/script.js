$(document).ready(function() {
	$('.menu-btn').click(function() {
		$(this).toggleClass('active');
		$('aside').toggleClass('active');
	});
});     