$(document).ready(function()
{
	debugger;

	var retVal = window.parent.$(window.frameElement.parentElement).data("modalDataProperty");

	if ($.type(retVal) === "error") {
		$("#content").text("Error : " + retVal.message + " , stack trace : " + retVal.stack);
	} else {
		$("#content").text(retVal);
	}
});