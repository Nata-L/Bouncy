(function() {
	'use strict';

	$(document).ready(function() {
		$('.portfolio-grid').masonry({
			// columnWidth : '.portfolio-grid__sizer',
			itemSelector: '.portfolio-grid__item',
			columnWidth: 270,
			gutter: 10,
			// percentPosition : 'true',
        	fitWidth: true,
        	horizontalOrder: true
		});
	});

})();

