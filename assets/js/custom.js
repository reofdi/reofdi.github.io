$(document).ready(function() {
    "use strict";
    $('.right-banner-slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    // collapse nav & mobile view
    let bar = document.querySelector('#bar');
    let close = document.querySelector('.close-btn');
    let menuBar = document.querySelector('#items');

    bar.addEventListener('click', function(e) {
        menuBar.style.transform = 'translateX(0)';


    })
    close.addEventListener('click', function() {
        menuBar.style.transform = 'translateX(-100%)';
    })



});