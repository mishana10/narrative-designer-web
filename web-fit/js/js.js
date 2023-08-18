const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const logo = document.querySelector(".navbar-logo");
const body = document.querySelector("body")

const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    body.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu)


gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-hero", {
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.3
});