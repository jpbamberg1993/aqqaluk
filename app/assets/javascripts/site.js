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
    swipe               : true
    // swipe: {
    //   onMouse           : true,
    //   onTouch           : true
    // }
    // cookie              : true,
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
