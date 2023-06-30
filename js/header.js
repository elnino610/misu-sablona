document.addEventListener('DOMContentLoaded', function (event) {

    let menuButton = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');

    let header = document.getElementsByTagName('header')[0];
    let navBrandImage = document.querySelector('.navbar-brand img');
    let navLeft = document.querySelector('.navbar-left');
    let menuIcon = document.querySelector('.menu-btn .menu-icon');

    initMenu();

    menuButton.addEventListener('click', function (e) {
        menu.classList.toggle('open');
        menuIcon.classList.toggle('open');
        navLeft && navLeft.classList.toggle('hidden');
        
        if (menu.classList.contains('open')) {
            stretchedMenu();
            navBrandImage.classList.add('invert');
        } else {
            initMenu();
        }

    }, false);

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (menu.classList.contains('open')) return;
        initMenu();
    }

    function initMenu() {
        if (document.body.scrollTop > 0) {
            shrinkedMenu();
        } else {
            stretchedMenu();
        }
    }

    function shrinkedMenu() {
        header.classList.add('shrink');
        navBrandImage.classList.add('shrink-img');
        menuIcon.classList.add('invert');
        navBrandImage.classList.add('invert');
    }

    function stretchedMenu() {
        header.classList.remove('shrink');
        navBrandImage.classList.remove('shrink-img');
        menuIcon.classList.remove('invert');
        navBrandImage.classList.remove('invert');
    }

});