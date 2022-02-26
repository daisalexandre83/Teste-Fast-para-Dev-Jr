$("#user-action").click(function() {
    $(".page-subtext").hide();
    $(".page-thick-line").hide();
    $(".img-cash").hide();
    $("#user-action").hide(); 
    $("#steps").show();
    $(".page-subtext").hide();  
    $('ul.setup-panel li a[href="#step-1"]').trigger('click');
    $('.steps-indication').show();
    $('.indication-2').hide();
    $('.indication-3').hide();
    $('.indication-4').hide();
    $('.indication-5').hide();
    $("#step-1-part2").hide();
    // $('.indication-2').show();
    $(".step-2-part1").show();
    $(".step-2-part2").hide();
    $('ul.setup-panel li a[href="#step-2').removeClass('steps-past');
    $('ul.setup-panel li a[href="#step-3').removeClass('steps-past');
    $('ul.setup-panel li a[href="#step-4').removeClass('steps-past');
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
        e.preventDefault();
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $('.steps-indication').hide();
        $('.indication-2').show();
    })

    
    
    $('#activate-return-step-2').on('click',function(e) {
        e.preventDefault();
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $('.indication-4').hide();
        $('.indication-3').hide();
        $('.indication-2').show();
        $('ul.setup-panel li a[href="#step-3').removeClass('steps-past');
        $('#activate-step-3-1').show();
    })   

    $('#activate-step-3').on('click',function(e) {
        e.preventDefault();
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $('ul.setup-panel li a[href="#step-2').addClass('steps-past');
        $('.indication-2').hide();
        $('.indication-3').show();
    }) 


    $('#activate-step-4').on('click',function(e) {
        e.preventDefault();
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $('ul.setup-panel li a[href="#step-3').addClass('steps-past');
        $('.indication-3').hide();
        $('.indication-4').show();
    }) 
    
    $('#activate-return-step-4').on('click', function (e) {
        e.preventDefault();
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $('ul.setup-panel li a[href="#step-3').addClass('steps-past');
        $('.indication-3').hide();
        $('.indication-4').show();
        $('.indication-5').hide();
    })

    $("#activate-step-4-2").on('click',function (e) {
        e.preventDefault();
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $('ul.setup-panel li a[href="#step-3').addClass('steps-past');
        $('.indication-3').hide();
        $('.indication-4').show();
    })

    $('.activate-step-5-3').on('click', function (e) {
        e.preventDefault();
        $('ul.setup-panel li a[href="#step-5"]').trigger('click');
        $('ul.setup-panel li a[href="#step-4').addClass('steps-past');
        $('.indication-4').hide();
        $('.indication-5').show();
    })

    $('#activate-step-5').on('click',function(e) {
        e.preventDefault();
        $('ul.setup-panel li a[href="#step-5"]').trigger('click');
        $('ul.setup-panel li a[href="#step-4').addClass('steps-past');
        $('.indication-4').hide();
        $('.indication-5').show();
        $('.step-5-part1').hide();
        $('.step-5-part2').show();
        setTimeout(function () {
            $('.step-5-part2').hide();
            $('#steps').hide();
            $('.page-subtext1').show();
            $('.page3').show();
        },3000)    
    })     

}); 





$("#step-1-yes1-option").click(function () {
    $("#step-1-part2").show();
})

$("#step-1-yes2-option").click(function () {
    $(".step-1-part3").show();
   
})




$(".step-1-ckeckbox").click(function () {

    let checkbox1 = $('#step-1-confirm1');
    let checkbox2 = $('#step-1-confirm2');
    let checkbox3 = $('#step-1-confirm3');

    if(checkbox1.is(":checked") && checkbox2.is(":checked") && checkbox3.is(":checked")){
      $("#activate-step-2").show();
      /* let myinterval = setInterval(function () {
          $(#step-1-confirm1).checked = false;
          $(#step-1-confirm2).checked = false;
          $(#step-1-confirm3).checked = false;
      },5000)
      clearInterval(myinterval); */
    }

}) 



$(".step-bank").click(function() {
    console.log('daiane');
    $(".bank1-copy").toggleClass('highlight');
}) 

$("#step-2-action").click(function() {
    $(".bank1-copy").toggleClass('highlight');
})



$(".bank1-copy").click(function () {
    $(".step-2-part1").hide();
    $(".step-2-part2").show();
})

$("#step-2-big-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$("#step-2-bigger-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$('#step-2-bigger2-input').click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$('#step-2-bigger3-input').click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$('#step-2-bigger4-input').click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})



$("#step-2-medium-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$('#step-2-medium2-input').click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$('#step-2-medium3-input').click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$('#step-2-medium4-input').click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$('#step-2-medium5-input').click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$('#step-2-medium6-input').click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$("#step-2-small1-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$("#step-2-small2-input").click(function () {
    $("#step-2-accord-input").hide();
    $("#step-2-numbers-input").show();
    $("#step-2-label").show();
})

$("#step-2-small3-input").click(function () {
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
    $("#activate-step-4-2").toggleClass('highlight');
    $("#activate-step-4").toggleClass('highlight');
    $("#step-btn-fake").toggleClass('highlight');
    $('.activate-step-5-2').toggleClass('highlight');
})

$(".step-4-image").click(function () {
    $("#steps-page4-action").toggleClass('highlight');
    $('.step-4-skip2').toggleClass('highlight');
})

$("#step-btn-fake").click(function(){
    $("#steps-page4-action").toggleClass('highlight');
    $('.step-4-skip2').toggleClass('highlight');
})

$("#steps-page4-action").click(function () {
    $(".step-4-part1").hide();
    $(".step-4-part2").show();
    $("#activate-step-2").show();
})

$(".step-doubts").click(function () {
    $("#step-label-not1").toggleClass('highlight');
    $("#step-label-not2").toggleClass('highlight');
})

$("#step-4-part2-actions1").click(function () {
    $(".step-4-part1").show();
    $(".step-4-part2").hide();
   $("#steps-page4-action").click(function () {
    $(".step-4-part2").hide();
    $(".step-4-part3").show();
    $("#activate-step-5").show();
   })
})

$(".step-4-part2-image").click(function () {
    $("#step-4-part2-actions1").toggleClass('highlight');
    $("#activate-return-step-2").toggleClass('highlight');
})


$("#step-btn-fake2").click(function () {
    $("#step-4-part2-actions1").toggleClass('highlight');
    $("#activate-return-step-2").toggleClass('highlight');
    $(".indication-3").hide();
})

$(".step-4-part3-image").click(function () {
    $("#activate-step-5").toggleClass('highlight');
})


$('#activate-step-4').click(function () {
    $('ul.setup-panel li a[href="#step-3').addClass('steps-past');
})

$('.activate-step-5-2').click(function () {
    $('ul.setup-panel li a[href="#step-5"]').trigger('click');
    $('.indication-3').hide();
    $('ul.setup-panel li a[href="#step-3').addClass('steps-past');
    $('ul.setup-panel li a[href="#step-4').addClass('steps-past');
    $('.indication-5').show();
})

$('#activate-page2').click(function () {
    $('.step-5-part1').hide();
    $('#steps').hide();
    $('.page2').show();
})

 $('#activate-page').click(function () {
    $('.page2').hide();
    $(".page-subtext").show();
    $(".page-thick-line").show();
    $(".img-cash").show();
    $("#user-action").show();
})

 










