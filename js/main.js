$(".user-action").click(function() {
    $(".page-subtext").hide();
    $(".page-thick-line").hide();
    $(".img-cash").hide();
    $(".user-action").hide();
    $(".steps-page").show();
    $(".wizard > .actions a").hide();
    $("#steps-page-content-one-part2").hide();
    $("#steps-page-content-one-part3").hide();
    $(".page-subtext").hide();
})


$(".steps-page").steps({
    headerTag: "h3",
    bodyTag: ".content",
    transitionEffect: "slideLeft",
    autoFocus: true
});

$("#yes-option-part1").click(function () {
    $("#steps-page-content-one-part2").show();
})

$("#yes-option-part2").click(function () {
    $("#steps-page-content-one-part3").show();
})


 $(".steps-page-ckeckbox").click(function () {

    let checkbox1 = $('#input1-checkbox');
    let checkbox2 = $('#input2-checkbox');
    let checkbox3 = $('#input3-checkbox');

    if(checkbox1.is(":checked") && checkbox2.is(":checked") && checkbox3.is(":checked")){
        $(".wizard > .actions a").show();
    }

}) 

