var com = com || {};
com.codio = com.codio || {};

com.codio.AnimatedTable = function(domElement) {
	if (domElement.nodeType && domElement.nodeType == 1) {
		this._$table = $(domElement);
		this._$sortedBy = null;
		this._initialized = false;

		this._init();
	}
	else {
		throw new Error("Impossible to create AnimatedTable: invalid argument.");
	}
}

com.codio.AnimatedTable.TWEEN_TIME = .3;

com.codio.AnimatedTable.prototype._init = function() {
	if(!this._initialized) {
		this._addListeners();
		this._$table.find(".fn_row_2").height(0);
	}
}

com.codio.AnimatedTable.prototype._addListeners = function() {
	this._$table.on("mouseenter", ".fn_item", function(e) {
		this.open(e.currentTarget);
	}.bind(this));
	this._$table.on("mouseleave", ".fn_item", function(e) {
		this.close(e.currentTarget);
	}.bind(this));
	this._$table.find(".fn_by_type, .fn_by_capacity, .fn_by_cost, .fn_by_speed, .fn_by_volatile").on("click", function(e) {
		var $item = $(e.currentTarget);
		if($item.hasClass("fn_descending")) {
			this.sortItems($item.attr("data-sort-by"), true);
			$item.removeClass("fn_descending").addClass("fn_ascending");
		}
		else {
			this.sortItems($item.attr("data-sort-by"), false);
			$item.removeClass("fn_ascending").addClass("fn_descending");
		}
		if(this._$sortedBy && $item.attr("class") != this._$sortedBy.attr("class")) {
			this._$sortedBy.removeClass("fn_descending fn_ascending");
		}
		this._$sortedBy = $item;
	}.bind(this))
}

com.codio.AnimatedTable._removeListeners = function() {
	this._$table.off("mouseenter");
	this._$table.off("mouseleave");
	this._$table.find(".fn_by_type, .fn_by_capacity, .fn_by_cost, .fn_by_speed, .fn_by_volatile").off("click");
}

com.codio.AnimatedTable.prototype.open = function(item) {
	var $row1 = $(item).find(".fn_row_1");
	var $row2 = $(item).find(".fn_row_2");
	var $row1Divs = $(item).find(".fn_row_1 > div:not(:last-child)");
	var $type = $(item).find(".fn_type");
	var row2Height = $row2.css("height", "auto").height();
	var totalHeight = $row1.height() + row2Height;
	var $arrow = $(item).find(".fn_arrow");
	var tweenTime = com.codio.AnimatedTable.TWEEN_TIME;
	$row2.height(0);

	$(item).css("z-index", 2);
	$row1Divs.css("background-image", "url('images/storage_table_separator.png')");
	TweenMax.to(item, tweenTime, {backgroundColor: "#444547"});
	TweenMax.to($row1, tweenTime, {color: "#e6e6e6"});
	TweenMax.to($row1Divs, tweenTime, {backgroundSize: "1px 50px"});
	TweenMax.to($row2, tweenTime, {height: row2Height});
	TweenMax.to($type, tweenTime, {height: totalHeight});
	TweenMax.to($type.find("h1"), tweenTime, {fontSize: 13});
	TweenMax.to($arrow, tweenTime, {top: (totalHeight - $arrow.height()) / 2})
}

com.codio.AnimatedTable.prototype.close = function(item) {
	var $row1 = $(item).find(".fn_row_1");
	var $row2 = $(item).find(".fn_row_2");
	var $row1Divs = $(item).find(".fn_row_1 > div:not(:last-child)");
	var $type = $(item).find(".fn_type");
	var totalHeight = $row1.height();
	var $arrow = $(item).find(".fn_arrow");
	var tweenTime = com.codio.AnimatedTable.TWEEN_TIME;

	$(item).css("z-index", 1);
	$row1Divs.css("background-image", "url('images/storage_table_dark_separator.png')");
	TweenMax.to(item, tweenTime, {backgroundColor: "#26292c"});
	TweenMax.to($row1, tweenTime, {color: "#a4a4a4"});
	TweenMax.to($row1Divs, tweenTime, {backgroundSize: "1px 100%"});
	TweenMax.to($row2, .3, {height: 0});
	TweenMax.to($type,.3, {height: totalHeight});
	TweenMax.to($type.find("h1"), tweenTime, {fontSize: 12});
	TweenMax.to($arrow, tweenTime, {top: 45})
}

com.codio.AnimatedTable.prototype.sortItems = function(attributeName, ascending) {
	var sortedArr = this._$table.find(".fn_item").toArray().sort(function(a, b) {
		var at = parseInt($(a).attr(attributeName));
		var bt = parseInt($(b).attr(attributeName));
		if(ascending) return at - bt;
		else return bt - at
	})
	this._$table.find(".fn_item").remove();
	var $sortedItems = jQuery.makeArray(sortedArr);
	this._$table.append($sortedItems);
}

com.codio.AnimatedTable.destroy = function() {
	this._removeListeners();
}