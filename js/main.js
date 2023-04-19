/*=============== Mixitup ==============--*/

let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/* Active Work */
const linkWord = document. querySelectorAll('category__bar');

function activeWord(){
	linkWord.forEach((a) => a.classList.romeve('active-word'));
	this.classList.add('active-word');
}

linkwork. forEach((a) => a.addEventListener('click', activeWork));

/*=============== TestimonialsS Swiper ==============--*/
var testiSwiper = new Swiper('.testimonial__container', {
      loop : true,    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      mousewheel: true,
      keyboard: true,
    });