const mover = document.querySelector('.mover')
const body = document.body

let width = body.clientWidth
let height = body.clientHeight
let x = 0
let y = 0
let leftMovement = false
let downMove = false
let speed = randomMove(2)
let timer = null

setInterval(() => {
    // console.log("new cycle")
    console.log(speed)
    timer = setInterval(() => {
        // console.log(mover.style.left)
        width = body.clientWidth
        height = body.clientHeight

        if (x + 150 > width && !leftMovement) {
            leftMovement = true
        } else if (leftMovement && x < 0) {
            leftMovement = false
        }

        if (leftMovement) {
            x -= 10 + randomMove(3)
        } else {
            x += 10 + randomMove(3)
        }



        if (y + 150 > height && !downMove) {
            downMove = true
        } else if (downMove && y < 0) {
            downMove = false
        }

        if (downMove) {
            y -= 10 + randomMove(3)
        } else {
            y += 10 + randomMove(3)
        }

        downMove = randomDirection()
        leftMovement = randomDirection()

        mover.style.left = x + 'px'
        mover.style.top = y + 'px'
    }, speed)

    setTimeout(() => {
        clearInterval(timer);
        console.log("Cleared")
    }, 190)
    speed = randomMove(100) / 2
}, 200)

function randomMove(val) {
    return Math.floor(Math.random() * val) + 1;
}

function randomDirection() {
    if (randomMove(2) - 1) {
        return true;
    }
    else {
        return false;
    }
}