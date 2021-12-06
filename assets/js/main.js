const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((x) =>
  x.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16,
  grabCursor: true,
});

// ======= CHANGE BACKGROUND HEADER =======

const header = document.getElementById("header");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = this.pageYOffset;
  if (scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
});

// ====show Scroll Up=====
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 460) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// ====== scroll reveal ======

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });
