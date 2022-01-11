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

     $('#activate-return-step-2').on('click',function(e) {
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

    $("#activate-step-4-2").on('click',function (e) {
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

$(".step-2-bank").click(function() {
  console.log('daiane');
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

$("#step-2-text-big-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$("#step-2-medium-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$("#step-2-small-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$("#step-2-account-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$("#step-2-accord-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})


$("#steps-page2b-selected-option").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$(".step-3-image").click(function () {
//    $("#steps-page3-action").toggleClass('pisca'); 
$("#activate-step-4-2").toggleClass('pisca');
    $(".small-text").toggleClass('pisca');
    $("#step-btn-fake").toggleClass('pisca');
})

$(".step-4-image").click(function () {
    console.log('laura');
    $("#steps-page4-action").toggleClass('pisca');
    $("small-text-pag-4").toggleClass('pisca-small');
})

$("#step-btn-fake").click(function(){
    $("#steps-page4-action").toggleClass('pisca');
    $("small-text-pag-4").toggleClass('pisca-small');
})

$("#steps-page4-action").click(function () {
    $(".step-4-a").hide();
    $(".step-4-b").show();
    $("#activate-step-2").show();
})

$(".step-doubts").click(function () {
    console.log('daiane');
    $("#step-label-not1").toggleClass('pisca');
    $("#step-label-not2").toggleClass('pisca');
})

$("#step-4-b-actions1").click(function () {
    $(".step-4-a").show();
    $(".step-4-b").hide();
   $("#steps-page4-action").click(function () {
    $(".step-4-b").hide();
    $(".step-4-c").show();
    $("#activate-step-5").show();
   })
})



/* $("#activate-return-step-2").click(function () {
    $('ul.setup-panel li a [href="#step-2"]').trigger('click');
    $(this).remove();
    console.log('mercedes');
}) */

/* $("#activate-return-step-2").click(function(){
    $('ul.setup-panel li a[href="#step-2"]').trigger('click');
    $(this).remove();
}) */

$("#step-btn-fake2").click(function () {
    $("#step-4-b-actions1").toggleClass('pisca');
    $("#activate-return-step-2").toggleClass('pisca');
})











