$("#user-action").click(function() {
    $(".page-subtext").hide();
    $(".page-thick-line").hide();
    $(".img-cash").hide();
    $("#user-action").hide();
     $("#steps").show();
    $("#step-1-radio2").hide();
    $(".page-subtext").hide(); 
    
})

jQuery(document).ready(function () {
   
    var navListItems = $('ul.setup-panel li a');
        allWells = $('.setup-content');
    
    allWells.hide();
    navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
        $item = $(this).closest('li');

        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });
    $('ul.setup-panel li.active a').trigger('click');

    $('#activate-step-2').on('click',function(e) {
    // $('ul.setup-panel li:eq(1)').removeClass('disabled');
    $('ul.setup-panel li a[href="#step-2"]').trigger('click');
    $(this).remove();
    })

    $('#activate-step-3').on('click',function(e) {
    // $('ul.setup-panel li:eq(2)').removeClass('disabled');
    $('ul.setup-panel li a[href="#step-3"]').trigger('click');
    $(this).remove();
    }) 

    $('#activate-step-4').on('click',function(e) {
        // $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $(this).remove();
        }) 

    $('#activate-step-5').on('click',function(e) {
        // $('ul.setup-panel li:eq(4)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-5"]').trigger('click');
        $(this).remove();
        })     

}); 


$("#step-1-yes1-option").click(function () {
    $("#step-1-radio2").show();
})

$("#step-1-yes2-option").click(function () {
    $(".step-1-form-checkbox").show();
   
})


$(".step-1-ckeckbox").click(function () {

let checkbox1 = $('#step-1-confirm1');
let checkbox2 = $('#step-1-confirm2');
let checkbox3 = $('#step-1-confirm3');

if(checkbox1.is(":checked") && checkbox2.is(":checked") && checkbox3.is(":checked")){
    $("#activate-step-2").show();
 }

}) 

/* $("#activate-step-2").click(function name(params) {
    
}) */

 $(".step-2-bank").click(function() {
  console.log('daiane');
    // $(".bank1-copy").toggleClass('bank-data-highlight');
    // $(".bank1-copy").toggleClass('highlight-border');
    $(".bank1-copy").toggleClass('pisca');
}) 

$("#step-2-action").click(function() {
    $(".bank1-copy").toggleClass('pisca');
})



$(".bank1-copy").click(function () {
    $(".step-2-a").hide();
    $(".step-2-b").show();
   $("#activate-step-3").show();
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

$(".step-3-image").click(function () {
   $("#steps-page3-action").toggleClass('pisca'); 
    $(".small-text").toggleClass('pisca');
    $("#activate-step-4").toggleClass('pisca');
   /*  $(".steps-page3-action").toggleClass('highlight-border');
    $(".small-text").toggleClass('highlight-border'); */
})

/*  $("#steps-page3-action").click(function (){
    console.log('lorena');
    $(".steps-page4-content").show();
})  */


$(".step-doubts").click(function () {
    console.log('daiane');
    $("#exampleRadios1").toggleClass('pisca');
    $("#exampleRadios2").toggleClass('pisca');
})




