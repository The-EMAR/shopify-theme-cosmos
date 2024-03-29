document.addEventListener('DOMContentLoaded', function () {
  var main3 = new Splide('new-product-slider', {
    perPage: 1,
    gap: 20,
    pagination: false,
    arrows: false,
    breakpoints: {
      2056: {
        destroy: true
      },
      767: {
        destroy: false,
        perPage: 1,
      }
    }
  });

  main3.mount();
});

// const loadings = document.querySelectorAll('.loading');

// loadings?.forEach(el=>{
//   if (el.querySelector('img')?.classList.contains('lazyload')) {
//     el.classList.remove('loading');
//   }
// })