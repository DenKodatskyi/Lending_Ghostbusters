/* VARIABLES */
const body = document.body;
const mobMenuBtn = document.querySelector('.mob_menu_btn');
const mMenu = document.querySelector('.m_menu');
const actorsTab = document.querySelector('.actors_tab');
const creatorsTab = document.querySelector('.creators_tab');
const tabsContent = document.querySelector('.tabs_content');
const tabActors = document.querySelector('.tab_actors');
const tabCreators = document.querySelector('.tab_creators');


/* FUNCTIONS */
const disableScroll = () => {
  body.classList.add('no_scroll');
}

const enableScroll = () => {
  body.classList.remove('no_scroll');
}


/* EVENTS */
mobMenuBtn.addEventListener('click', () => {
  mMenu.classList.toggle('active') ? disableScroll() : enableScroll();
});

tabActors.addEventListener('click', () => {
  tabCreators.classList.remove('active');
  tabActors.classList.add('active');
  creatorsTab.classList.remove('visible');
  actorsTab.classList.add('visible');
});

tabCreators.addEventListener('click', () => {
  tabActors.classList.remove('active');
  tabCreators.classList.add('active');
  actorsTab.classList.remove('visible');
  creatorsTab.classList.add('visible');
});


/* SWIPER SLIDER */
let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  // slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  breakpoints: {
    991: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})















