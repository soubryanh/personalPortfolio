let nav = document.querySelector("nav");

// OPEN
document.querySelector(".open").addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});
// Close
document.querySelector(".close").addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});
