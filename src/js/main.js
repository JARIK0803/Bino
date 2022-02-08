//Вся идея тут состоит в том, чтобы с помощью rigger'a инклюдить в него все нужные нам js файлы в нужном нам порядке

$(function () {
    //= partials/mail.js

    svg4everybody({});

    // Parallax
    let width = $(window).width();
    if (width > 1000) {
        $(window).on("scroll", function () {
            $("#intro").css(
                "background-position-y",
                $(window).scrollTop() * 0.6 + "px"
            );
        });
    }

    // Preloader
    $(window).on("load", function () {
        // force page scroll position to top at page refresh
        $("html, body").animate({ scrollTop: 0 }, "normal");

        // will first fade out the loading animation
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });
    });

    // Header fixed
    let header = $("#header");
    let scrollPos = $(window).scrollTop();

    checkScroll();
    $(window).on("scroll resize", function () {
        scrollPos = $(this).scrollTop();

        checkScroll();
    });

    function checkScroll() {
        if (scrollPos >= 1) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("#nav, #intro, #about, #promo").on("click", "a", function (event) {
        event.preventDefault();

        let blockId = $(this).attr("href");
        let blockOffset = $(blockId).offset().top;

        $("html , body").animate(
            {
                scrollTop: blockOffset - 0,
            },
            500
        );

        $("#nav_toggle").removeClass("active");
        $("#nav").removeClass("active");
        $("body").removeClass("no-scroll");
    });

    // menu nav toggle
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $("#nav_toggle").toggleClass("active");
        $("#nav").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });

    //Modal=======================
    const modalCall = $("[data-modal]");
    const modalClose = $(".modal__close");
    const modalRequest = $(".btnRequest");

    //prevent displacement of content when opening modal windows
    $(window).on("resize load", function () {
        $("body, .header, .nav ").css({
            "max-width": $(window).width(),
        });
    });

    // open the modal window when clicking on the buttonClose
    modalCall.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data("modal");

        $(modalId).addClass("show");
        $("body").addClass("no-scroll");

        setTimeout(function () {
            $(modalId)
                .find(".modal__dialog")
                .css({ transform: "scale(1)", opacity: "1" });
        }, 100);

        worksSlider.slick("setPosition");
    });

    // close the modal window when clicking on the button
    modalClose.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");

        modalParent
            .find(".modal__dialog")
            .css({ transform: "scale(0.7)", opacity: "0" });
        modalParent.removeClass("show");
        setTimeout(function () {
            $("body").removeClass("no-scroll");
        }, 200);
    });

    // close the modal window when clicking on the buttonRequest and scroll to contact form
    modalRequest.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");
        let blockId = $(this).attr("href");
        let blockOffset = $(blockId).offset().top;

        modalParent
            .find(".modal__dialog")
            .css({ transform: "scale(0.7)", opacity: "0" });
        modalParent.removeClass("show");

        setTimeout(function () {
            $("body").removeClass("no-scroll");
            $("html , body").animate(
                {
                    scrollTop: blockOffset,
                },
                800
            );
        }, 200);
    });

    //close the modal window when clicking on the background
    $(".modal").on("click", function (event) {
        let $this = $(this);
        $this
            .find(".modal__dialog")
            .css({ transform: "scale(0.7)", opacity: "0" });
        $this.removeClass("show");
        setTimeout(function () {
            $("body").removeClass("no-scroll");
        }, 200);
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });

    // Slider https://kenwheeler.github.io/slick/
    $("#reviewsSlider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 400,
        cssEase: "linear",
        adaptiveHeight: false,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    });

    /*!
     * AOS.js
     * https://michalsnik.github.io/aos/
     */
    /* Animate On Scroll
     * ------------------------------------------------------ */
    AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
        delay: 300,
        // once: true,
        disable: "mobile",
    });
});
