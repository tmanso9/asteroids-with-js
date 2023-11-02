import { Player } from './player.js'

// Set canvas and context variables
const canvas = document.querySelector('#myCanvas')
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

// Set canvas width, height and background color
canvas.width = window.innerWidth
canvas.height = window.innerHeight

function drawBackground() {
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
	s: {
		pressed: false
	},
	d: {
		pressed: false
	}
}

const SPEED = 2
const ROTATION_SPEED = 0.03
const FRICTION = 0.98

const animate = () => {
	window.requestAnimationFrame(animate)
	drawBackground()
	player.update()

	if (keys.w.pressed) {
		player.velocity.x = Math.cos(player.rotation) * SPEED
		player.velocity.y = Math.sin(player.rotation) * SPEED
	} else {
		player.velocity.x *= FRICTION
		player.velocity.y *= FRICTION
	}
	if (keys.s.pressed) {
		player.velocity.x = -Math.cos(player.rotation) * SPEED
		player.velocity.y = -Math.sin(player.rotation) * SPEED
	} else {
		player.velocity.x *= FRICTION
		player.velocity.y *= FRICTION
	}
	if (keys.d.pressed) player.rotation += ROTATION_SPEED
	if (keys.a.pressed) player.rotation -= ROTATION_SPEED
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
		case 'KeyS':
			keys.s.pressed = true
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
		case 'KeyS':
			keys.s.pressed = false
			break
	}
})
