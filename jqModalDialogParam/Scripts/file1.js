$(document).ready(function()
{
  if (!Modernizr.inputtypes.date) {
		$('input[type=date]').datepicker({
				dateFormat : 'mm/dd/yy'
			}
    );
  }

	$("#openStringDialog").click(function ()
	{
		var dialogDiv = $("<div id='dialog-div' class='dialog' title='string value'><iframe src='modalPage.html' frameborder='0'></iframe></div>")
			.data("modalDataProperty", $("#stringDataValue").val())
			.dialog({
				closeOnEscape: false,
				title: "string value",
				modal: true,
				close: function (event, ui)
				{
					dialogDiv.dialog('destroy').remove();
				},
				width: 400
			});
	});

	$("#openDateDialog").click(function ()
	{
		var dialogDiv = $("<div id='dialog-div' class='dialog' title='Date value'><iframe src='modalPage.html' frameborder='0'></iframe></div>")
			.data("modalDataProperty", new Date($("#datePicker").val()))
			.dialog({
				closeOnEscape: false,
				title: "Date value",
				modal: true,
				close: function (event, ui)
				{
					dialogDiv.dialog('destroy').remove();
				},
				width: 400
			});
	});


});