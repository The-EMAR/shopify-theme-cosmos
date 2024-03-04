const collectionSliders = document.querySelectorAll('collection-slider');

if (collectionSliders.length > 0) {
  collectionSliders.forEach(el => {
    new Splide(el, {
      perPage: 4,
      arrows: false,
      pagination: false,
      gap: 10,
      breakpoints: {
        1024: {
          perPage: 3,
        },
        767: {
          perPage: 1,
        }
      }
    }).mount();
  });
}