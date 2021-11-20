$("#user-action").click(function() {
    $(".page-subtext").hide();
    $(".page-thick-line").hide();
    $(".img-cash").hide();
    $("#user-action").hide();
    $(".steps-page").show();
    $(".wizard > .actions a").hide();
    $("#steps-page1-radio2").hide();
    $("#steps-page1-form-checkbox").hide();
    $(".page-subtext").hide();
})

  /* jQuery(document).ready(function () {
    var navListItems = $('ul.setup-panel li a');
        allWells = $('.setup-content');

        allWells.hide();

    navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
        $item = $(this).closest('li'),
        
        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });

    $('ul.setup-panel li.active a').trigger('click');

     $('#activate-step-2').on('click',function(e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $(this).remove();
    })

    $('#activate-step-3').on('click',function(e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $(this).remove();
    }) 
}); 
 
 */

jQuery(document).ready(function() {
    
    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function(e)
    {
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
    
    // DEMO ONLY //
    $('#activate-step-2').on('click', function(e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $(this).remove();
    })   
    
    $('#activate-step-3').on('click', function(e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $(this).remove();
    })    
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
    // $(".bank1-copy").toggleClass('bank-data-highlight');
    // $(".bank1-copy").toggleClass('highlight-border');
    $(".bank1-copy").toggleClass('pisca');
}) 

$("#steps-page2-action").click(function() {
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
    $("#steps-page2-action").hide();
    $(".steps-page2b").show();
    $(".steps-page-text").show();
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

$(".steps-page3-image").click(function () {
   $("#steps-page3-action").toggleClass('pisca'); 
    $(".small-text").toggleClass('pisca');
   /*  $(".steps-page3-action").toggleClass('highlight-border');
    $(".small-text").toggleClass('highlight-border'); */
})

/* $("#steps-page3-action").click(function (){
    console.log('lorena');
    $(".steps-page4-content").show();
}) */





