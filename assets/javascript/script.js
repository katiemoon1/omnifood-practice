$(document).ready(function() {
  // For the sticky nav
  $(".js-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  // Scroll on button click
  $(".js-scroll-plan").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js-plans").offset().top
      },
      1000
    );
  });

  $(".js-scroll-start").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js-features").offset().top
      },
      1000
    );
  });

  // Navigation scroll from CSS tricks
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // Animations on scroll
  $(".js-wp-1").waypoint(
    function(direction) {
      $(".js-wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js-wp-2").waypoint(
    function(direction) {
      $(".js-wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js-wp-3").waypoint(
    function(direction) {
      $(".js-wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js-wp-4").waypoint(
    function(direction) {
      $(".js-wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  // Mobile nav
  $(".js-nav-icon").click(function() {
    // defined as a variable since it will be used multiple times
    let nav = $(".main-nav");
    let icon = $(".js-nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-md-menu")) {
      icon.addClass("ion-md-close");
      icon.removeClass("ion-md-menu");
    } else {
      icon.addClass("ion-md-menu");
      icon.removeClass("ion-md-close");
    }
  });
});
