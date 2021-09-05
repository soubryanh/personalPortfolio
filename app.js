let nav = document.querySelector("nav");

// OPEN
document.querySelector(".open").addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});
// Close
document.querySelector(".close").addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

// Tab Layout
const changeTab = (e, id) => {
  let tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("jobcard");
  for (let index = 0; index < tabcontent.length; index++) {
    tabcontent[index].classList.remove("active");
  }

  tablinks = document.getElementsByClassName("tab-title");
  for (let index = 0; index < tablinks.length; index++) {
    tablinks[index].classList.remove("active");
  }

  e.currentTarget.classList.add("active");
  document.getElementById(id).classList.add("active");
};
