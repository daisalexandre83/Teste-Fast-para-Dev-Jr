$(".user-action").click(function() {
    $(".subtext").hide();
    $(".thick-line").hide();
    $(".img-cash").hide();
    $(".user-action").hide();
    $("#steps-page").show();
    $(".wizard > .actions a").hide();
    $("#part2-block1").hide();
    $("#part3-block1").hide();
})


$("#steps-page").steps({
    headerTag: "h3",
    bodyTag: ".content",
    transitionEffect: "slideLeft",
    autoFocus: true
});

$("#yes-option-part1").click(function () {
    $("#part2-block1").show();
})

$("#yes-option-part2").click(function () {
    $("#part3-block1").show();
})


/* $(".input-part3-block1").click(function () {


    input1 = document.getElementById("input1-checkbox");
    input2 = document.getElementById("input2-checkbox");
    input3 = document.getElementById("input3-checkbox");

    if(input1 == checked && input2 == checked && input3 == checked){
        $(".wizard > .actions a").show();
    }


}) */

$(".input-part3-block1").click(function () {
    
})
