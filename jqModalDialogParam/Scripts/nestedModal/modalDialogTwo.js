$(document).ready(function () {
	$("#content").text(window.parent.$(window.frameElement.parentElement).data("modalDataProperty"));
});