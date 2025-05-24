

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
const modalWindowC = document.getElementById("modal-content");
const modalWindowB = document.getElementById("modal-bl");

modalWindowOpen.addEventListener('click', () => {
  modalWindow.style.display = 'block';
  modalWindowC.style.display = 'block';
  modalWindowB.style.display = 'block';
});

modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  modalWindowC.style.display = 'none';
  modalWindowB.style.display = 'none';
  
});


const modalMenuOpen = document.getElementById ("menu-open")
const modalMenu = document.getElementById ("hidden-menu")
const modalMenuClose = document.getElementById ("bok-menu__esc")
const modalMenuCon = document.getElementById ("bok-menu")
const gps = document.getElementById ("menu__gps")
const esc = document.getElementById ("bok-menu__esc")
const srcM = document.getElementById ("bok-menu__src")
const footer = document.getElementById ("footer")
const footerCont = document.getElementById ("footer__contact")

modalMenuOpen.addEventListener('click', () => {
  modalMenu.style.display = 'block';
  modalMenuCon.style.display = 'block';
  modalMenuClose.style.display = 'block';
  footer.style.left = '5px';
  footer.style.position = 'fixed';
  footer.style.bottom = '0px';
  footer.style.zIndex = '300';
  srcM.style.display = 'block';
  footerCont.style.display = 'block';
  gps.style.position = 'fixed';
});

modalMenuClose.addEventListener('click', () => {
  modalMenu.style.display = 'none';
  modalMenuCon.style.display = 'none';
  modalMenuClose.style.display = 'none';
  footer.style.left = '0';
  footer.style.position = '';
  footer.style.bottom = '';
  srcM.style.display = 'none';
  footerCont.style.display = 'none';
  gps.style.position = 'static';
});