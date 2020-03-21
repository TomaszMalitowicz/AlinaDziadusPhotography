function hightlightNavBar() {
    console.log("działa")
    const scrollValue = $(window).scrollTop();
    const heightS2 = $('.s2').offset().top - window.innerHeight * 0.11;
    const heightS3 = $('.s3').offset().top - window.innerHeight * 0.11;
    const heightS4 = $('.s4').offset().top - window.innerHeight * 0.11;
    const heightS5 = $('.s5').offset().top - window.innerHeight * 0.11;
    console.log(scrollValue, heightS2, heightS3, heightS4, heightS5)

    // $('nav li').removeClass('active');

    if (scrollValue < heightS2) {
        $('nav a').not('.welcome').removeClass('hightlight')
        $('.welcome').addClass('hightlight');
    } else if (scrollValue < heightS3) {
        $('nav a').not('.me').removeClass('hightlight')
        $('.me').addClass('hightlight');
    } else if (scrollValue < heightS4) {
        $('nav a').not('.portfolio').removeClass('hightlight')
        $('.portfolio').addClass('hightlight');
    } else if (scrollValue < heightS5) {
        $('nav a').not('.offer').removeClass('hightlight')
        $('.offer').addClass('hightlight');
    } else {
        $('nav a').not('.contact').removeClass('hightlight')
        $('.contact').addClass('hightlight');
    }
}
$(window).on("scroll", hightlightNavBar)