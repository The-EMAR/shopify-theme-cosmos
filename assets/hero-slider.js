let heroSlider = new Splide('.splide', {
  perPage: 4,
  type: 'loop',
  arrows: false,
  pagination: false,
  lazyLoad: true,
  gap: 60,
  perPage: 4,
  breakpoints: {
		1024: {
			perPage: 3,
		},
    767: {
      perPage: 1,
    }
  }
});

heroSlider.mount(window.splide.Extensions);