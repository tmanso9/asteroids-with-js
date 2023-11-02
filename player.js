export class Player {
	constructor({ ctx, position, velocity, color }) {
		/** @type {CanvasRenderingContext2D} */
		this.ctx = ctx
		this.position = position
		this.velocity = velocity
		this.color = color
	}

	draw() {
		// // Check center with a circle
		// this.ctx.arc(this.position.x, this.position.y, 3, 0, Math.PI * 2)
		// this.ctx.fillStyle = 'red'
		// this.ctx.fill()

		this.ctx.beginPath()
		this.ctx.moveTo(this.position.x + 30, this.position.y)
		this.ctx.lineTo(this.position.x - 10, this.position.y - 10)
		this.ctx.lineTo(this.position.x - 10, this.position.y + 10)
		this.ctx.closePath()

		this.ctx.strokeStyle = this.color
		this.ctx.stroke()
	}

	update() {
		this.draw()
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
}