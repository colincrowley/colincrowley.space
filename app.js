var main = function() {



    /* Push the body and the nav over by 285px over */
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "285px"
        }, 200);
    });


    /* Push the body and the nav back V1*/
    $('.icon-close').click(function() {
        $('.menu').animate({
            left: "-285px"
        }, 200);
   
        $('body').animate({
            left: "0px"
        }, 200);
    });

 

    /* Push the body and the nav back V2*/    
    $('.home-text').hover(function(){
        $('.menu').animate({
            left: "-285px"
        }, 200);
   
        $('body').animate({
            left: "0px"
        }, 200);
    });


    /* Scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                        $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

  



    /*      TO DO        */
    
    /* Prompt user when header clicked */
    $(document).keypress(function() {
        $('.btn').toggle('btn-like');
        $('this').toggleClass('btn-like');
    });

    



//$(document).ready(main);

};











$(document).ready(main);