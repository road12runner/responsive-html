/* JavaScript Document */

$(document).ready(function(){
    $('.mobile_menu').on('click', function(e){
        e.preventDefault();
        console.log('click');
        var currentNavHeight = $('nav').height();
        if (currentNavHeight < 5) {
            var newNavHeight = $('nav > ul').height() + 15;
            $('nav').animate({'height': newNavHeight + 'px'}, 750);
        } else {
            $('nav').animate({'height': 0}, 750, function(){
                $(this).removeAttr('style');
            });
        }
    });

    $(window).resize(function(){
        if ( $(this).width() > 625) {
            $('nav').removeAttr('style');
        }
    });

});
