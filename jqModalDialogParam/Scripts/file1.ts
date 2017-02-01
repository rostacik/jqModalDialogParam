$(document).ready(() =>
{
	$("#openDialog").click(function ()
	{
		var dialogDiv = $("<div id='dialog-div' class='dialog' title='" + $("#windowTitle").text() + "'><iframe src='insidePage.html' frameborder='0'></iframe></div>")
			.data("myProperty", $("#dataValue").val())
			.dialog({
				closeOnEscape: false,
				title: "I am modal dialog",
				modal: true,
				close: function (event, ui)
				{
					dialogDiv.dialog('destroy').remove();
				}
			});
	});
});