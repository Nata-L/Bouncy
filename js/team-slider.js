(function() {
	'use strict';

	$(document).ready(function() {
		$('.team-slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1
			// adaptiveHeight: true
		});
	});
})();

