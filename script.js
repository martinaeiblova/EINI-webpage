"use strict";

const header = document.querySelector("header");
const cookieMessage = document.createElement("div");
cookieMessage.classList.add("cookie-message");
cookieMessage.innerHTML =
    'Používáme soubory cookie pro zlepšování funkčnosti a pro analýzu informací. <button class="cookie-button">OK</button>';
header.after(cookieMessage);
