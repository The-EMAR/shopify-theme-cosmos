const backToTop = document.querySelector('.footer__back-link');

if (backToTop) {
  backToTop.addEventListener('click', event => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })
}