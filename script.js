startAnim();
window.addEventListener("scroll", () => {
  startAnim();
});

function startAnim() {
  const navbar = document.querySelector(".navbar");
  if (scrollY > 0 && !navbar.classList.contains("nav_shadow")) {
    navbar.classList.add("nav_shadow");
  }
  if (
    window.matchMedia("(max-width: 430px)").matches
      ? scrollY >= 200
      : scrollY >= 0
  ) {
    document.querySelectorAll(".topings").forEach((toping) => {
      toping.classList.add("topings_anim");
    });
  }
  let firstTime = true;
  const animations = [
    {
      minVal: 0,
      navItem: document.querySelectorAll(".nav-item")[0],
      elems: [
        {
          elem: document.querySelector(".home_introduction_d"),
          animClass: "home_introduction_d_anim",
        },
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 200 : 0,
      navItem: document.querySelectorAll(".nav-item")[0],
      elems: [
        { elem: document.querySelector(".pizza_board"), animClass: "leftAnim" },
        {
          elem: document.querySelector(".pizza"),
          animClass: "pizza_intro_anim",
        },
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 1000 : 400,
      navItem: document.querySelectorAll(".nav-item")[1],
      elems: [
        {
          elem: document.querySelector(".about_img"),
          animClass: "rightAnim",
        },
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 800 : 400,
      navItem: document.querySelectorAll(".nav-item")[1],
      elems: [
        {
          elem: document.querySelector(".col_about_texts"),
          animClass: "about_texts_anim",
        },
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 1600 : 1200,
      navItem: document.querySelectorAll(".nav-item")[2],
      elems: [
        {
          elem: document.querySelector(".popular_container"),
          animClass: "popular_section_anim",
        },
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 2500 : 2400,
      navItem: document.querySelectorAll(".nav-item")[3], // No specific nav item provided for Ingredients
      elems: [
        {
          elem: document.querySelector(".ingredients_ingredients"),
          animClass: "leftAnimForIngredients",
        },
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 3000 : 2400,
      navItem: document.querySelectorAll(".nav-item")[3], // No specific nav item provided for Ingredients
      elems: [
        {
          elem: document.querySelector(".ingredients_img_div"),
          animClass: "rightAnimforIngredients",
        },
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 3600 : 3400,
      navItem: document.querySelectorAll(".nav-item")[3],
      elems: [
        {
          elem: document.querySelector(".card_1"),
          animClass: "card_1_anim",
        },
        {
          elem: document.querySelector(".card_2"),
          animClass: "card_2_anim",
        },
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 4000 : 3400,
      navItem: document.querySelectorAll(".nav-item")[3],
      elems: [
        {
          elem: document.querySelector(".card_3"),
          animClass: "card_3_anim",
        },
        {
          elem: document.querySelector(".card_4"),
          animClass: "card_4_anim",
        },
      ],
    },
    
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 4200 : 3400,
      navItem: document.querySelectorAll(".nav-item")[3],
      elems: [
        {
          elem: document.querySelector(".card_5"),
          animClass: "card_5_anim",
        },
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 5200 : 4200,
      navItem: document.querySelectorAll(".nav-item")[4],
      elems: [
        {
          elem: document.querySelector(".contatUs_delivery_boy_img_div"),
          animClass: "contactUs_delivery_boy_img_div_anim",
        }
      ],
    },
    {
      minVal: window.matchMedia("(max-width: 430px)").matches ? 4800 : 4200,
      navItem: document.querySelectorAll(".nav-item")[4],
      elems: [
        
        {
          elem: document.querySelector(".contact_us_details"),
          animClass: "contact_us_details_anim",
        },
      ],
    },
  ];

  animations.forEach((anim) => {
    if (scrollY >= anim.minVal || firstTime === true) {
      document.querySelectorAll(".nav-item").forEach((navItem) => {
        if (navItem.classList.contains("active")) {
          navItem.classList.remove("active");
        }
      });
      const presentNavItem = anim.navItem;

      try {
        presentNavItem.classList.add("active");

        anim.elems.forEach((item) => {
          item.elem.classList.add(item.animClass);
        });
      } catch (err) {}
      firstTime = false;
    }
  });
}
function addEventOnElements(elem, event, func) {
  elem.addEventListener(event, () => {
    func();
  });
}
const navbar = document.querySelector(".navbar-nav");

document.querySelectorAll(".nav-item").forEach((navItem) => {
  function onNavItemClick() {
    document.querySelectorAll(".nav-item").forEach((navItem) => {
      if (navItem.classList.contains("active")) {
        navItem.classList.remove("active");
      }
    });
    navItem.classList.add("active");

    const isNavbarVisible = navbar.classList.contains("navbar-slide-down-anim");
    if (isNavbarVisible) {
      navbarToggle();
    }
  }
  addEventOnElements(navItem, "click", onNavItemClick);
});
const backToTopBtn = document.querySelector(".scroll_top_btn");
const upArrowIcon = document.querySelector(".fa-arrow-up");
function backToTop() {
  upArrowIcon.classList.add("upScrollAnim");
  backToTopBtn.classList.add("position_fixed");
  setTimeout(() => {
    backToTopBtn.classList.remove("position_fixed");
    upArrowIcon.classList.remove("upScrollAnim");
  }, 1200);
}

addEventOnElements(backToTopBtn, "click", backToTop);

const navbarToggler = document.querySelector(".navbar_toggler");
const overlay = document.querySelector(".nav_overlay");
const crossIcon = document.querySelector(".fa-x");

function navbarToggle() {
  const navbar = document.querySelector(".navbar-nav");
  navbar.classList.toggle("navbar-slide-down-anim");
  crossIcon.classList.toggle("cross_icon_visible");
  overlay.classList.toggle("overlay_visible");
}

addEventOnElements(navbarToggler, "click", navbarToggle);
addEventOnElements(overlay, "click", navbarToggle);
addEventOnElements(crossIcon, "click", navbarToggle);

const swiperElem = document.querySelector(".swiper");

function calcSpaceBetweenSlides() {
  return swiperElem.clientWidth * 0.08;
}
function calcSlidesPerView() {
  if (window.matchMedia("(max-width: 560px)").matches) {
    return 2.3;
  } else {
    return 3;
  }
}
let spaceBetweenSlides = calcSpaceBetweenSlides();
let slidesPerView = calcSlidesPerView();
const swiperClass = new Swiper(swiperElem, {
  centeredSlides: true,
  slidesPerView: slidesPerView,
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  spaceBetween: spaceBetweenSlides,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
});
window.addEventListener("resize", () => {
  spaceBetweenSlides = calcSpaceBetweenSlides();
  swiperClass.params.spaceBetween = spaceBetweenSlides;

  slidesPerView = calcSlidesPerView();
  swiperClass.params.slidesPerView = slidesPerView;

  swiperClass.update();
});
console.log("hi")