export class Circle {
	constructor({ position, velocity, ctx }) {
		this.position = position
		this.velocity = velocity
		this.color = 'blue'
		this.radius = 10
		/** @type {CanvasRenderingContext2D} */
		this.ctx = ctx
	}

	draw() {
		this.ctx.beginPath()
		this.ctx.arc(
			this.position.x,
			this.position.y,
			this.radius,
			0,
			Math.PI * 2
		)
		this.ctx.closePath()

		this.ctx.fillStyle = this.color
		this.ctx.fill()
	}

	update() {
		this.draw()
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
}