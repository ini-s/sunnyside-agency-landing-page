const openMenu = document.querySelector(".open-menu")
const sideNav = document.querySelector(".side-nav")
openMenu.addEventListener("click", () => {
    sideNav.classList.toggle("active")
})