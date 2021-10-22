$(".user-action").click(function() {
    $(".subtext").hide();
    $(".thick-line").hide();
    $(".img-cash").hide();
    $(".user-action").hide();
    $("#steps-page").show();
    // $(".wizard > .actions a").hide();
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

function showButton() {
    
    let input = document.querySelectorAll(".input-part3-block1");

    if (input === true) {
        $(".wizard > .actions a").show();
    }
}

showButton();
