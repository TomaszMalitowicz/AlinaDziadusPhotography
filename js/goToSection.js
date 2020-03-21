// JQuery

// $('nav a').on('click', function () {
//     const goToSection = '#' + $(this).attr('class');
//     $('body, html').animate({
//         scrollTop: $(goToSection).offset().top
//     })
// })

//Poniżej opcja z - window.innerHeight * 0.1 odpowiada za belkę która ma 10vh.
$('nav a').on('click', function () {
    const goToSection = '#' + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - window.innerHeight * 0.1
    })
})