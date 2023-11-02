const canvas = document.querySelector('#myCanvas')

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

class Player {
	constructor({ position, velocity, color }) {
		this.position = position
		this.velocity = velocity
		this.color = color
	}

	draw() {
		// // Check center with a circle
		// ctx.arc(this.position.x, this.position.y, 3, 0, Math.PI * 2)
		// ctx.fillStyle = 'red'
		// ctx.fill()

		ctx.moveTo(this.position.x + 30, this.position.y)
		ctx.lineTo(this.position.x - 10, this.position.y - 10)
		ctx.lineTo(this.position.x - 10, this.position.y + 10)
		ctx.closePath()

		ctx.strokeStyle = this.color
		ctx.stroke()
	}
}

const player = new Player({
	position: { x: canvas.width / 2, y: canvas.height / 2 },
	velocity: { x: 0, y: 0 },
	color: 'white'
})

player.draw()