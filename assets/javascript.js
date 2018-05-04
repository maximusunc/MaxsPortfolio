$(document).ready(function(){
    $(".parallax").parallax();
    $(".carousel").carousel();
    carousel();
    $(window).on("scroll resize", checkView);
    
    $(window).trigger("scroll");
});

var $animatedProject = $(".animatedProject");
var $window = $(window);

// materialize carousel
function carousel() {
    $(".carousel").carousel("next");
    setTimeout(carousel, 1000);
};

$(".project").hover(function() {
  $(this).css("opacity", 1);
  $(this).find(".animatedDetails").addClass("showDetails");
}, function() {
  $(this).css("opacity", 0.8);
  $(this).find(".animatedDetails").removeClass("showDetails");
});

function checkView() {
  var windowHeight = $window.height();
  var windowTop = $window.scrollTop();
  var windowBottom = (windowTop + windowHeight);

  $.each($animatedProject, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTop = $element.offset().top;
    var elementBottom = (elementTop + elementHeight);

    if ((elementTop <= windowBottom) && (elementBottom >= windowTop)) {
      $element.addClass("in-view");
    }
  })
}

// Smooth scrolling for page navigation
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
});
// end scrolling animation

function myFunction(x) {
  if (x.matches) { // If media query matches
      $(".animatedDetails").addClass("showDetails");
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes