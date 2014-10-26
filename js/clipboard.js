var Clipboard = (function(window, $) {
	var copyLink;
	
	var init = function(relativePath) {
		//_copy(relativePath);
	},
	
	_copy = function(relativePath) {
		copyLink = (document.domain == '127.0.0.1' || document.domain == 'localhost')? 'http://goo.gl/WkwXJY': 'http://goo.gl/8SkjI8';
		
		$('#share').zclip({
			path: ((relativePath == undefined)? '' : relativePath) + 'js/vendor/ZeroClipboard.swf',
			copy: function() {
				return copyLink;
			},
			afterCopy: function() {
				return false;
			}
		});
	};
	
	return {
		init: init
	};
})(window, jQuery);
