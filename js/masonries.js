import MiniMasonry from './vendor/minimasonry.js';

document.addEventListener('DOMContentLoaded', function (event) {

    let baseWidth = 450;
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth <= 1600) {
        baseWidth = 400;
    }
    // if (viewportWidth <= 1400) {
    //     baseWidth = 400;
    // }
    // if (viewportWidth <= 992) {
    //     baseWidth = 300;
    // }
    // if (viewportWidth <= 768) {
    //     baseWidth = 250;
    // }
    if (viewportWidth <= 460) {
        baseWidth = 200;
    }

    const reviewsMasonry = document.getElementsByClassName('js-reviewsMasonry');

    if (reviewsMasonry.length) {
        let masonry = new MiniMasonry({
            container: document.querySelector('.js-reviewsMasonry'),
            baseWidth: baseWidth,
            gutter: 24,
            ultimateGutter: 24,
            surroundingGutter: false,
        });
    }

});