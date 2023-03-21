var canvas = document.getElementById('canvas1')
var c = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)
var gravity = 0.2

class Sprite {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lastkey = lastkey
        


    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height);
        

    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity

    }

}

var player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 5
    }
});
player.draw()

var enemy = new Sprite({
    position: {
        x: 200,
        y: 200
    },
    velocity: {
        x: 0,
        y: 0
    }
});
enemy.draw()
//đặt trước để được định nghĩa
var keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }

}
var lastkey

function animate() {

    window.requestAnimationFrame(animate)

    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    enemy.velocity.x = 0

    if (keys.a.pressed && player.lastkey === 'a') {
        player.velocity.x = -2
    } else if (keys.d.pressed && player.lastkey === 'd') {
        player.velocity.x = 2
    }

    //enemy
    if (keys.ArrowLeft.pressed && enemy.lastkey === 'ArrowLeft') {
        enemy.velocity.x = -2
    } else if (keys.ArrowRight.pressed && enemy.lastkey === 'ArrowRight') {
        enemy.velocity.x = 2
    }
}
animate()



// move
window.addEventListener('keydown', (e) => {
    console.log(e.key)
    switch (e.key) {
        case 'd':
            // player.velocity.x = 2
            keys.d.pressed = true
            player.lastkey = 'd'
            break;
        case 'a':
            // player.velocity.x = -2
            keys.a.pressed = true
            player.lastkey = 'a'
            break;
        case 'w':
            player.velocity.y = -10
            // player.velocity.x = -2
            // keys.w.pressed = true
            // lastkey = 'w'
            break;

        // enemy keys
        case 'ArrowRight':
            // player.velocity.x = 2
            keys.ArrowRight.pressed = true
            enemy.lastkey = 'ArrowRight'
            break;
        case 'ArrowLeft':
            // player.velocity.x = -2
            keys.ArrowLeft.pressed = true
            enemy.lastkey = 'ArrowLeft'
            break;
        case 'ArrowUp':
            enemy.velocity.y = -10
            // player.velocity.x = -2
            // keys.w.pressed = true
            // lastkey = 'w'
            break;




    }
});
window.addEventListener('keyup', (e) => {
    // console.log(e.key)
    switch (e.key) {
        case 'd':
            // player.velocity.x = 0
            keys.d.pressed = false
            break;
        case 'a':
            // player.velocity.x = 0
            keys.a.pressed = false
            break;
        case 'w':
            // player.velocity.x = -2
            // keys.w.pressed = true
            // lastkey = 'w'
            break;

        // enemy keys
        case 'ArrowRight':
            // player.velocity.x = 2
            keys.ArrowRight.pressed = false
            lastkey = 'ArrowRight'
            break;
        case 'ArrowLeft':
            // player.velocity.x = -2
            keys.ArrowLeft.pressed = false
            lastkey = 'ArrowLeft'
            break;
        case 'ArrowUp':
            enemy.velocity.y = -0
            // player.velocity.x = -2
            // keys.w.pressed = true
            // lastkey = 'w'
            break;



    }
})

