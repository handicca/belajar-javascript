"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// old version
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", openModal);
// }

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//// Implementing Smooth Scrolling
btnScrollTo.addEventListener("click", function (e) {
  /*
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll X/Y", window.scrollX, window.scrollY);
  const html = document.documentElement;
  console.log("Height and Width viewport", html.clientHeight, html.clientWidth);

  // Scrooling
  // window.scrollTo(s1coords.x + window.scrollX, s1coords.y + window.scrollY);
  window.scrollTo({
    left: s1coords.x + window.scrollX,
    top: s1coords.y + window.scrollY,
    behavior: "smooth",
  });
  */

  // for modern browser
  section1.scrollIntoView({ behavior: "smooth" });
});

//// Event Delegation: Implementing Smooth Navigation
// cara ini memang baik baik saja tetapi jika ada 1000 link ini akan meng-copy function yg sama. beter menggunakan EVENT DELEGATION.
// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = e.currentTarget.getAttribute("href");

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//// Tabbed Component

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  // Guard Clause
  if (!clicked) return;

  // Remove active class
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//// Menu Fade Animation
function handleOver(e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = e.target.closest(".nav").querySelectorAll(".nav__link");
    const logo = e.target.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}

// Passing argument into handler
nav.addEventListener("mouseover", handleOver.bind(0.5));
nav.addEventListener("mouseout", handleOver.bind(1));

// Sticky Navigation: scroll event (kurang baik karena event berjalan terus)
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener("scroll", () => {
//   if (window.scrollY + 10 > initialCoords.y) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// Sticky Navigation: Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const observer = new IntersectionObserver(obsCallback, {
//   root: null,
//   threshold: [0, 0.2],
// });

// observer.observe(section1)

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal Section
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");

function loadImg(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
  });
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotsContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    goToSlide(0);
    activateDot(0);
  };

  init();

  // Event Handlers
  btnLeft.addEventListener("click", prevSlide);
  btnRight.addEventListener("click", nextSlide);

  document.addEventListener("keydown", function (e) {
    e.key === "ArrowLeft" && prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      // const { slide } = e.target.dataset;
      // goToSlide(slide);
      // activateDot(slide);

      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};

slider();

/*
//// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
// NodeList
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
// HTMLCollections; kalo ada element terhapus HTMLCollections akan update yang terbaru
console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByClassName("btn"));

//// Creating and Inserting Elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics."
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

//// children
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true))

//// sibling
// header.before(message)
// header.after(message)

//// Deleting Elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // new
    message.remove();
    // old
    // message.parentElement.removeChild(message);
  });

//// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color); // no result
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// mengganti value css variable --color-primary menjadi 'orangered'
document.documentElement.style.setProperty("--color-primary", "orangered");

//// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src); // absolute path
console.log(logo.className);

logo.alt = "Minimalist";

// Non-standard attributes
console.log(logo.designer); // undefind
console.log(logo.getAttribute("designer")); // Handika
console.log(logo.getAttribute("src")); // relative path

//// menggunakan setAttribute() untuk set atau replace attr.
// logo.setAttribute('alt', 'Minimalist Bangkist Logo');
// logo.setAttribute('coder', 'Handika');

//// Data attributes
console.log(logo.dataset.versionNumber); // 2.6; selalu ingat gunakan cammelCase

//// Classes
// logo.classList.add('a', 'b')
// logo.classList.remove('a', 'b')
// logo.classList.toggle('a')
// logo.classList.contains('a')

// Jangan gunakan ini karena akan menimpa semua class
// logo.className = 'Handika'


//// Types of Events and Event Handlers
const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading :D");

  // ini membuat addEventLisetener berjalan 1 kali saja ini juga bisa kita taruh di setTimeout.
  h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);

// remove addEventListener menggunakan setTimeout
// setTimeout(() => {
//   h1.removeEventListener("mouseenter", alertH1);const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
// }, 3000);

// eventlistener menggunakan on(something) exp: onclick, onmouseenter.
// Hanya bisa menampung satu fungsi per event. Jika diset dua kali, yang terakhir akan menimpa
// h1.onmouseenter = function (e) {
//   alert("onmouseenter: is old way to add event");
// };

//// Event Propagation in Practice

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK')
  // e.target adalah element tempat event terjadi
  // e.currentTarget dan this sama yaitu element tempat eventListener terpasang
  // console.log(e.currentTarget === this); // true

  // stop propagation(penyebaran)
  // e.stopPropagation()
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER")
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV')
}, true);

//// DOM Traversing
const h1 = document.querySelector("h1");

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "blue";

// Going upwards
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)"; // diri sendiri

// Going sideways: sibling
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

/*
///////////////////////////////////////
// Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
*/