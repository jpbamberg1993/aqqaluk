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
    width: '100%',
    // items               : 1,
    items: {
        visible         : 3,
        start           : -1
    },
    // direction           : "up",
    scroll: {
        items           : 1,
        // easing          : "elastic",
        duration        : 1000,
        timeoutDuration : 7000,
        pauseOnHover    : true
    },
    prev: '#prev',
    next: '#next',
    pagination: {
        container       : '#pager',
        deviation       : 1
    }
});


// ===========================
// Anystretch
// ===========================

// $('#hero').anystretch("assets/heroes/aqqaluk.jpg", {speed: 200, positionY: 'center'});
