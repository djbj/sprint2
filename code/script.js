document.links.forEach = Array.prototype.forEach;
document.links.forEach(function (element) {
  const today = new Date()
  if (element.id < today.getDate()) {
    element.href = "./fusk/fusk.html";
  }
  else {
  const boxen = element.parentElement.querySelector('.imagebox');
  boxen.addEventListener("click", function() {
  this.classList.add("open");
  });
  }
});
