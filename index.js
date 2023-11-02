import { Player } from './player.js'

// Set canvas and context variables
const canvas = document.querySelector('#myCanvas')
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

// Set canvas width, height and background color
canvas.width = window.innerWidth
canvas.height = window.innerHeight

function drawBackground(){
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, canvas.width, canvas.height)
}

drawBackground()

// Initialize player
const player = new Player({
	ctx,
	position: { x: canvas.width / 2, y: canvas.height / 2 },
	velocity: { x: 0, y: 0 },
	color: 'white'
})

// Draw player
player.draw()

const keys = {
	a: {
		pressed: false
	},
	w: {
		pressed: false
	},
	d: {
		pressed: false
	}
}

const animate = () => {
	window.requestAnimationFrame(animate)
	drawBackground()
	player.update()

	player.velocity.x = 0
	player.velocity.y = 0
	
	if (keys.w.pressed) player.velocity.x = 1
	if (keys.d.pressed) player.velocity.y = 1
	if (keys.a.pressed) player.velocity.y = -1

}

animate()

window.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'KeyA':
			keys.a.pressed = true
			break
		case 'KeyD':
			keys.d.pressed = true
			break
		case 'KeyW':
			keys.w.pressed = true
			break
	}
})

window.addEventListener('keyup', (e) => {
	switch (e.code) {
		case 'KeyA':
			keys.a.pressed = false
			break
		case 'KeyD':
			keys.d.pressed = false
			break
		case 'KeyW':
			keys.w.pressed = false
			break
	}
})
