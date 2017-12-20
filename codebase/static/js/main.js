$(document).ready(function() {
	/*Set up the navbar collapse for mobile*/
	var navbarButtonToggleId = "navbar-toggle";
	var navbarCollapseClass = "navbar-collapse";
	
	var button = $("#" + navbarButtonToggleId);
	var navbarCollapse = $("." + navbarCollapseClass);

	if (button) {
		button.on("click", function(e) {
			if (navbarCollapse.css("display") == "none") {
				// Expand it
				navbarCollapse.slideDown("fast");
			} else {
				// Collapse it
				navbarCollapse.slideUp("fast");
			}
		})
	}

	$(window).scroll(function() {
		if ($(this).scrollTop() >= 100) {
			$('.scroll-to-top').fadeIn(200);
		} else {
			$('.scroll-to-top').fadeOut(200);
		}
	});

	$('.scroll-to-top').click(function() {
		$('body,html').animate({
				scrollTop : 0
			}, 500);
	});
});