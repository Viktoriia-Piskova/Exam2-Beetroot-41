$(document).ready(function () {

    if (window.innerWidth > 1200) {
        $('.news__slideshow-container').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 1000
        })
    } if(window.innerWidth <= 1200) {
        $('.news__slideshow-container').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
        });
    }


});

$(document).ready(function () {
    $('.header__slider_container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000
    });
});
