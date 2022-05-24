$( document ).ready( function() {
    $('.menu-informations').click(function() {
        $('.menu-informations .arrow-down').toggleClass('active');
        $('.informations').toggleClass('show-informations');
    });
})