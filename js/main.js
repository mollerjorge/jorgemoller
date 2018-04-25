$(document).ready(function() {
  // Smooth scrolling to elements with ID
  $('a[href*="#"]').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      debugger;
      var target = $(this.hash);

      if (target.length) {

        var name = typeof target[0] !== 'undefined' ? target[0].id : "";
        var scrollTop = name === "header" ? target.offset().top : target.offset().top + 100;
        var target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: scrollTop
          },
          1000
        );

        // Close navigation
        $("#navi-toggle").prop("checked", false);

        return false;
      }
    }
    }
  });


  /* About me animation */ 
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "30%"
    }
  );

  /* Work experience animations */
  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInRight");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeInLeft");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated fadeInRight");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-5").waypoint(
    function(direction) {
      $(".js--wp-5").addClass("animated fadeInLeft");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-6").waypoint(
    function(direction) {
      $(".js--wp-6").addClass("animated fadeInRight");
    },
    {
      offset: "40%"
    }
  );
  
  /* Skills Animations */

  $(".js--wp-plants-1").waypoint(
    function(direction) {
      $(".js--wp-plants-1 .plant").addClass("animated-svg");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-plants-2").waypoint(
    function(direction) {
      $(".js--wp-plants-2 .plant").addClass("animated-svg");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-plants-3").waypoint(
    function(direction) {
      $(".js--wp-plants-3 .plant").addClass("animated-svg");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-contact").waypoint(
    function(direction) {
      $(".bird--right").addClass("animated fadeInRight");
      $(".bird--left").addClass("animated fadeInLeft");
    },
    {
      offset: "20%"
    }
  );

  // Portfolio filters init
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });


  // Click handler for portfolio filters
  $('.portfolio__filter-item a').click(function(e) {
    e.preventDefault();
    $grid.isotope({ filter: '.' + e.target.name });
  });
});
