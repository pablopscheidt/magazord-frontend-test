$( document ).ready( function() {
    "use strict";

    //Fazer aparecer as informações no click
    $('.menu-informations').on('click', function() {
        $('.menu-informations .arrow-down').toggleClass('active');
        $('.informations').toggleClass('show-informations');
    });
    //Fazer a troca entre a parte dos repositorios e das estrelas
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
    //Abrir e fechar os filtros
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

    $(document).keyup(function(e) { 
        if (e.keyCode === 27) 
            $('.filter-language').removeClass('open-filter');
            $('.filter-type').removeClass('open-filter');
            $('html').removeClass('over-active');
    }); 
    //abrir a parte de pesquisa e retirar os filtros
    $('#input-search').focus(function(){
        $(this).attr('placeholder','Type something here...')
        $('.filter-content').css('display','none');
        $('.search-area').css('flex-direction','row-reverse')
    });
    $('#input-search').focusout(function(){
        $(this).removeAttr('placeholder','Type something here...')
        $('.filter-content').css('display','flex');
        $('.search-area').css('flex-direction','row')
    });

})