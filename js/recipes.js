$(document).ready( function() {
	Recipes.init();
});


var Recipes = (function(window, $) {
	var likeModal;
	
	var init = function(relativePath) {
		likeModal = $('#likeModal');
		
		_bindUIEvent();
	},
	
	_bindUIEvent = function() {
		_searchTable();
		_loadLikeEvents();
		_loadResizeEvents();
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

	},
	
	_loadLikeEvents = function() {
		$('.like').on('click touchend', function(e) {
			e.preventDefault();
			if ($(this).hasClass('unliked')) {
				$(this).removeClass('unliked');
				$(this).addClass('liked');
				likeModal.find('.modal-body').html('<span>Recipe liked and added to \'My Recipes\'!</span>');
				likeModal.modal('show', calibrateLikeModal());
			}
			else {
				$(this).removeClass('liked');
				$(this).addClass('unliked');
			}	
		});
	},
	
	_loadResizeEvents = function() {
		$(window).on('resize', function () {
			likeModal.find(':visible', calibrateLikeModal());
		});
	};
	
	function calibrateLikeModal() {
		$(this).css('display', 'block');
		var dialog = likeModal.find(".modal-dialog");
		var offset = ($(window).height() - dialog.height()) / 2;
		// Center modal vertically in window
		dialog.css("margin-top", offset);
	}
	
	return {
		init: init
	};
})(window, jQuery);
