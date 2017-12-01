document.links.forEach = Array.prototype.forEach; // behovs inte?
// today.getDate()
// Lägg alla luckor i en array
const lolLinks = document.querySelectorAll("a.imageback")
const linkLinks = document.querySelectorAll("imagebox")

lolLinks.forEach(function (element) {
    const today = new Date()
    const boxen = element.parentElement.querySelector('.imagebox')

      if (element.id > 10) {
        boxen.addEventListener("click", function() {
        window.open("fusk/fusk.html");
        })
      } else if (element.id === "10"){
        boxen.addEventListener("click", function() {
        this.classList.add("open")
        })
      } else if (element.id < 10) {
        boxen.classList.add("open")
    }
  }
)
