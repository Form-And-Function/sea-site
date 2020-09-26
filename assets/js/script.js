(function ($) {
    'use strict';



    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    var $stars = $('svg #stars use').each(function (index, el) {
        var posMatrix = el.transform.baseVal[0].matrix,
            posArr = [posMatrix.e, posMatrix.f];
        $(el).data("home", posArr);
    });

    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            $stars.each(function (index, el) {
                mouseRepel(el, x, y);
            });

            $("#galaxy path").each((i, el) => mouseParallax(el, x, y, i));
            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            // mouseParallax('l2', c2left, c2top, x, y, 25);
            // mouseParallax('l3', c3left, c3top, x, y, 20);
            // mouseParallax('l4', c4left, c4top, x, y, 35);
            // mouseParallax('l5', c5left, c5top, x, y, 30);
            // mouseParallax('l6', c6left, c6top, x, y, 45);
            // mouseParallax('l7', c7left, c7top, x, y, 30);
            // mouseParallax('l8', c8left, c8top, x, y, 25);
            // mouseParallax('l9', c9left, c9top, x, y, 40);
        };
    };

    function mouseParallax(el, mouseX, mouseY, phase) {
        console.log(el);
        var //deltaX = mouseX,
            deltaY = Math.sin(phase + mouseX/200) * 20;
        el.style.transform = `translate(${0}px, ${deltaY}px)`;
        //var parentObj = el.parentNode,
        //     [left, top] = $(el).data("home"),
        //     containerWidth = parseInt(parentObj.offsetWidth),
        //     containerHeight = parseInt(parentObj.offsetHeight);


        // el.style.left = left - (((mouseX - (parseInt(el.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        // el.style.top = top - (((mouseY - (parseInt(el.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }

    function mouseRepel(el, ...mouse) {
        var magnet = 500;
        var $el = $(el),
            matrix = el.transform.baseVal[0].matrix,
            pos0 = [matrix.e, matrix.f],
            distances = pos0.map((pos, i) => mouse[i] - pos),

            distance = Math.hypot(...distances);
        //console.log(pos0, distances);

        /*
        magnet = 2600 - distance*20;
        if(distance>130) {
           magnet=0; 
        }
        */

        var displacements = [];
        for (var i = 0; i < 2; i++) {
            var power = pos0[i] - (distances[i] / distance) * magnet / distance,
                force = (($el.data('home')[i] - pos0[i]) / 2) / 2.1;
            displacements[i] = power + force;
        }
        //console.log(displacements);
        el.transform.baseVal[0].setTranslate(...displacements);
    }

    /*
    


    $(document).mousemove(function (e) {
        mouse = [e.pageX, e.pageY];
    });

    var positionStrings = ["left", "top"];

    $('.box').each(function (index, el) {
        var pos = $(el).position(),
            posArr = positionStrings.map(str => pos[str]);
        $(el).data("home", posArr);
    });

    $('.box').css('position', 'absolute');
    setInterval(function () {
        $('.box').each(function (index, el) {
            var el = $(el),
                position = el.position(),
                offset = el.offset(),
                pos0 = positionStrings.map(str => offset[str]),
                distances = pos0.map(pox, i => mouse[i] - pos),

                distance = Math.hypot(...distances);

            /*
            magnet = 2600 - distance*20;
            if(distance>130) {
               magnet=0; 
            }
            *//*
for (var i = 0; i < 2; i++) {
var power = pos0[i] - (distances[i] / distance) * magnet / distance,
force = (force[i] + (el.data('home')[i] - pos0[i]) / 2) / 2.1;
el.css(positionStrings[i], power + force);
}
});
}, 15);*/

    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    // Shuffle js filter and masonry
    var shuffleWrap = document.querySelector('.shuffle-wrapper');
    if (shuffleWrap) {
        var Shuffle = window.Shuffle;
        var jQuery = window.jQuery;

        var myShuffle = new Shuffle(shuffleWrap, {
            itemSelector: '.shuffle-item',
            buffer: 1
        });

        jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
            var input = evt.currentTarget;
            if (input.checked) {
                myShuffle.filter(input.value);
            }
        });
    }



})(jQuery);