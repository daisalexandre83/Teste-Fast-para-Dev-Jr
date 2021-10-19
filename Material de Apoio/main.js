/* Created by jankoatwarpspeed.com */

var $question = $(".question");
var $questionval;
var $tags = $(".tags");
var tagsval;
var $yourquestion = $(".yourquestion");
var $yourtags = $(".yourtags");

// The first button will be clicked after the user enters a question
$(".first").click(function (event) {
    $questionval = $question.val();
    if ($questionval == "") {
        $yourquestion.html("No Question.");
    } else {
        $yourquestion.html($questionval);
    }
        
        $(".container").removeClass("third-dot initial-active-area");
        $(".container").addClass("second-dot second-active-area");
    
    // Stop the button from performing it's default task
    event.preventDefault();
});

// The second button will be clicked after the user enters some tags (not required)
$(".second").click(function (event) {
    $(".container").removeClass("second-dot second-active-area initial-active-area");
    $(".container").addClass("third-dot third-active-area");
    $tagsval = $tags.val();
    // Check if the value of tags field is empty
    if ($tagsval == "") {
        $yourtags.html("No tags.");
    } else {
        $yourtags.html($tagsval);
    }
    // Stop the button from performing it's default task
    event.preventDefault();
});

// The third button will be clicked when the user is ready to submit their question
$(".third").click(function (event) {
    $(".container").addClass("first-dot initial-active-area")
    $(".container").removeClass("third-dot third-active-area");
    // Stop the button from performing it's default task
    event.preventDefault();
});