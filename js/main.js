
$(document).ready(function(){

    $('.fa-bars').click(function(){

        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

    });

    $(window).scroll(function() {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        // $('section').each(function(){
            
        //     var top = $(window).scrollTop();
        //     var id = $(this).attr('id');
        //     var height = $(this).height();
        //     var top = $(this).offset().top - 200;
    
        //     if(top >= offset && top < height + offset){
        //         console.log('hello world ')
        //         $('.navbar ul li a').removeClass('active');
        //         $('.navbar').find('[href="#home"]').addClass('active');
        //     }
    
        // });
        
        $('section').each(function() {
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var sectionTop = $(this).offset().top - 200;
    
            if (top >= sectionTop && top < sectionTop + height) {
                console.log('hello world');
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + '"]').addClass('active');
            }
        });
    });

});