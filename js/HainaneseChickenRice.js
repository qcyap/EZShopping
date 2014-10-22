$(document).ready( function() {
	HainaneseChickenRice.init();
});

var HainaneseChickenRice = (function(window, $) {
	
	var init = function() {
		_bindUIEvent();
	},
	
	_bindUIEvent = function() {
		_loadScrollEvents();
	},
	
	_loadScrollEvents = function() {
		var count = 0;
		setInterval(function(){
			count++;
			if (count > 5) {
				$("#footer").slideUp(); // disappear
			}
		}, 1000);
		
		$(window).scroll(function() {
			var scrollTop = $(this).scrollTop();
			var maxScrollTop = $(document).height() - $(window).height();
			var timeouts = [];
			
			// Show/Hide footer
			if (!$('input[type="text"]').is(":focus")) {
				count = 0;
				$("#footer").slideDown(); // appear
			}
			else {
				$("#footer").slideUp(); // disappear
			}
		});
	};
	
	return {
		init: init
	};
})(window, jQuery);
