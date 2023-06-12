const toggleButton = document.querySelector(".toggle-button");

const navbarLinks = document.getElementsByClassName("navbar__links");

console.log(toggleButton)

toggleButton.addEventListener("click", () => {
  navbarLinks[0].classList.toggle("active");
});
