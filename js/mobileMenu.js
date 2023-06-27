const aside = document.querySelector("aside");
const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener("click", () => {
  aside.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});
