/*jshint esnext: true */
const html = document.querySelector("html");
const toggler = document.querySelector("#toggler");

toggler.addEventListener("click",() => {
  html.classList.toggle("dark");
});
