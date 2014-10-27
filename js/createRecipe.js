$(document).ready( function() {
	CreateRecipe.init();
});

var CreateRecipe = (function(window, $) {
	var saveModal, cancelModal;
	var content;
	var shareLink, saveState;
	
	var init = function() {
		saveModal = $('#saveModal');
		cancelModal = $('#cancelModal');
		content = ["Mili Pickled Lettuce 182G","Mili Braised Peanuts 170G","Narcissus Pickled Lettuce 198G","Kara Coconut Cream 200ML","Ayam Brand Trim Coconut Milk 200ML","Ayam Brand Coconut Milk 200ML","Ice Cool Cream Style Corn 425G","Gulong Pork Mince With Bean Paste 180G","Lee Kum Kee Light Soy Sauce 500ML","Woh Hup Sup Soy Sauce-Light 640ML","Narcissus Pork Mince w/ Bean Paste 180G","Fairprice Mee Suah 300G","Narcissus Mushrooms Sliced (Pieces & Stems) 425G","Myojo Quick Cup Noodles - Chicken 66G","Myojo Quick Cup Noodles - Curry 73G","Myojo Quick Cup Noodles - Tom Yam 76G","Myojo Quick Cup Noodles - Seafood 69G","Greenland Whole Mushroom 425G","Nongshim Cup Noodles - Kimchi 70G","Nongshim Cup Noodles - Korean Clay Pot Ramyun 70G","Mili Whole Mushrooms 425G","Fairprice Fine Sugar 1KG","Fairprice Coarse Sugar 1KG","Narcissus Whole Mushrooms 425G","Hosen Pineapple Slice 565G","Mili Pineapple Cubes In Heavy Syrup 454G","Fairprice Pickled Lettuce 190G","Fairprice Pickled Cucumber 190G","Delmonte Corn Box - Cream Style 380G","Delmonte Corn Box - Whole Kernel 380G","AAA Bamboo In Chilli Oil 170G","Myojo Big S'pore Curry Bowl Noodle 100G","Wei Chuan Fried Gluten (Granule) In Soy Sauce 170G","Wei Chuan Fried Gluten w P'nuts (Granule) 170G","Mili Pork Luncheon Meat 170G","Ice Cool Pcs & Stems Mushroom 425G","Ice Cool Whole Mushroom 425G","Nongshim Bowl Noodles - Korean Clay Pot Ramyun 117G","Nongshim Bowl Noddles - Spicy Mushroom 117G","Nongshim Bowl Noodles - Kimchi 117G","Hosen Pineapple Cubes In Syrup 565G","Nissin Cup Noodle - Tom Yam Vegetarian 75G","Nissin Cup Noodle - Chilli Crab 75G","Nissin Cup Noodle - Spicy Seafood 75G","Nissin Cup Noodle - Laksa 75G","Nissin Cup Noodle - Tom Yam Seafood 75G","Nissin Cup Noodle - Seafood 75G","Nissin Cup Noodle - Chicken 75G","Nissin Cup Noodle - Mushroom Chicken 75G","Nissin Cup - Prawn 75G","Narcissus Chao San Si 198G","Gulong Chaosansi 198G","Fairprice Boiled Ginko Nuts 397G","Tiger Black Salted Black Soya Beans 370G","Nissin Cup Ndle - Cream Of Chkn 75G","Myojo Instant Noodles - Curry 5S 80G","Knorr Cup Porridge - Chicken & Mushroom 35G","Knorr Cup Porridge - Chicken And Corn 35G","Knorr Cup Porridge - Chicken 35G","Indofood Mi Goreng Hot Fried Noodles - Extra Hot 5S","Indofood Mi Goreng Fried Noodles 5S","Fairprice Instant Noodle - Tom Yam 5S 85G","Fairprice Instant Noodle - Chicken Abalone 5S 85G","Fairprice Instant Noodles - Chicken 5S 85G","Fairprice Instant Noodle - Curry 5S 85G","Fairprice Instant Noodle - Mushroom 5S 85G","Soyjoy Fruit Soy Bar - Raisin Almond 27G","Soyjoy Fruit Soy Bar - Apple 30G","Farmland Tuna & Onion In Polyunsaturated Oil 185G","Farmland Tuna Flake In Polyunsaturated Oil 185G","Farmland Tuna Sandwich In Polyunsaturated Oil 185G","Mili Vegetarian - Mock Abalone 280G","Mili Vegetarian - Lo Han Chai 280G","Mili Vegetarian - Buddha Jump Over The Wall 280G","Mili Vegetarian - Mock Chicken 280G","Mili Vegetarian - Seasoning Mixed Mushroom 280G","Mili Vegetarian - Jin Huang Shuang Bao 280G","Maggi Tomato Ketchup (B) 485G","Farmland Tuna Chunk In Polyunsaturated Oil 185G","Farmland Tuna Chunk In Brine 185G","Knorr Stock Cubes - Chicken 60G","Knorr Stock Cubes - Vegetables 60G","Knorr Stock Cubes - Fish 60G","Knorr Stock Cubes - Beef 60G","Mili Lychees In Heavy Syrup 565G","Campbell's Condensed Soup - Mushroom Potage 305G","Campbell's Creamy Chicken Mushroom 305G","Campbell's Condensed Soup - Cream Of Potato 305G","Campbell's - Cream Of Mushrm W Rstd Garlic 305G","Campbell's Condensed Soup - Borsch 305G","Tiger Brand Salted Soya Bean Paste 370G","Fairprice Plain Flour 1KG","365 Wheat Flour For Cakes & Pastry Making 1Kg","Ice Cool Fruit Cocktail In Syrup 850G","Kelly's Portion Pack - Chicken Lyoner 100G","Kelly's Portion Pack - Beef Pastrami 100G","Kelly's Portion Pack - Luncheon Ham Bacon Bits 100G","Kelly's Portion Pack - Luncheon Ham Picante Pork 100G","Lee Kum Kee Soup Base - Seafood Hot Pot 50G","Lee Kum Kee Sauce - Honey Garlic Spare Ribs 70G","Lee Kum Kee Sauce -Sweet & Sour Pork /Spare Ribs 80G","Lee Kum Kee Sauce - Black Bean Chicken 50G","Lee Kum Kee Sauce - Teriyaki Chicken 72G","Lee Kum Kee Sauce - Fried Cod Fillet 50G","Lee Kum Kee Sauce - Tomato Garlic Prawns 70G","Lee Kum Kee Sauce - Oriental Pork Chop 80G","Lee Kum Kee Sauce - Lemon Chicken 80G","Lee Kum Kee Sauce - Ma Po Tofu 80G","Knorr Stock Cubes No Msg - Chicken 60G","Lee Kum Kee Superior Soy Sauce - Light 500ML","Wai Wai Vermicelli 500G","Prima Taste Sauce - Sweet & Spicy Seafood 80G","Prima Taste Sauce - Sambal Chilli (Asian Chill) 80G","Prima Taste Fragrant Hainanese Chicken Rice 80G","Poppin Microwave Popcorn - Butter Flavour 100G","Knorr Soup Mix - Cream Of Chicken 58G","Knorr Soup - Tiger Lily & Mushroom 43G","Knorr Soup Mix - Seafood 37G","Knorr Soup Mix - Chicken And Mushroom 43G","Knorr Soup Mix - Hot & Sour 62G","Yifon Spicy Golden Mushrooms 170G","Yifon Spicy Nameko Mushroom 170G","Yifon Tea Tree Mushrooms 170G","Prima Taste Paste - Mee Siam Goreng 80G","Myojo Instant Noodles - Vegetarian Mushroom 5S 85G","Myojo Instant Noodles - Chicken Abalone 5S 85G","Myojo Instant Noodles - Chicken Tanmen 5S 85G","Myojo Instant Noodles - Chicken Curry 5S 85G","Myojo Instant Noodles - Shrimp Tanmen 5S 85G","Chng Kee's Kung Bo Sauce 240ML","San Remo Pasta - Penne 500G","San Remo Pasta - Vegeroni Spirals 375G","San Remo Pasta - Elbows 500G","Hunt's Diced Tomato 411G","San Remo Pasta - Instant Spaghetti 500G","San Remo Pasta - Spaghetti 500G","San Remo Pasta - Vermicelli 500G","San Remo Pasta - Angel Hair 500G","San Remo Pasta - Linguine 500G","Myojo Instant Noodles - Korean Kimchi 5S 85G","Myojo Instant Noodles - Mee Goreng 5S 80G","Myojo Instant Noodles - Mee Poh Dry 5S 85G","Myojo Instant Noodles - Ramen Char Mee 5S 85G","Myojo Instant Noodles - Thai Tom Yam 5S 85G","Myojo Instant Noodles - Prawn 5S 85G","Mama Instant Noodles - Shrimp Tom Yam 5S 60G","Mili Pork Luncheon Meat 397G","SIS White Sugar Cubes - Box 454G","Campbell's Instant Soup - Chicken Pasta 69G","Campbell's Instant Soup - Mushroom Pasta 69G","Campbell's Instant Soup - Cream Of Mushroom 21.1G","Campbell's Instant Soup - Cream Of Corn 22G","Campbell's Instant Soup - Cream Of Chicken 22G","Prego Pasta Sauce - Traditional 300G","Prego Pasta Sauce - Cheese & Herbs 300G","Prego Pasta Sauce - Mushroom 300G","Hosen Longan In Syrup 565G","Prego Pasta Sauce - Carbonara Mushroom 300G","Maggi Tom Yam Noodles 5S 83G","Maggi Instant Noodles - Chicken 5S 77G","Maggi Instant Noodles - Assam Laksa 5S 78G","Maggi Instant Noodles - Curry 5S 79G","Maggi Chilli Sauce (B) 500G","Nissin Fns Tepp/Yakisoba 5S 90G","Nissin Tom Yum Mee Goreng5S 85G","Ayam Brand Sardines - Ext Virgin Olive Oil & Chilli 120G","Ayam Brand Sardines - Chilli & Lime Tomato Sauce 120G","Ayam Brand Sardines - In Black Beans 120G","Ayam Brand Sardines - In Teriyaki Sauce 120G","Ayam Brand Sardines - Spring Water 120G","Ayam Brand Sardines - In Tomato Sauce 120G","Ayam Brand Sardines-Ex Virgin Oilve Oil & G P'Corn 120G","Prima Plain Flour 1KG","Nissin Instant Noodles - Garlic Chicken 5S 86G","Nissin Instant Noodles - Spicy Sesame 5S 86G","Nissin Instant Noodles - Chicken 5S 85G","Nissin Instant Noodles - Sesame Oil 5S 85G","Nissin Instant Noodles - Tomyam 5S 85G","Nissin Instant Noodles (W Soup Base) - Prawn 5S 85G","Companion - Assorted Champignon Delights 285G","Companion - Braised Vegetarian Abalone 285G","Companion -Asst Oriental Delights (Lo-Han-Chai) 285G","Companion - Peking Vegetarian Roast Duck 285G","Brahim's Spicy Tamarind Sauce 180G","Brahim's Rendang Sauce 180G","Campbell's Instant Soup-Mushrm Cheese W Croutons 63G","Campbell's Instant Soup - Mushrm Chk W Croutons 63G","Gulong Spiced Pork Cubes 142G","Campbell's New England Clam Chowder 305G","Campbell's Premium Selection - Wild Mushroom 300G","Campbell's Premium Selectn - C'style Mushrm Chk 300G"];
		saveState = false;
		
		_bindUIEvent();
	},
	
	changeSaveState = function(state) {
		saveState = state;
	},
	
	_bindUIEvent = function() {
		_initButtons();
		_initXEditable();
		_loadFooterEvents();
		//_loadScrollEvents();
		_loadSaveEvents();
		_loadCancelEvents();
		_loadResizeEvents();
	},
	
	_initButtons = function() {
		$('.close').click(function() {
			saveState = false;
			var parentRow = $(this).parents('tr');
			parentRow.remove();
			if (parentRow.hasClass('recipe')) {
				if (parentRow.hasClass('rd1')) {
					$('.recipe.rh1').data('item', $('.recipe.rh1').data('item') - 1);
					if ($('.recipe.rh1').data('item') == 0) {
						$('.recipe.rh1').remove();
					}
				}
				else {
					$('.recipe.rd1').remove();
				}
			}
		});
	},
	
	_initXEditable = function() {
		$.fn.editable.defaults.mode = 'inline';
		
		$('#ingredientsTable').find('td').each(function() {
			_loadXEditable($(this));
		});
	},
	
	_loadXEditable = function(elem) {
		elem.find('a[data-type="typeaheadjs"]').editable({
			emptytext: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
			onblur: 'submit',
			typeahead: {
				local: content
			}
		});
		elem.find('a[data-type="text"]').editable({
			emptytext: '&nbsp;&nbsp;&nbsp;',
			onblur: 'submit'
		});
		
		elem.find('a[data-type="typeaheadjs"]').on('save', function(e, params) {
			saveState = false;
			var deleteColumn = $(this).parent().siblings(':last');
			
			if (params.newValue != '') {
				deleteColumn.html('<a class="close"><i class="glyphicon glyphicon-remove"></i></a>');
			}
			else {
				deleteColumn.empty();
			}
			
			$('.close').unbind('click');
			_initButtons();
		});
	},
	
	_loadFooterEvents = function() {
		var focus = false;
		var count = 0;
		setInterval(function(){
			count++;
			if (count > 1 && !focus) {
				$("#footer").slideDown(); // appear
			}
		}, 500);
		
		// Show/Hide footer
		$('html').on('focus', '.editable-input', function() {
			focus = true;
			$("#footer").slideUp(); // disappear
		});
		
		$('html').on('focusout', '.editable-input', function() {
			focus = false;
			count = 0;
		});
	},
	
	_loadScrollEvents = function() {
		$('.ingredient_scroll').scroll(function() {
			var scrollTop = $(this).scrollTop();
			var maxScrollTop = $(document).height() - $(window).height();
			var timeouts = [];
			
			// Load new rows
			if (scrollTop > (0.1 * maxScrollTop)) {
				$('#ingredientsTable').find('tbody').append(
					'<tr>' +
						'<td class="col-xs-9"><a href="#" data-type="typeaheadjs"></a></td>' +
						'<td class="col-xs-2"><a href="#" data-type="text"></a></td>' +
						'<td class="col-xs-1"></td>' +
					'</tr>'
				);
				$('#ingredientsTable').find('tr:last').find('td').each(function() {
					_loadXEditable($(this));
				});
			}
		});
	},
	
	_loadSaveEvents = function() {
		var recipeName = $('#recipeName').val();
		$('#save').click(function() {
			saveState = true;
			saveModal.find('.modal-body').html('<span>' + ((recipeName == '')? 'New recipe': recipeName) + ' added to \'My Recipes\'!</span>');
			saveModal.on('hidden.bs.modal', function() {
				window.location.href = 'myRecipes.html';
			});
			saveModal.modal('show', calibrateSaveModal());
		});
		
		$('#update').click(function() {
			saveState = true;
			saveModal.find('.modal-body').html('<span>' + ((recipeName == '')? 'New recipe': recipeName) + ' updated!</span>');
			saveModal.on('hidden.bs.modal', function() {
				window.location.href = '../myRecipes.html';
			});
			saveModal.modal('show', calibrateSaveModal());
		});
	},
	
	_loadCancelEvents = function() {
		$('#cancel').click(function() {
			if (saveState || $('#ingredientsTable tbody').find('td').text().trim() == '') {
				cancelModal.find('button[type="button"]').click();
			}
			else {
				cancelModal.modal('show', calibrateCancelModal());
			}
		});
	},
	
	_loadResizeEvents = function() {
		$(window).on('resize', function () {
			saveModal.find(':visible', calibrateSaveModal());
			cancelModal.find(':visible', calibrateCancelModal());
		});
	};
	
	function calibrateSaveModal() {
		$(this).css('display', 'block');
		var dialog = saveModal.find(".modal-dialog");
		var offset = ($(window).height() - dialog.height()) / 2;
		// Center modal vertically in window
		dialog.css("margin-top", offset);
	}
	
	function calibrateCancelModal() {
		$(this).css('display', 'block');
		var dialog = cancelModal.find(".modal-dialog");
		var offset = ($(window).height() - dialog.height()) / 2;
		// Center modal vertically in window
		dialog.css("margin-top", offset);
	}
	
	return {
		init: init,
		changeSaveState: changeSaveState
	};
})(window, jQuery);
