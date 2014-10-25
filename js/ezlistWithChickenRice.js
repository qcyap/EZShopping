$(document).ready( function() {
	EzlistWithChickenRice.init();
});

var EzlistWithChickenRice = (function(window, $) {
	
	var init = function() {
		_bindUIEvent();
	},
	
	_bindUIEvent = function() {
		_loadDropdownEvents();
	},
	
	_loadDropdownEvents = function() {
		$('.recipe.rh1').click(function() {
			var recipeRow = $('.recipe.rd1');
			var dropdown = $('.dropdown');
			
			if (dropdown.hasClass('expand')) {
				dropdown.removeClass('expand');
				dropdown.addClass('contract');
				dropdown.html('<i class="glyphicon glyphicon-chevron-right"></i>');
				recipeRow.hide();
			}
			else {
				dropdown.removeClass('contract');
				dropdown.addClass('expand');
				dropdown.html('<i class="glyphicon glyphicon-chevron-down"></i>');
				recipeRow.show();
			}
		});
	};
	
	return {
		init: init
	};
})(window, jQuery);
