import { Circle } from './circle.js'

export class Projectile extends Circle {
	constructor({ position, velocity, ctx }) {
		super({ position, velocity, ctx })
		this.color = 'white'
		this.radius = 3
	}
}
