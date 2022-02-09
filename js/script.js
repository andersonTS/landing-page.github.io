$(function() {
    // Menu button
    $('.navbar__toogle-button').click(function() {
        $(this).toggleClass('activeMenu')
        $('.navbar__left').slideToggle(300)
    })
    $(window).resize(function() {
        if($(window).width() > 991){
            $('.navbar__toogle-button').css('display', 'none')
            $('.navbar__left').css('display', 'block')
        } if($(window).width() <= 992) {
            $('.navbar__toogle-button').css('display', 'block')
            $('.navbar__left').css('display', 'none')
        }
    })

    // Slider
    function slickify(){
        $('.main-info__slide').slick({
            arrows : false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: "unslick"
                }
            ]
        });
    }
    
    slickify()
    $(window).resize(function(){
        var $windowWidth = $(window).width()
        if ($windowWidth > 768) {
            slickify()
        }
    });
})

