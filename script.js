"use strict";

const header = document.querySelector("header");
const section1 = document.querySelector("#section--1");
const btnScroll = document.querySelector(".btn-scroll");

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
    console.log(section1.getBoundingClientRect());
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
