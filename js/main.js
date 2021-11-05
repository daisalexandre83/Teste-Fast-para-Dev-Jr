$(".user-action").click(function() {
    $(".page-subtext").hide();
    $(".page-thick-line").hide();
    $(".img-cash").hide();
    $(".user-action").hide();
    $(".steps-page").show();
    $(".wizard > .actions a").hide();
    $("#steps-page1-radio2").hide();
    $("#steps-page1-form-checkbox").hide();
    $(".page-subtext").hide();
})


$(".steps-page").steps({
    headerTag: "h3",
    bodyTag: ".content",
    transitionEffect: "slideLeft",
    autoFocus: true
});

$("#yes-option-part1").click(function () {
    $("#steps-page1-radio2").show();
})

$("#yes-option-part2").click(function () {
    $("#steps-page1-form-checkbox").show();
})


 $(".steps-page1-ckeckbox").click(function () {

    let checkbox1 = $('#steps-page1-ckeckbox1');
    let checkbox2 = $('#steps-page1-ckeckbox2');
    let checkbox3 = $('#steps-page1-ckeckbox3');

    if(checkbox1.is(":checked") && checkbox2.is(":checked") && checkbox3.is(":checked")){
        $(".wizard > .actions a").show();
    }

}) 

