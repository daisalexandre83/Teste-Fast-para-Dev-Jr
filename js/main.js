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

 $(".steps-page2-bank").click(function() {
  console.log('daiane');
    $(".bank1-copy").toggleClass('bank-data-highlight');
    $(".bank1-copy").toggleClass('pisca');
}) 

$(".steps-page2-action").click(function() {
    $(".bank1-copy").toggleClass('pisca');
})

$(".bank1-copy").click(function () {
    console.log('souza');
    $(".steps-page2-text").hide();
    $(".steps-page2-bank").hide();
    $(".steps-page2-line-vertical").hide();
    $(".steps-page2-image").hide();
    $(".steps-page2-pen").hide();
    $(".steps-page2-image2").hide();
    $(".steps-page2-status").hide();
    $(".steps-page2-image4").hide();
    $(".steps-page2-action").hide();
    $(".steps-page2b").show();
    $(".steps-page2b-form-a").show();
    $(".steps-page2b-form-b").show();
    $(".steps-page2b-form-c").show();
    $(".steps-page2b-form-d").show();
    $(".steps-page2b-form-e").show();
})

$("#steps-page2b-big-input").click(function () {
    $("#steps-page2b-accord-input").hide();
    $("#steps-page2b-numbers-input").show();
    $("#steps-page2b-label").show();
})

$("#steps-page2b-medium-input").click(function () {
    $("#steps-page2b-accord-input").hide();
    $("#steps-page2b-numbers-input").show();
    $("#steps-page2b-label").show();
})

$("#steps-page2b-small-input").click(function () {
    $("#steps-page2b-accord-input").hide();
    $("#steps-page2b-numbers-input").show();
    $("#steps-page2b-label").show();
})

$("#steps-page2b-account-input").click(function () {
    $("#steps-page2b-accord-input").hide();
    $("#steps-page2b-numbers-input").show();
    $("#steps-page2b-label").show();
})

$("#steps-page2b-accord-input").click(function () {
    $("#steps-page2b-accord-input").hide();
    $("#steps-page2b-numbers-input").show();
    $("#steps-page2b-label").show();
})


$("#steps-page2b-selected-option").click(function () {
    $("#steps-page2b-accord-input").hide();
    $("#steps-page2b-numbers-input").show();
    $("#steps-page2b-label").show();
})





