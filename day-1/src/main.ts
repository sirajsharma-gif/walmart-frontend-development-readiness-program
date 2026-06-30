const hamElement = document.getElementById("nav-menu-btn");
const navElement = document.getElementById("nav-menu");
const closeElement = document.getElementById("nav-menu-close-btn");

hamElement?.addEventListener("click", () => {
  navElement?.classList.toggle("nav--open");
});

closeElement?.addEventListener("click", (event) => {
  event.preventDefault();
  navElement?.classList.remove("nav--open");
});
