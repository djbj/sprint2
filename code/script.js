document.links.forEach = Array.prototype.forEach; // behovs inte?

// Lägg alla luckor i en array
const lolLinks = document.querySelectorAll('a.imageback')

lolLinks.forEach(function (element) {
  const today = new Date()
  if (element.id > 9) {
    element.href = "#"
    // klass open
  }
  else {

    const boxen = element.parentElement.querySelector('.imagebox');

    boxen.addEventListener("click", function() {
      this.classList.add("open");
  });
  }
});
