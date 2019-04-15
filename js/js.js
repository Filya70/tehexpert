
////Dropdown clild menu
$('.source').on('mouseover', function () {
    var $src = $(this),
        $srcImg = $src.find('.subtitle-logo').html(),
        $srcTxt = $src.find('.dropdown-child-item').html(),
        $srcSgn = $src.find('.subtitle-text').html();

    $('.sub-logo').html($srcImg);
    $('.title').html($srcTxt);
    $('.sub-text').html($srcSgn);
});

//Burger Menu
var Menu = {

    el: {
        ham: $('.menu'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom')
    },

    init: function () {
        Menu.bindUIactions();
    },

    bindUIactions: function () {
        Menu.el.ham
            .on(
                'click',
                function (event) {
                    Menu.activateMenu(event);
                    event.preventDefault();
                }
            );
    },

    activateMenu: function () {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
};

Menu.init();
//// Dropdown Menu Burger
$(document).ready(function () {
    $('.menu').click(function () {
        $('.nav-mobile-block').slideToggle(500);
    });//end slide toggle

    $(window).resize(function () {
        if ($(window).width() > 300) {
            $('.nav-mobile-block').removeAttr('style');
        }
    });
});
//// Dropdown Menu Item and switch color text
$(document).ready(function () {
    $('.item').click(function () {
        $('.dropdown').slideToggle(500);
        $( this) .toggleClass('item_active');
    });


    $(window).resize(function () {
        if ($(window).width() > 250) {
            $('.dropdown', '.item').removeAttr('style');
        }
    });
});