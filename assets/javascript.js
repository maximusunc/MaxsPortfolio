$(document).ready(function(){
    $(".parallax").parallax();
    $(".carousel").carousel();
    carousel();
});

function carousel() {
    $(".carousel").carousel("next");
    setTimeout(carousel, 2000);
};