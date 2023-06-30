import {VanillaTilt} from './vendor/vanillaTilt.js';

document.addEventListener('DOMContentLoaded', function (event) {

  const items = document.querySelectorAll('.js-tilt-hover');

  if (items.length > 0) {
    items.forEach(item => {
      VanillaTilt.init(item, {
        max: 10,
        speed: 100,
        glare: true,
        maxGlare: 0.5,
        perspective: 1500
      });
      const glare = item.querySelector(".glare");
      if (glare) {
        item.onmousemove = (e) => {
          glare.style.background = `
          linear-gradient(${e.clientX}deg, rgba(127,127,127,1) 17%, rgba(57,91,100,0) 100%)`;
        };
      }
    });
  }
  
});