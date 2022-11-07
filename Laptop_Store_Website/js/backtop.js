(function($) {
    window.onscroll = function() {
        scrollFunction()}

        function scrollFunction() {
            if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 300) {
                 $('#back_top').fadeIn();
                back_top.classList.add('back_top-open');

            } else {
                $('#back_top').fadeOut();
                back_top.classList.remove('back_top-open');
            }
        }

    $('#back_top').click(function (){
        $('html,body').animate({
            scrollTop : 0
        },1000);
    })

})(jQuery);
