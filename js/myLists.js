$(document).ready( function() {
	MyLists.init();
});


var MyLists = (function(window, $) {
	var deleteModal;
	
	var init = function(relativePath) {
		deleteModal = $('#deleteModal');
		
		_bindUIEvent();
	},
	
	_bindUIEvent = function() {
		_loadDeleteEvents();
		_loadResizeEvents();
	},
	
	_loadDeleteEvents = function() {
		$('.close').on('click', function() {
			var selectedRow = $(this);
			deleteModal.modal('show', calibrateDeleteModal());
			deleteModal.unbind('click');
			deleteModal.on('click', '[data-value]', function() {
				if ($(this).data('value') == 1) {
					deleteRow(selectedRow);
				}
				deleteModal.modal('hide');
			});
		});
	},
	
	_loadResizeEvents = function() {
		$(window).on('resize', function () {
			deleteModal.find(':visible', calibrateDeleteModal());
		});
	};
	
	function deleteRow(r) {
		r.parents('tr').remove();
	}
	
	function calibrateDeleteModal() {
		$(this).css('display', 'block');
		var dialog = deleteModal.find(".modal-dialog");
		var offset = ($(window).height() - dialog.height()) / 2;
		// Center modal vertically in window
		dialog.css("margin-top", offset);
	}
	
	return {
		init: init
	};
})(window, jQuery);
