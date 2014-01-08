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

$(document).ready(function() {

  Mobvious.for_device_type('desktop', function() {

    $('#carousel').carouFredSel({
        width               : "100%",
        height              : 550,
        items: {
            visible         : 3,
            start           : -1,
            width           : 989,
            height          : 550
        },
        scroll: {
            items           : 1,
            // easing          : "easeOutCirc",
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
        // swipe               : true
        // swipe: {
        //   onMouse           : true,
        //   onTouch           : true
        // }
        // cookie              : true
    });

  });

  Mobvious.for_device_type('tablet', function() {

    $('#carousel').carouFredSel({
        width               : "100%",
        // height              : 487,
        items: {
            visible         : 1,
            // width           : 487,
            // height          : 272
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
        swipe               : true
        // swipe: {
        //   onMouse           : true,
        //   onTouch           : true
        // }
        // cookie              : true
    });

  });

});


$("#carousel2").carouFredSel({
    direction           : "up",
    scroll: {
        fx              : "fade",
        duration        : 1000,
        timeoutDuration : 7000
    }
});



// ===========================
// Anystretch
// ===========================

// $('#hero').anystretch("assets/heroes/aqqaluk.jpg", {speed: 200, positionY: 'center'});
