/*  ---------------------------------------------------
    Theme Name: Azenta
    Description:
    Author:
    Author URI:
    Version: 1.0
    Created:
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
    Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    var modal = document.querySelector('.modal');
    var modalTitle = document.querySelector('.modal-title');
    var modalContent = document.querySelector('.modal-content');

    function openModal(id) {
        modal = document.querySelector('#' + id + '_modal')
        // modalTitle.innerHTML = modal_title;
        // modalContent.innerHTML = modal_content;
    
        if(modal.style.display == 'block'){
            // Hide Modal
            closeModal();
        } else {
            modal.style.display = 'block';
        }
        
    }
    
    function closeModal() {
        modal = document.querySelector('.modal');

        
        modal.style.display = 'none';
    
        // modalTitle.innerHTML = '';
        // modalContent.innerHTML = '';
    }

    // $('.col-lg-4').on('click', function(){
    //     openModal();
    // });

    $('#one_bed').on('click', function(){
        openModal('one_bed');
    });

    $('#two_bed').on('click', function(){
        openModal('two_bed');
    });

    $('#three_bed').on('click', function(){
        openModal('three_bed');
    });

    $('#four_bed').on('click', function(){
        openModal('four_bed');
    });

    $('#five_bed').on('click', function(){
        openModal('five_bed');
    });

    $('#five_beds').on('click', function(){
        openModal('five_beds');
    });

    $('#six_bed').on('click', function(){
        openModal('six_bed');
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    $('.set-bg-first').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });


    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*------------------
		Navigation
	--------------------*/
    // $(".mobile-menu").slicknav({
    //     prependTo: '#mobile-menu-wrap',
    //     allowParentLinks: true
    // });

    /*------------------
		Menu Hover
	--------------------*/
    // $(".header-section .top-nav .main-menu ul li").on('mousehover', function () {
    //     $(this).addClass('active');
    // });
    // $(".header-section .top-nav .main-menu ul li").on('mouseleave', function () {
    //     $('.header-section .top-nav .main-menu ul li').removeClass('active');
    // });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hero-items");
    var thumbnailSlider = $(".thumbs");
    var duration = 500;
    var syncedSecondary = true;

    setTimeout(function () {
        $(".cloned .item-slider-model a").attr("data-fancybox", "group-2");
    }, 500);

    // carousel function for main slider
    hero_s.owlCarousel({
            loop: true,
            nav: false,
            navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
            items: 1,
            dots: false,
            autoplay: true,
            animateOut: 'fadeOut',
            smartSpeed: 1200,
            autoHeight: false,
        }).on("changed.owl.carousel", syncPosition);

    // carousel function for thumbnail slider
    thumbnailSlider.on("initialized.owl.carousel", function () {
            thumbnailSlider
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        }).owlCarousel({
            loop: false,
            items: 3,
            nav: false,
            margin: 0,
            smartSpeed: 1200,
            responsive: {
                320: {
                    items: 2,
                    margin: 3
                },
                480: {
                    items: 3,
                    margin: 3
                },
                768: {
                    items: 3,
                    margin: 3
                },
                1200: {
                    items: 3,
                    margin: 3
                }
            }
        })
        .on("changed.owl.carousel", syncPosition2);

    // on click thumbnaisl
    thumbnailSlider.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        hero_s.data("owl.carousel").to(number, 300, true);
    });

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        thumbnailSlider
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbnailSlider.find(".owl-item.active").length - 1;
        var start = thumbnailSlider
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbnailSlider
            .find(".owl-item.active")
            .last()
            .index();
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            slider.data("owl.carousel").to(number, 100, true);
        }
    }

    /*-------------------
		Feature Slider
    --------------------- */
    $(".feature-carousel").owlCarousel({
        items: 3,
        dots: true,
        autoplay: true,
        margin: 0,
        loop: true,
        smartSpeed: 1200,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*-------------------
		Properties Slider
    --------------------- */
    $(".top-properties-carousel").owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        margin: 0,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    /*-------------------
		Agent Slider
    --------------------- */
    $(".agent-carousel").owlCarousel({
        items: 4,
        dots: false,
        // autoplay: true,
        margin: 0,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    /*-------------------
		Partner Slider
    --------------------- */
    $(".partner-carousel").owlCarousel({
        items: 5,
        dots: false,
        autoplay: false,
        margin: 200,
        loop: true,
        smartSpeed: 1200,
        responsive: {
            320: {
                items: 2,
                margin: 100,
            },
            480: {
                items: 3,
                margin: 100,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });

    /*-------------------
		Propery Short Slider
    --------------------- */
    $(".ps-slider").owlCarousel({
        items: 5,
        dots: false,
        autoplay: false,
        margin: 10,
        loop: true,
        smartSpeed: 1200
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
        margin: 10,
        loop: true,
        smartSpeed: 1200
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Nice Select
    --------------------*/
    $('select').niceSelect();

    /*-------------------
		Range Slider
    --------------------- */
    //price 1
    $("#price-range").slider({
        range: true,
        min: 0,
        max: 4000,
        values: [0, 4000],
        slide: function (event, ui) {
            $("#priceRange").val("[" + ui.values[0] + "-" + ui.values[1] + "]" + "$");
        }
    });
    $("#priceRange").val("[" + $("#price-range").slider("values", 0) + "-" + $("#price-range").slider("values", 1) + "]" + " US$");

    //price 2
    $("#price-range-P").slider({
        range: true,
        min: 0,
        max: 1600000,
        step: 50,
        values: [50, 1000000],
        slide: function (event, ui) {
            $("#priceRangeP").val("[ " + "$" + ui.values[0] + " - " + "$" + ui.values[1] + " ]");
        }
    });
    $("#priceRangeP").val("[ " + "$" + $("#price-range-P").slider("values", 0) + " - " + "$" + $("#price-range-P").slider("values", 1) + " ]");

    //room size 1
    $("#roomsize-range").slider({
        range: true,
        min: 0,
        max: 4500,
        step: 500,
        values: [500, 3000],
        slide: function (event, ui) {
            $("#roomsizeRange").val("[" + ui.values[0] + "-" + ui.values[1] + "]" + "sqm");
        }
    });
    $("#roomsizeRange").val("[" + $("#roomsize-range").slider("values", 0) + "-" + $("#roomsize-range").slider("values", 1) + "]" + " sqm");

    //room size 2
    $("#roomsize-range-P").slider({
        range: true,
        min: 0,
        max: 1400,
        step: 200,
        values: [200, 999],
        slide: function (event, ui) {
            $("#roomsizeRangeP").val("[ " + ui.values[0] + " Fqft" + " - " + ui.values[1] + " Fqft" + " ]");
        }
    });
    $("#roomsizeRangeP").val("[ " + $("#roomsize-range-P").slider("values", 0) + " Fqft" + " - " + $("#roomsize-range-P").slider("values", 1) + " Fqft" + " ]");

    /*------------------
		Single Product
	--------------------*/
    $('.product-thumbs-track .pt').on('click', function () {
        $('.product-thumbs-track .pt').removeClass('active');
        $(this).addClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product-big-img').attr('src');
        if (imgurl != bigImg) {
            $('.product-big-img').attr({
                src: imgurl
            });
        }
    });

})(jQuery);