

  const swiperFirst = new Swiper('.swiper-first', {
    speed: 400,
    spaceBetween: 24,
    slidesPerView: 3,
    
    loopedSlides: 3,
    loop: true,
    mousewheel: {              
      sensitivity: 1,
    },
    navigation: {
      nextEl: '.swiper-button-next1',
    },
    breakpoints: {
       320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      loopedSlides: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      
    },
    1024: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 5,
    }
      }
    
  });

  const swiperSecond = new Swiper('.swiper-second', {
    speed: 400,
    spaceBetween: 32,
    slidesPerView: 1.5,
    slidesPerColumn: 1,
    

    loop: true,
    mousewheel: {              
      sensitivity: 1,
    },
    navigation: {
      nextEl: '.swiper-button-next2',
    },
    breakpoints: {   
      768: {
        slidesPerView: 4,
        loopedSlides: 4,
      }
      }
    
  });

  const swiperPrice = new Swiper('.swiper-price', {
    speed: 400,
    spaceBetween: 32,
    slidesPerView: 1.5,
    slidesPerColumn: 1,
    
    mousewheel: {              
      sensitivity: 1,
    },

    breakpoints: {   
      768: {
        spaceBetween: 0,
        direction: 'vertical',
        slidesPerView: 6,
        slidesPerColumn: 5,
        
      }
      }
  });



const modalWindow = document.getElementById("modal-window");
const modalWindowOpen = document.getElementById("open-window");
const modalClose = document.getElementById("modal-btn-cls");


modalWindowOpen.addEventListener('click', () => {
  modalWindow.style.display = 'block';
  
});

modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  
});

