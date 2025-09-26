$(document).ready(function () {

    $(".hambur").click(function (e)
    {
        e.preventDefault();//suprimir el movimiento del a
        $(".header-menu .container nav").toggleClass("open"); /*SI TIENE LA CLASE OPEN LA QUITA SINO LA PONE*/
        $(".hambur i").toggleClass("fa-times");//Cambiar Hamburguesa a X o viceversa

    });

    $(".header-menu .container nav a").click(function ()
    {

        $(".header-menu .container nav").removeClass("open");
        $(".hambur i").removeClass("fa-times");

        var dev = $(this).attr("href");

        $("html,body").animate({
            "scrolltop": $(dev).offset().top
        });
    });
    
   /*Menu Sticky*/
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-menu").removeClass("sticky");
            $(".header-menu img").attr("src", "images/logo-coca-cola.png");

        } else {
            $(".header-menu").addClass("sticky");
            $(".header-menu img").attr("src", "images/logo-coca-cola-blanco.png");

        }
    });

     /*Ir Hacia Arriba*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    document.oncontextmenu = function(){return false;}
    /*************************/
});

