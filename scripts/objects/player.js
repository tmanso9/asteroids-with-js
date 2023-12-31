export class Player {
	constructor({ ctx, position, velocity, color }) {
		/** @type {CanvasRenderingContext2D} */
		this.ctx = ctx
		this.position = position
		this.velocity = velocity
		this.color = color
		this.rotation = 0
	}

	draw() {
		this.ctx.save()

		// // Check center with a circle
		// this.ctx.beginPath()
		// this.ctx.arc(this.position.x, this.position.y, 3, 0, Math.PI * 2)
		// this.ctx.fillStyle = 'red'
		// this.ctx.fill()
		// this.ctx.closePath()

		this.ctx.translate(this.position.x, this.position.y)
		this.ctx.rotate(this.rotation)
		this.ctx.translate(-this.position.x, -this.position.y)

		this.ctx.beginPath()
		this.ctx.moveTo(this.position.x + 30, this.position.y)
		this.ctx.lineTo(this.position.x - 10, this.position.y - 10)
		this.ctx.lineTo(this.position.x - 10, this.position.y + 10)
		this.ctx.closePath()

		this.ctx.strokeStyle = this.color
		this.ctx.stroke()

		this.ctx.restore()
	}

	update() {
		this.draw()
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}

	getVertices() {
		const cos = Math.cos(this.rotation)
		const sin = Math.sin(this.rotation)

		return [
			{
				x: this.position.x + cos * 30 - sin * 0,
				y: this.position.y + sin * 30 + cos * 0
			},
			{
				x: this.position.x + cos * -10 - sin * 10,
				y: this.position.y + sin * -10 + cos * 10
			},
			{
				x: this.position.x + cos * -10 - sin * -10,
				y: this.position.y + sin * -10 + cos * -10
			}
		]
	}
}
