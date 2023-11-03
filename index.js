import { Player } from './scripts/player.js'
import { Projectile } from './scripts/projectile.js'

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

const projectiles = []

const SPEED = 2
const ROTATION_SPEED = 0.03
const PROJECTILE_SPEED = SPEED * 1.2
const FRICTION = 0.98

const animate = () => {
	window.requestAnimationFrame(animate)
	drawBackground()
	player.update()

	for (let i = projectiles.length - 1; i >= 0; i--) {
		const projectile = projectiles[i]
		projectile.update()

		/*
		The code block is checking if a projectile is outside the canvas boundaries
		and deleting it from the projectiles array.
		*/
		if (
			projectile.position.x + projectile.radius < 0 ||
			projectile.position.x - projectile.radius > canvas.width ||
			projectile.position.y - projectile.radius > canvas.height ||
			projectile.position.y + projectile.radius < 0
		) {
			projectiles.splice(i, 1)
		}
	}

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
		case 'Space':
			projectiles.push(
				new Projectile({
					position: {
						x: player.position.x + Math.cos(player.rotation) * 30,
						y: player.position.y + Math.sin(player.rotation) * 30
					},
					velocity: {
						x: Math.cos(player.rotation) * PROJECTILE_SPEED,
						y: Math.sin(player.rotation) * PROJECTILE_SPEED
					},
					ctx
				})
			)
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
