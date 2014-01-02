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
    items: {
        visible         : 3,
        start           : -1
    },
    scroll: {
        items           : 1,
        duration        : 1000,
        timeoutDuration : 7000,
        pauseOnHover    : true
    },
    // cookie              : true,
    prev                : '#prev',
    next                : '#next',
    pagination: {
        container       : '#pager',
        deviation       : 1
    }
});

// $("#carousel").carouFredSel({
//   items: 1,
//   direction: "up"
// });



// ===========================
// Anystretch
// ===========================

// $('#hero').anystretch("assets/heroes/aqqaluk.jpg", {speed: 200, positionY: 'center'});
