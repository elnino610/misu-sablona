document.addEventListener('DOMContentLoaded', function (event) {

    let services = document.querySelector('.services');
    let slides = services?.querySelectorAll('.js-servicesSwiper .swiper-slide');
    let visibleSlides = services?.querySelectorAll('.js-servicesSwiper .swiper-slide-visible');

    if (slides) {
        slides.forEach(slide => {
            if (!slide.classList.contains('swiper-slide-visible')) {
                let clips = slide.querySelectorAll('.services-bg-clip');
                clips.forEach(clip => {
                    clip.remove();
                });
            }
        })
    }

    if (services && visibleSlides) {
        scrollFunction();
        window.addEventListener('scroll', scrollFunction);
    }

    function scrollFunction() {
        let servicesScrollTop = services.offsetTop - 200;
        let bodyScrollTop = document.body.scrollTop;
        if (bodyScrollTop > servicesScrollTop) {
            window.removeEventListener('scroll', scrollFunction);
            services.classList.add('active');
            visibleSlides.forEach((slide, slideIdx) => {
                let clips = slide.querySelectorAll('.services-bg-clip');
                if (clips.length > 0) {
                    clips.forEach((clip, clipIdx) => {
                        clip.style.opacity = 1;
                        setTimeout(() => {
                            clip.play();
                        }, (slideIdx + clipIdx) * 1000)
                        clip.addEventListener('ended',fadeOut);
                        window.removeEventListener('ended',fadeOut);
                    });
                }
            });
            return;
        }
    }

    function fadeOut(ev) {
        ev.target.style.opacity = 0;
        ev.target.style.transition = "opacity 5000ms ease";
    }

});