"use strict";

const header = document.querySelector("header");
const section1 = document.querySelector("#section--1");
const btnScroll = document.querySelector(".btn-scroll");

const tabs = document.querySelectorAll(".btn-section2");
const tabsContainer = document.querySelector(".buttons-section2");
const tabsContant = document.querySelectorAll(".content-section2");

const nav = document.querySelector(".nav");

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider-btn--left");
const btnRight = document.querySelector(".slider-btn--right");

const cookieMessage = document.createElement("div");
cookieMessage.classList.add("cookie-message");
cookieMessage.innerHTML =
    'Používáme soubory cookie pro zlepšování funkčnosti a pro analýzu informací. <button class="cookie-button">OK</button>';
header.after(cookieMessage);

document
    .querySelector(".cookie-message")
    .addEventListener("click", cookieMessage.remove);

//Scrolling
btnScroll.addEventListener("click", function () {
    section1.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".nav-link").addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav--item")) {
        const id = e.target.getAttribute("id");
        document.querySelector(id).scrollIntoView({
            bahavior: "smooth",
        });
    }
});

//Section 2
tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".btn-section2");

    if (!clicked) return;

    tabs.forEach((t) => t.classList.remove("btn-section2-active"));
    clicked.classList.add("btn-section2-active");

    tabsContant.forEach((tc) => tc.classList.remove("content-section2-active"));

    document
        .querySelector(`.content${clicked.dataset.btn}-section2`)
        .classList.add("content-section2-active");
});

const handleHover = function (e, opacity) {
    if (e.target.classList.contains("nav--item")) {
        const link = e.target;
        const siblings = link.closest("nav").querySelectorAll(".nav--item");
        const logo = link.closest("nav").querySelector(".header-title");

        siblings.forEach((el) => {
            if (el != link) el.style.opacity = opacity;
        });
        logo.style.opacity = opacity;
    }
};

nav.addEventListener("mouseover", function (e) {
    handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
    handleHover(e, 1);
});

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Slider
let curSlide = 0;
const maxSlide = slides.length - 1;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
//I need results: 0%, 100%, 200%

function movingSlide() {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
    //I need results: -100%, 0%, 100%
}

function nextSlide() {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    movingSlide();
}

function prevSlide() {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    movingSlide();
}

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);
