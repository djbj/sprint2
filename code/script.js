document.links.forEach = Array.prototype.forEach; // behovs inte?

// Lägg alla luckor i en array
const lolLinks = document.querySelectorAll("a.imageback")
const linkLinks = document.querySelectorAll("imagebox")



lolLinks.forEach(function (element) {
    const today = new Date()
    const boxen = element.parentElement.querySelector('.imagebox')

      if (element.id > 9) {
        // klass open
        console.log("if1")
        boxen.addEventListener("click", function() {
          window.open("fusk/fusk.html");
        })
      } else if (element.id === "9") {
        console.log("if2")
        boxen.addEventListener("click", function() {
          this.classList.add("open")

        })
      } else if (element.id < 9) {
        console.log("if3")

        boxen.classList.add("open")


      // console.log(boxen)
      // console.log(boxen.typeof)

      // lolLinks.forEach( function (element) {
      //   const boxen = element.parentElement.querySelector('.imagebox')
      //   boxen.classList.add("open")
      //   }
      // )

    }

  }
)


// console.log(classList)
// this.classList.add("open");


// console.log(boxen)

// window.onload = console.log("hello");

// document.links.forEach = Array.prototype.forEach; // behovs inte?
//
// // Lägg alla luckor i en array
// const lolLinks = document.querySelectorAll("a.imageback")
//
// lolLinks.forEach(function (element) {
//     const today = new Date()
//
//       if (element.id > 9) {
//         element.href = "#"
//         // klass open
//
//       } else if (element.id === 9) {
//         const boxen = element.parentElement.querySelector('.imagebox')
//         boxen.addEventListener("click", function() {
//           this.classList.add("open")
//       })
//     } else {
//       lolLinks.forEach( function (element) {
//         const boxen = element.parentElement.querySelector('.imagebox')
//         boxen.classList.add("open")
//         }
//       )
//     }
//
//   }
// )
