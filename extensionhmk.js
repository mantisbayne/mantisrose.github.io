$('.filter-button').on('click', function(e) {

	var button = $(this).attr('id');

	if ( $(this).hasClass('active') ) {
		hideTheseImages(button);
	} else {
		showTheseImages(button);
	}

});

function hideTheseImages(imageClass) {
	$('.')
}
