$(window).scroll(function(){
    // console.log("scroll hua");
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('nav').addClass('fixed');
        $('.wrapper section').each(function(i) {
            if ($(this).position().top <= windscroll - 100) {
              // console.log($('nav li.menu-active').value)
                $('nav li.menu-active').removeClass('menu-active');
                $('nav li').eq(i).addClass('menu-active');
            }
        });

    } else {

        $('nav').removeClass('fixed');
        $('nav li.menu-active').removeClass('menu-active');
        $('nav li:first').addClass('menu-active');
    }

  }).scroll();