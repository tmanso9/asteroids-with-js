import { Circle } from './circle.js'

export class Asteroid extends Circle {
	constructor({ position, velocity, ctx, radius }) {
		super({ position, velocity, ctx })
		this.radius = radius
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

		this.ctx.strokeStyle = this.color
		this.ctx.stroke()
	}
}
