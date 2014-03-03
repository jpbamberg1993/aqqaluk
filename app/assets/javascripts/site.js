// ===========================
// Remove Anchor Outline
// ===========================

// http://stackoverflow.com/questions/1535538/jquery-getting-rid-of-dotted-outline-around-buttons
// Not recommended: http://css-tricks.com/removing-the-dotted-outline/

// $(function() {
//     $('.autoblur').live("click", function(event) {
//         this.blur();
//     });
// });


// ===========================
// Carousel
// ===========================

function threeSlides(){
    $('#carousel').carouFredSel({
        width               : "100%",
        items: {
            visible         : 3,
            start           : -1
        },
        scroll: {
            items           : 1,
            duration        : 1000,
            // timeoutDuration : 7000,
            // pauseOnHover    : true

            onBefore: function(data) {
              // hide current block
              data.items.old.add( data.items.visible ).find( '.slide-block' ).stop().fadeOut();
            },

            onAfter: function(data) {
              // show active slide block
              data.items.visible.eq(1).find( '.slide-block' ).stop().fadeIn(1500);
            }
        },

        onCreate: function(data){
          // show first title block and hide the rest
          $(this).find( '.slide-block' ).hide();
          $(this).find( '.slide.active .slide-block' ).stop().fadeIn();
        },

        auto                : false,
        prev: {
            button          : "#prev",
            key             : "left"
        },
        next: {
            button          : "#next",
            key             : "right"
        },
        pagination: {
            container       : "#pager",
            deviation       : 1
        },
        swipe: {
          onMouse           : true,
          onTouch           : true
        }
        // cookie              : true
    });
}

function oneSlide(){
    $('#carousel').carouFredSel({
        width               : "100%",
        items: {
            visible         : 1
        },
        scroll: {
            items           : 1,
            duration        : 1000,
            // timeoutDuration : 7000,
            // pauseOnHover    : true

            onBefore: function(data) {
              // hide current block
              data.items.old.add( data.items.visible ).find( '.slide-block' ).stop().fadeOut();
            },

            onAfter: function(data) {
              // show active slide block
              data.items.visible.last().find( '.slide-block' ).stop().fadeIn(1500);
            }
        },

        onCreate: function(data){
          // show first title block and hide the rest
          $(this).find( '.slide-block' ).hide();
          $(this).find( '.slide.active .slide-block' ).stop().fadeIn();
        },

        auto                : false,
        prev: {
            button          : "#prev",
            key             : "left"
        },
        next: {
            button          : "#next",
            key             : "right"
        },
        pagination: {
            container       : "#pager"
        },
        swipe: {
          onMouse           : true,
          onTouch           : true
        }
        // cookie              : true
    });
}

function textSlide(){
    $("#carousel2").carouFredSel({
        direction           : "up",
        scroll: {
            fx              : "fade",
            duration        : 1000,
            timeoutDuration : 7000
        }
    });
}


// ===========================
// Responsive Menu
// ===========================

function mobileMenu(){
    $('body').addClass('nav_menu');
    $('.nav_primary').find('h3')
        .bind('click focus', function(){$(this).parent().toggleClass('expanded')});
}


function normalMenu(){
    $('body').removeClass('nav_menu');
}


// ===========================
// Show Hide
// ===========================

// http://papermashup.com/jquery-show-hide-plugin/

$(document).ready(function(){

  $('.show_hide').showHide({
    speed: 1000,                   // speed you want the toggle to happen
    easing: '',                    // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
    changeText: 1,                 // if you dont want the button text to change, set this to 0
    showText: 'Read more',         // the button text to show when a div is closed
    hideText: 'Show less'          // the button text to show when a div is open
  });

});


// ===========================
// Enquire.js
// ===========================

// DRY up handler creation
function handlerCarousel() {
  return {
    match : function() {
        oneSlide(),
        textSlide()
    },
    unmatch : function() {
        threeSlides(),
        textSlide()
    }
  };
}

function handlerCarouselWide() {
  return {
    match : function() {
        threeSlides(),
        textSlide()
    },
    unmatch : function() {
        oneSlide(),
        textSlide()
    }
  };
}

function handlerMenu() {
  return {
    match : function() {
        mobileMenu()
    },
    unmatch : function() {
        normalMenu()
    }
  };
}

var $break4  = "screen and (max-width: 30.415em)",
    $break6  = "screen and (min-width: 30.416em)",
    $break9  = "screen and (min-width: 46.124em)",
    $break12 = "screen and (min-width: 61.832em)";
    $menu    = "screen and (max-width: 46.124em)",

// hook up "media queries"
enquire
  .register($break4, handlerCarousel())
  .register($break6, handlerCarousel())
  .register($break9, handlerCarousel())
  .register($break12, handlerCarouselWide());

enquire
  .register($menu, handlerMenu());

  // multiple handlers?
  // .register($break4, [
  //     handlerCarousel(),
  //     handlerXxxx()
  // ])


// ===========================
// Anystretch
// ===========================

// $('#hero').anystretch("assets/heroes/aqqaluk.jpg", {speed: 200, positionY: 'center'});
