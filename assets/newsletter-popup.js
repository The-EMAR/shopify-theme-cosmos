const newsletterPopup = document.querySelector('.newsletter-popup');

if (newsletterPopup) {
  function isBottom() {
    return (window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight;
  }

  window.addEventListener('scroll', () => {
    if (isBottom()) {
      if (getCookie('newsletter-subscribed')) {
        return;
      }

      newsletterPopup.classList.remove('hide');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  let form = newsletterPopup.querySelector('.newsletter-form--custom');
  let closeBtn = newsletterPopup.querySelector('.newsletter-popup__close');

  function isChallengePage() {
    return window.location.href.includes('/challenge');
  }

  if (isChallengePage() !== true) {
    if (sessionStorage.getItem('session-subscribed')) {
      newsletterPopup.classList.remove('hide');
    }
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      setCookie('newsletter-subscribed', 'true');
      sessionStorage.setItem('session-subscribed', 'true');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      newsletterPopup.classList.add('hide');

      if (sessionStorage.getItem('session-subscribed')) {
        sessionStorage.removeItem('session-subscribed');
      }

      if (getCookie('newsletter-subscribed')) {
        newsletterPopup.classList.add('hide');
      }
    });
  }
})

