const canvas = document.getElementById("gameView")
const ctx = canvas.getContext('2d')

const width=1920
const height=1080

function clear() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, width, height)
}


function draw(ball) {
    ctx.beginPath()
    ctx.ellipse(ball.x, ball.y, 10, 10, 0, 0, 2*Math.PI)
    ctx.closePath()
    ctx.fillStyle = 'white'
    ctx.fill()
}

const ball = {
    x: width/2,
    y: height/2,
    vx: 10,
    vy: 10
}

function update(ball) {
    ball.x += ball.vx
    ball.y += ball.vy
    if(ball.x > width || ball.x < 0)
        ball.vx = -ball.vx
    if(ball.y > height || ball.y < 0)
    ball.vy = -ball.vy
}

function frame() {
    clear()
    update(ball)
    draw(ball)
    requestAnimationFrame(frame)
}

requestAnimationFrame(frame)
