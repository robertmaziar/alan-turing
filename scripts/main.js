$(document).ready(function() {
	$('i').click(function() {
		if($(this).hasClass('fa-volume-up')) {
			$(this).removeClass('fa-volume-up');
			$(this).addClass('fa-volume-off');

			$('audio').prop('muted', true);
		}
		else {
			$(this).removeClass('fa-volume-off');
			$(this).addClass('fa-volume-up');

			$('audio').prop('muted', false);
		}
	});

	$('#name').click(function() {
		$('.hero-text').fadeIn();
		$('.hero-sub').fadeIn();
	});
	
	$('.hero-text').click(function() {
		$(this).fadeOut();
		$('.content').css('display', 'none').delay(400).fadeIn();
		$('.hero-sub').fadeIn();
	});

	$('.hero-sub').click(function() {
		$(this).fadeOut();
		$('.content').css('display', 'none').delay(400).fadeIn();
		$('.hero-text').fadeIn();
	});

	$('.page-link').on('click', function(e){  
	e.preventDefault();
	var pageRef = $(this).attr('href');

	callPage(pageRef)
	});
});

function callPage(pageRefInput) {
	$.ajax({
		url: pageRefInput,
		type: "GET",
		dataType: "html",
		success: function(response) {
			console.log('the page was loaded', response);
			$('.content').animate({
				left: 200
			});
			$('.content').html(response);
			jQuery.ready();
		},
		error: function(error) {
			console.log('the page was NOT loaded', error);
		},
		complete: function(xhr, status) {
			console.log("The request is complete!");
		}
	});	
}
