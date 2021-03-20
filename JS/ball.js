const canvas = document.getElementById('first-canvas')
const ctx = canvas.getContext('2d')

const cWidth = 500
const cHeight = 500

const bImg = new Image()
bImg.src = './images/ball.jpg'

const bWidth = 100
const bHeight = 100

bImg.onload = () => {
  ctx.drawImage(bImg, 150, 150, bWidth, bHeight)
}

let currX = 150
let currY = 150

// initial speed
let bSpeed = 0
let rotationSpeed = 0.3
let rotationDegs = 0

// acceleration
let a = 1
let initialSpeed = 0
// time
let time = 0

// direction down
let d = -1

const MIN_TOP_POS = 150
const MAX_BOTTOM_POS = cHeight - bHeight

const render = () => {
  ctx.clearRect(0, 0, cWidth, cHeight)
  time += delay
  bSpeed = initialSpeed + d * a * (time / 1000)
  const shift = d * bSpeed * delay
  currY += shift

  rotationDegs += shift * rotationSpeed
  // bottom
  if (currY >= MAX_BOTTOM_POS) {
    currY = MAX_BOTTOM_POS - shift
    d = 1
    initialSpeed = bSpeed
    time = 0
  } else if (currY <= MIN_TOP_POS) {
    currY = MIN_TOP_POS
    d = -1
    initialSpeed = 0
    time = 0
  }
  
  ctx.save()
  // move to the center of the ball
  ctx.translate(currX + bWidth / 2, currY + bHeight / 2)
  // rotate the canvas to the specified degrees
  ctx.rotate(rotationDegs * Math.PI / 180)
  // since the context is rotated, the image will be rotated also
  ctx.drawImage(bImg, -bWidth / 2, -bHeight / 2, bWidth, bHeight)
  ctx.restore()
}

const delay = 16
setInterval(render, delay)
  
