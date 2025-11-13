const menu = document.getElementById("menu");
const btnMenu = document.querySelector(".btn__menu");
const btnClose = document.querySelector(".header__logo-close")

btnMenu.addEventListener("click", ()=>{
    if(btnMenu.getAttribute("aria-expanded") === "false"){
        btnMenu.setAttribute("aria-expanded", "true");
        menu.hidden = false;
        btnClose.setAttribute("src", "../images/icon-close.svg");
        document.body.style.overflow = "hidden";
        menu.classList.add("header__nav-active");
    }else{
        btnMenu.setAttribute("aria-expanded", "false");
        menu.hidden = true;
        btnClose.setAttribute("src", "../images/icon-hamburger.svg");
        document.body.style.overflow = "auto";
        menu.classList.remove("header__nav-active");
    }
});
