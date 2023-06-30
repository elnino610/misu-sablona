import './vendor/swiper.js';

document.addEventListener('DOMContentLoaded', function (event) {

    const homeSwipers = document.querySelectorAll(
        '.js-homeSwiper'
    );
    if (homeSwipers.length > 0) {
        // Home Swiper
        let homeSwiper = new Swiper(".js-homeSwiper", {
            loop: true,
            grabCursor: true,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
            // navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // },
            on: {
                slideChangeTransitionStart: function () {
                    let currentTitle = document.querySelector(".current-title");
                    let currentSubtitle = document.querySelector(".current-subtitle");
                    let slideCaptionsBottomInner = document.querySelector(".slide-captions-bottom-inner");
                    if (currentTitle && currentSubtitle) {
                        if (this.activeIndex > this.previousIndex) {
                            gsap.to(currentTitle, 0.4, { autoAlpha: 0, x: -600, ease: Power1.easeIn });
                            gsap.to(currentSubtitle, 0.4, { autoAlpha: 0, x: -600, delay: 0.15, ease: Power1.easeIn });
                        } else {
                            gsap.to(currentTitle, 0.4, { autoAlpha: 0, x: 600, ease: Power1.easeIn });
                            gsap.to(currentSubtitle, 0.4, { autoAlpha: 0, x: 600, delay: 0.15, ease: Power1.easeIn });
                        }
                    }
                    if (slideCaptionsBottomInner) {
                        if (this.activeIndex > this.previousIndex) {
                            gsap.to(slideCaptionsBottomInner, 0.4, { autoAlpha: 0, x: -600, delay: 0.15, ease: Power1.easeIn });
                        } else {
                            gsap.to(slideCaptionsBottomInner, 0.4, { autoAlpha: 0, x: 600, delay: 0.15, ease: Power1.easeIn });
                        }
                    }
                },
                slideChangeTransitionEnd: function () {
                    let currentTitle = this.slides[this.activeIndex].querySelector('.swiper-content').getAttribute("data-title");
                    let currentSubtitle = this.slides[this.activeIndex].querySelector('.swiper-content').getAttribute("data-subtitle");

                    let firstValue = this.slides[this.activeIndex].querySelector('.swiper-content').getAttribute("data-first-value");
                    let firstText = this.slides[this.activeIndex].querySelector('.swiper-content').getAttribute("data-first-text");

                    let secondValue = this.slides[this.activeIndex].querySelector('.swiper-content').getAttribute("data-second-value");
                    let secondText = this.slides[this.activeIndex].querySelector('.swiper-content').getAttribute("data-second-text");

                    let client = homeSwiper.slides[homeSwiper.activeIndex].querySelector('.swiper-content').getAttribute("data-client");
                    let clientObj = JSON.parse(client);

                    let slideCaptions = document.querySelector(".slide-captions");
                    if (slideCaptions) {
                        slideCaptions.innerHTML = `<h1 class='current-title'>${currentTitle}<img class='slash' src='../img/slash.svg' alt='slash'></h1><h3 class='current-subtitle'>${currentSubtitle}</h3>`;          
                    }

                    let slideCaptionsBottom = document.querySelector(".slide-captions-bottom");
                    slideCaptionsBottom.innerHTML = "<div class='slide-captions-bottom-inner'></div>";
                    let slideCaptionsBottomInner = slideCaptionsBottom.querySelector('.slide-captions-bottom-inner');
                    if (firstValue && firstText) {
                        slideCaptionsBottomInner.innerHTML += `<div class="slide-captions-bottom-inner-item"><h3 class="value title-bg">${firstValue}</h3><span class="text">${firstText}</span></div>`;
                    }
                    if (secondValue && secondText) {      
                        slideCaptionsBottomInner.innerHTML += `<div class="slide-captions-bottom-inner-item slide-captions-bottom-inner-item-second"><h3 class="value title-bg">${secondValue}</h3><span class="text">${secondText}</span></div>`;
                    }

                    if (clientObj) {
                        slideCaptionsBottomInner.innerHTML += `<div class='slide-captions-bottom-inner-client'></div>`;
                        let slideCaptionsBottomInnerClient = slideCaptionsBottomInner.querySelector('.slide-captions-bottom-inner-client');
                        slideCaptionsBottomInnerClient.innerHTML += `<a href='${clientObj.link}'><div class="title">Klient</div><div class="name">${clientObj.name}<img class="arrow-btn" src="../img/right-arrow-black.svg" alt="arrow-right"></div></a>`;
                        clientObj.nav.forEach((navItem, idx, arr) => {
                            slideCaptionsBottomInnerClient.innerHTML += `<a href='${navItem.link}'>${navItem.title}</a>`;
                            if (idx !== arr.length - 1){ 
                                slideCaptionsBottomInnerClient.innerHTML += ` <span>&#92;</span> `;
                            }
                        });
                    }

                    if (this.activeIndex > this.previousIndex) {
                        gsap.from(document.querySelector('.current-title'), 0.4, { autoAlpha: 0, x: 600, ease: Power1.easeOut });
                        gsap.from(document.querySelector('.current-subtitle'), 0.4, { autoAlpha: 0, x: 600, delay: 0.15, ease: Power1.easeOut });
                        gsap.from(slideCaptionsBottom.querySelector('.slide-captions-bottom-inner'), 0.4, { autoAlpha: 0, x: 600, delay: 0.15, ease: Power1.easeOut });
                    } else {
                        gsap.from(document.querySelector('.current-title'), 0.4, { autoAlpha: 0, x: -600, ease: Power1.easeOut });
                        gsap.from(document.querySelector('.current-subtitle'), 0.4, { autoAlpha: 0, x: -600, delay: 0.15, ease: Power1.easeOut });
                        gsap.from(slideCaptionsBottom.querySelector('.slide-captions-bottom-inner'), 0.4, { autoAlpha: 0, x: -600, delay: 0.15, ease: Power1.easeOut });
                    }
                }
            }
        });

        // Slide captions
        let currentTitle = homeSwiper.slides[homeSwiper.activeIndex].querySelector('.swiper-content').getAttribute("data-title");
        let currentSubtitle = homeSwiper.slides[homeSwiper.activeIndex].querySelector('.swiper-content').getAttribute("data-subtitle");

        let firstValue = homeSwiper.slides[homeSwiper.activeIndex].querySelector('.swiper-content').getAttribute("data-first-value");
        let firstText = homeSwiper.slides[homeSwiper.activeIndex].querySelector('.swiper-content').getAttribute("data-first-text");

        let secondValue = homeSwiper.slides[homeSwiper.activeIndex].querySelector('.swiper-content').getAttribute("data-second-value");
        let secondText = homeSwiper.slides[homeSwiper.activeIndex].querySelector('.swiper-content').getAttribute("data-second-text");

        let client = homeSwiper.slides[homeSwiper.activeIndex].querySelector('.swiper-content').getAttribute("data-client");
        let clientObj = JSON.parse(client);

        let slideCaptions = document.querySelector(".slide-captions");
        slideCaptions.innerHTML = `<h1 class='current-title'>${currentTitle}<img class='slash' src='../img/slash.svg' alt='slash'></h1><h3 class='current-subtitle'>${currentSubtitle}</h3>`;          

        let slideCaptionsBottom = document.querySelector(".slide-captions-bottom");
        slideCaptionsBottom.innerHTML = "<div class='slide-captions-bottom-inner'></div>";
        let slideCaptionsBottomInner = document.querySelector('.slide-captions-bottom-inner');
        if (firstValue && firstText) {
            slideCaptionsBottomInner.innerHTML += `<div class="slide-captions-bottom-inner-item"><h3 class="value title-bg">${firstValue}</h3><span class="text">${firstText}</span></div>`;
        }
        if (secondValue && secondText) {      
            slideCaptionsBottomInner.innerHTML += `<div class="slide-captions-bottom-inner-item slide-captions-bottom-inner-item-second"><h3 class="value title-bg">${secondValue}</h3><span class="text">${secondText}</span></div>`;
        }

        if (clientObj) {
            slideCaptionsBottomInner.innerHTML += `<div class='slide-captions-bottom-inner-client'></div>`;
            let slideCaptionsBottomInnerClient = slideCaptionsBottomInner.querySelector('.slide-captions-bottom-inner-client');
            slideCaptionsBottomInnerClient.innerHTML += `<a href='${clientObj.link}'><div class="title">Klient</div><div class="name">${clientObj.name}<img class="arrow-btn" src="../img/right-arrow-black.svg" alt="arrow-right"></div></a>`;
            clientObj.nav.forEach((navItem, idx, arr) => {
                slideCaptionsBottomInnerClient.innerHTML += `<a href='${navItem.link}'>${navItem.title}</a>`;
                if (idx !== arr.length - 1){ 
                    slideCaptionsBottomInnerClient.innerHTML += ` <span>&#92;</span> `;
                }
            });
        }
    }

    const homeHeroSwipers = document.querySelectorAll(
        '.js-heroServicesSwiper'
    );
    if (homeHeroSwipers.length > 0) {
        // Home Hero Swiper
        let homeHeroSwiper = new Swiper(".js-heroServicesSwiper", {
            loop: true,
            autoHeight: true,
            slidesPerView: 1,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // pagination: {
            //     el: ".swiper-pagination",
            //     clickable: true
            // }
        });
    }

    const servicesTabsSwipers = document.querySelectorAll(
        '.js-servicesTabsSwiper'
    );
    if (servicesTabsSwipers.length > 0) {
        // Home Hero Swiper
        let servicesTabsSwiper = new Swiper(".js-servicesTabsSwiper", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 15,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1400: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                }
            },
        });
    }

    const servicesSwipers = document.querySelectorAll(
        '.js-servicesSwiper'
    );
    if (servicesSwipers.length > 0) {
        // Services Swiper
        let servicesSwiper = new Swiper(".js-servicesSwiper", {
            loop: true,
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 22,
            watchSlidesProgress: true,
            breakpoints: {
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 44,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 44,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 44,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 44,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 44,
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
    }

    const blogSwipers = document.querySelectorAll(
        '.js-blogSwiper'
    );
    if (blogSwipers.length > 0) {
        // Blog Swiper
        let blogSwiper = new Swiper(".js-blogSwiper", {
            loop: true,
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 24,
            breakpoints: {
                1400: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 2,
                },
                // 768: {
                //     slidesPerView: 1,
                // },
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }

    const clientsSwipers = document.querySelectorAll(
        '.js-clientsSwiper'
    );
    if (clientsSwipers.length > 0) {
        // Clients Swiper
        let clientsSwiper = new Swiper(".js-clientsSwiper", {
            loop: true,
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 24,
            breakpoints: {
                // 1200: {
                //     slidesPerView: 3,
                // },
                // 992: {
                //     slidesPerView: 2,
                // },
                // 768: {
                //     slidesPerView: 2,
                // },
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }

});