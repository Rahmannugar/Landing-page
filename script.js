const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navMenu = document.getElementById("nav-menu");
const tags = document.querySelectorAll(".tag");
bar.addEventListener("click", () => {
  bar.style.display = "none";
  close.style.display = "flex";
  navMenu.style.display = "flex";
});
close.addEventListener("click", () => {
  bar.style.display = "flex";
  close.style.display = "none";
  navMenu.style.display = "none";
});

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    if (window.screen.width < 640) {
      navMenu.style.display = "none";
    }
    bar.style.display = "flex";
    close.style.display = "none";
  });
});
