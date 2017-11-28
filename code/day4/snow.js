window.onload = function(){

      //get the canvas and context and store in variables
      let canvas = document.getElementById("sky")
      let ctx = canvas.getContext("2d")

      //set canvas dims to window width and height
      let W = window.innerWidth
      let H = window.innerHeight
      canvas.width = W
      canvas.height = H

      //generate the snowflakes and apply attributes
      let mf = 100 //max number of snowflakes
      let flakes = [] //an empty array, we will add info below

      //loop through the empty flakes and apply attributes
      for(let i = 0; i < mf; i++)
      {
          flakes.push({
            x: Math.random()*W,
            y: Math.random()*H,
            r: Math.random()*5+2, //radius - min of 2px and max of 7px
            d: Math.random() + 1 //density of the flake
          })
      }

      //draw flakes onto canvas
      function drawFlakes()
      {
        ctx.clearRect(0, 0, W, H) //Clear the canvas
        ctx.fillStyle = "white"
        ctx.beginPath()
        for(let i = 0; i < mf; i++) //a loop going throught the flakes and drawing them on the canvas.
        {
            let f = flakes[i]
            ctx.moveTo(f.x, f.y)
            ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true) //draw and full circle, true means clockwise.
        }
        ctx.fill()
        moveFlakes()
      }

      //Animate the flakes
      let angle = 0

      function moveFlakes() {
        angle += 0.01 //controls the left and right movement of the flake
        for(let i = 0; i < mf; i++)
        {
          //store current flake
          let f = flakes[i]

          //update X and Y coordinates of each snowflake
          f.y += Math.pow(f.d, 2) + 1 //squaring the density
          f.x += Math.sin(angle) * 2 //movement of the falling flake

          //if the snowflake reaches the bottom, send a new one to the top
          if(f.y > H){
            flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d}

          }
        }
      }
      setInterval(drawFlakes, 25)
}
