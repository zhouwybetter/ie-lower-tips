/*
 * IE Alert! jQuery plugin
 * version 1
 * author: David Nemes http://nmsdvid.com
 * http://nmsdvid.com/iealert/
 */

(function($) {

	function initialize($obj, support, title, text) {

		var panel = "<span>" + title + "</span>" +
			"<p> " + text + "</p>" +
			"<div class='browser'>" +
			"<ul>" +
			//"<li><a class='chrome' href='https://www.google.com/chrome/' target='_blank'></a></li>" +
			"<li><a class='chrome' href='http://www.chromeliulanqi.com/' target='_blank'></a></li>" +
			"<li><a class='firefox' href='http://www.mozilla.org/en-US/firefox/new/' target='_blank'></a></li>" +
			"<li><a class='ie9' href='http://windows.microsoft.com/en-US/internet-explorer/downloads/ie/' target='_blank'></a></li>" + 
			"<li><a class='safari' href='http://www.apple.com/safari/download/' target='_blank'></a></li>" +
			"<li><a class='opera' href='http://www.opera.com/download/' target='_blank'></a></li>" +
			"<ul>" +
			"</div>";

		var overlay = $("<div id='ie-alert-overlay'></div>");
		var iepanel = $("<div id='ie-alert-panel'>" + panel + "</div>");

		var docHeight = $(document).height();

		overlay.css("height", docHeight + "px");

		if(support === "ie9") {
			//alert(parseInt($.browser.version,10)<10);
			if($.browser.msie && parseInt($.browser.version, 10) < 10) {
				
				$obj.prepend(iepanel);
				$obj.prepend(overlay);

			}

			if($.browser.msie && parseInt($.browser.version, 10) === 6) {

				$("#ie-alert-panel").css("background-position", "-626px -116px");
				$obj.css("margin", "0");

			}
		} else if(support === "ie8") { // shows the alert msg in IE8, IE7, IE6

			if($.browser.msie && parseInt($.browser.version, 10) < 9) {

				$obj.prepend(iepanel);
				$obj.prepend(overlay);

			}

			if($.browser.msie && parseInt($.browser.version, 10) === 6) {

				$("#ie-alert-panel").css("background-position", "-626px -116px");
				$obj.css("margin", "0");

			}

		} else if(support === "ie7") { // shows the alert msg in IE7, IE6

			if($.browser.msie && parseInt($.browser.version, 10) < 8) {

				$obj.prepend(iepanel);
				$obj.prepend(overlay);
			}

			if($.browser.msie && parseInt($.browser.version, 10) === 6) {

				$("#ie-alert-panel").css("background-position", "-626px -116px");
				$obj.css("margin", "0");

			}

		} else if(support === "ie6") { // shows the alert msg only in IE6

			if($.browser.msie && parseInt($.browser.version, 10) < 7) {

				$obj.prepend(iepanel);
				$obj.prepend(overlay);

				$("#ie-alert-panel").css("background-position", "-626px -116px");
				$obj.css("margin", "0");

			}
		}

	}; //end initialize function

	$.fn.iealert = function(options) {
		var defaults = {
			support: "ie9", // ie8 (ie6,ie7,ie8), ie7 (ie6,ie7), ie6 (ie6)
			title: "您当前使用的浏览器(IE)版本过低!!!", // title text
			text: "为了网站更好的体验效果,我们建议您升级到最新版本的IE(ie11,或edge)或选择其他现代web浏览器。可从下列浏览器中选择一个下载安装使用>>><br />"
		};

		var option = $.extend(defaults, options);

		return this.each(function() {
			if($.browser.msie) {
				var $this = $(this);
				initialize($this, option.support, option.title, option.text);
			} //if ie	
		});

	};
})(jQuery);