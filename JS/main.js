$(document).ready(function(){
    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        var submenu = $(this).parent().find('.profile-submenu');
        submenu.fadeIn(200);
        $('.profile-menu').on('mouseleave', function(){
            submenu.fadeOut(200);
        });
    });















});