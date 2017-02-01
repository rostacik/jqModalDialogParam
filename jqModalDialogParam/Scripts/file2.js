$(document).ready(function()
{
	//debugger;
	$("#content").text(window.parent.$(window.frameElement.parentElement).data("modalDataProperty"));
});