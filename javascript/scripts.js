function load(id) {
	$('#filler').hide('slow');
	content = $('#' + id).html();
	$('#content').html(content).hide().fadeIn("slow");
	$('body').css('background-image', 'url(./images/pattern-alt.png)');
}

function start() {
	$('#filler').show('slow');
	$('#content').hide('slow');
	$('body').css('background-image', 'url(./images/pattern.png)')
}

$(document).ready(function() {
    $('#logo').hide().fadeIn('slow');
	$('#filler').hide().show('slow');
});