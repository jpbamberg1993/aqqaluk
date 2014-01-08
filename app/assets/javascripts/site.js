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

// DRY up handler creation
function handlerFactory() {
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

function handlerFactoryWide() {
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

var $break4  = "screen and (max-width: 30.415em)",
    $break6  = "screen and (min-width: 30.416em)",
    $break9  = "screen and (min-width: 46.124em)",
    $break12 = "screen and (min-width: 61.832em)";

// hook up "media queries"
enquire
  .register($break4, handlerFactory())
  .register($break6, handlerFactory())
  .register($break9, handlerFactory())
  .register($break12, handlerFactoryWide());


// ===========================
// Anystretch
// ===========================

// $('#hero').anystretch("assets/heroes/aqqaluk.jpg", {speed: 200, positionY: 'center'});
