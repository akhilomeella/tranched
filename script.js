const navBar = document.querySelector(".navBar");
const sticky = navBar.scrollHeight;

function stickyScroll() {
  if (window.scrollY >= sticky) {
    navBar.classList.add("stickyNav");
  } else {
    navBar.classList.remove("stickyNav");
  }
}

window.addEventListener("scroll", stickyScroll);
