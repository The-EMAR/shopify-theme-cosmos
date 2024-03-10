document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('collections-release-slider', {
    perPage: 1,
    gap: 20,
    autoHeight: true,
    pagination: false,
    arrows: false,
    breakpoints: {
      1024: {
        perPage: 1,
      },
      767: {
        perPage: 1,
      }
    }
  });

  var thumbnails = new Splide('#thumbnail-slider', {
    perPage: 3,
    focus: 'center',
    trimSpace: false,
    gap: 20,
    pagination: false,
    arrows: false,
    isNavigation: true,
    height: 80
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});

// const loadings = document.querySelectorAll('.loading');

// loadings?.forEach(el=>{
//   if (el.querySelector('img')?.classList.contains('lazyload')) {
//     el.classList.remove('loading');
//   }
// })