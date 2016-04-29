//Sticky Menu
var $nav = $('.MainMenu');
var $navOffset = $nav.offset().top;
var stickyNav = function () {
    var $scrollTop = $(window).scrollTop();
    if ($scrollTop > $navOffset) {
        $nav.addClass('MainMenu--sticky');
        $('.MainContent').css('margin-top', $nav.height());
    } else {
        $nav.removeClass('MainMenu--sticky');
        $('.MainContent').css('margin-top', '0');
    }
};
$(window).on('scroll', stickyNav);

//Toggle Menu
$('#toggle-menu').click(function () {
    $(this).next().slideToggle();
});