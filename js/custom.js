$(function () {

    $('.utils_wrap .hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.gnb').toggleClass('on');
    });

    $('.gnb ul li').on('mouseenter', function () {
        $(this).toggleClass('on');
    }).on('mouseleave', function () {
        $(this).toggleClass('on');
    });



    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    $('.tab_menu button').click(function () {
        var index = $(this).parent().index();
        $('.tab_menu li').removeClass('on');
        $(this).parent().addClass('on');
        $('.tab_con .sub_con').removeClass('on');
        $('.tab_con .sub_con').eq(index).addClass('on');
    });


    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline()
        .to(".my_slogan", { rotateX: 0, speeds: 5000, duration: 1, })
        .to(".mainVisal .my_slogan_sub", { opacity: 1, delay: 1, duration: 1, })
        .to(".mainVisal .scroll_btn", { opacity: 1, duration: 1, });


    gsap.to(".mainVisal .line", {
        scrollTrigger: {
            trigger: '.mainVisal',
            start: "0% 0%",
            end: "+=500",
            scrub: 1,
        },
        width: 1680,
    });

    gsap.to(".mainVisal .tit", {
        scrollTrigger: {
            trigger: '.mainVisal',
            start: "0% 0%",
            end: "100% 60%",
            scrub: 1,
        },
        speeds: 1000,
        opacity: 0,
        top: "-40%",
    });

    function animateSlide(slideClass, descX, mokupX) {
        gsap.from(`.portfolio ${slideClass} .desc`, {
            scrollTrigger: {
                trigger: `.portfolio ${slideClass}`,
                start: "-50% 0%",
                end: "+=100",
                scrub: 1,
            },
            x: descX
        });

        gsap.from(`.portfolio ${slideClass} .inner .mokup`, {
            scrollTrigger: {
                trigger: `.portfolio ${slideClass}`,
                start: "-50% 0%",
                end: "+=250",
                scrub: 1,

            },
            x: mokupX
        });
    }

    animateSlide('.slide01', -1100, 1300);
    animateSlide('.slide02', -1100, 1300);
    animateSlide('.slide03', -1100, 1300);
    animateSlide('.slide04', -1100, 1300);
    animateSlide('.slide05', -1100, 1300);

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".portfolio .line", {
        scrollTrigger: {
            trigger: '.portfolio .slide05',
            start: "0% 0%",
            end: "+=500",
            scrub: 1,


        },
        width: 1680,
    });
});