// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika di klik

document.querySelector("#semenmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const semenleven = document.querySelector("#semenleven");

document.addEventListener("click", function (e) {
  if (!semenleven.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
