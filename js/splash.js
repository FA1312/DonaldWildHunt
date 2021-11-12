const splash = document.querySelector(".splash");
const mySound = new Audio("./sounds/johncena.mp3");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
    mySound.play();
  }, 4500);
});
