$( document ).ready( function() {
    "use strict";

    $('.menu-informations').on('click', function() {
        $('.menu-informations .arrow-down').toggleClass('active');
        $('.informations').toggleClass('show-informations');
    });

    $('.repositories').on('click', function() {
        $('.content-repositories').addClass('show-content');
        $('.content-starreds').removeClass('show-content');
        $('.repositories').addClass('show-top-content');
        $('.starred').removeClass('show-top-content');
    });

    $('.starred').on('click', function() {
        $('.content-starreds').addClass('show-content');
        $('.content-repositories').removeClass('show-content');
        $('.repositories').removeClass('show-top-content');
        $('.starred').addClass('show-top-content');
    });

    $('.type-filter').on('click', function() {
        $('.filter-type').addClass('open-filter');
        $('html').addClass('over-active');
    });

    $('.language-filter').on('click', function() {
        $('.filter-language').addClass('open-filter');
        $('html').addClass('over-active');
    });

    $('.close-filter').on('click', function() {
        $('.filter-type').removeClass('open-filter');
        $('.filter-language').removeClass('open-filter');
        $('html').removeClass('over-active');
    });

    $('.overlay').on('click', function() {
        $('.filter-type').removeClass('open-filter');
        $('.filter-language').removeClass('open-filter');
        $('html').removeClass('over-active');
    });
})