$(document).ready(function () {
	$("#secondPageButton").click(function () {
		var dialogDivTwo = window.parent.$("<div id='dialog-div-two' class='dialog' title='string value'><iframe src='modalPageTwo.html' frameborder='0'></iframe></div>")
			.data("modalDataProperty", $("#secondPageInput").val())
			.dialog({
				closeOnEscape: false,
				title: "second modal dialog",
				modal: true,
				close: function (event, ui) {
					dialogDivTwo.dialog('destroy').remove();
				},
				width: 400
			});
	});

	$("#content").text(window.parent.$(window.frameElement.parentElement).data("modalDataProperty"));
});