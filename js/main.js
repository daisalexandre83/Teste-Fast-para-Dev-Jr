$(".user-action").click(function() {
    $(".subtext").hide();
    $(".thick-line").hide();
    $(".img-cash").hide();
    $(".user-action").hide();
    $("#steps-page").show();
})



$("#steps-page").steps({
    headerTag: "h3",
    bodyTag: ".content",
    transitionEffect: "slideLeft",
    autoFocus: true
});
