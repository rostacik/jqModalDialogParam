$(document).ready(() =>
{
	debugger;
	alert((<any>window.parent).$(window.frameElement.parentElement).data("myProperty"));
});