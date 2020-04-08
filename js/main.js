// fullpage plugin
new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
});

// burger menu toggle
const navBar = document.querySelector(".header-menu");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("showhidemenu");
  menuBtn.classList.toggle("open");
});
