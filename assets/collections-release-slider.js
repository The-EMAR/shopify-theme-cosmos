// (()=>{
//   if (customElements.get('collections-release-slider')) {
//     return 0;
//   }

//   const collectionSliders = document.querySelectorAll('collections-release-slider');

//   if (collectionSliders.length > 0) {
//     collectionSliders.forEach(el => {
//       let splide = new Splide(el, {
//         autoHeight: true,
//         pagination: false,
//         perPage: 1,
//         gap: 20,
//         arrows: false,
//         breakpoints: {
//           1024: {
//             perPage: 1,
//           },
//           767: {
//             perPage: 1,
//           }
//         }
//       })

//       splide.on( 'pagination:mounted', function ( data ) {
//         // You can add your class to the UL element
//         data.list.classList.add( 'splide__pagination--custom' );

//         let slideTitles = el.querySelectorAll('.splide__list li');

//         // `items` contains all dot items
//         data.items.forEach( function ( item, index_1 ) {
//           slideTitles.forEach((in_el, index_2)=>{
//             if (index_1 === index_2) {
//               item.button.textContent = in_el.getAttribute('data-title');
//             }
//           });
//         } );
//       } );

//       let thumbnails = new Splide( '#thumbnail-slider', {
//         perPage: 3,
//         rewind    : true,
//         pagination: false,
//         arrows: false
//       } ).mount();

//       splide.sync(thumbnails);
//       splide.mount();
//       thumbnails.mount();

//     });
//   }
// })();

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
    rewind: true,
    pagination: false,
    arrows: false,
    isNavigation: true,
    focus: 'center',
    height: 50
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
