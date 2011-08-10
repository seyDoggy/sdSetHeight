/*
	# sdSetHeight - vertical alignment function #

	AUTHOR:	Adam Merrifield <http://adam.merrifield.ca>
	VERSION: 1.1.0
	DATE: 07-28-11 12:07

	UPDATES:
	- (1.1.0) added comparative element arg
			- changed namespace from seydoggySetHeight to sdSetHeight
	- (1.0.1) changes
	- (1.0.0) initial release

	ARG DEFINITIONS:
	- elem is the comparative element
	- value is the number in px to increase the height by 

	USAGE:
		$('.someContainer').sdSetHeight($('.someComparative',30));
*/
/* @group sdSetHeight 1.0.0 07-28-11 12:07 */
 (function($) {
    $.fn.sdSetHeight = function(elem, value) {
        sdTallest = 0;
        $(elem).each(function() {
            var thisTallest = $(this).outerHeight(true);
            if (thisTallest > sdTallest) sdTallest = thisTallest;
        });
        $(this).height(sdTallest + value);
    };
})(jQuery);
/* END sdSetHeight */