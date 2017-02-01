$(document).ready(function () {
	$("#firstPageButton").click(function () {
		var dialogDiv = $("<div id='dialog-div-one' class='dialog' title='string value'><iframe src='modalPageOne.html' frameborder='0'></iframe></div>")
			.data("modalDataProperty", $("#someInputOnFirstPage").val())
			.dialog({
				closeOnEscape: false,
				title: "first modal dialog",
				modal: true,
				close: function (event, ui) {
					dialogDiv.dialog('destroy').remove();
				},
				width: 400
			});
	});
});