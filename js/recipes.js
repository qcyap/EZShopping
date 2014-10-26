$(document).ready( function() {
	Recipes.init();
});


var Recipes = (function(window, $) {
	
	var init = function(relativePath) {
		_bindUIEvent();
	},
	
	_bindUIEvent = function() {
		_searchTable();
	},
	
	_searchTable = function() {
		$('#search').keyup(function() {
			var value = this.value.toLowerCase();;

			$('#mainTableList').find('tr').each(function(index) {
				if (index === 0) return;
				var id = $(this).find('td').first().text().toLowerCase();;
				$(this).toggle(id.indexOf(value) !== -1);
			});
		});

	};
	
	return {
		init: init
	};
})(window, jQuery);
