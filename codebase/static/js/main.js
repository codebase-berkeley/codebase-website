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
});