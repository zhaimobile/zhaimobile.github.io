//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
        $window = $(window);
        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);
            $(window).scroll(function() {
            var yPos = -(($window.scrollTop() - $scroll.offset().top) / $scroll.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
            });
        });
    });
    /* Create HTML5 element for IE */
    document.createElement("section");