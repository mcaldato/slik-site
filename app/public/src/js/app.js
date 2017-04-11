$(document).ready(function(){
  $(".back-to-top").hide();
  TweenMax.set('.back-to-top span', {alpha:0});

  $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();

            }
        });


        // scroll body to 0px on click
        $('.back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    $(".back-to-top").hover(
      function() {
        TweenMax.to('.back-to-top span', 0.5, {ease:Power1.easeInOut, x:40, alpha:1});
      },
      function() {
        TweenMax.to('.back-to-top span', 0.5, {ease:Power1.easeInOut, x:0, alpha:0});
      }
    );

});
