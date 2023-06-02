const modal = document.getElementById("splash__container")

setTimeout(() => {
  modal.style.opacity = 0;
  modal.classList.add("hidden")
}, 3000)
setTimeout(() => {
  modal.style.display = 'none';
}, 3100)
