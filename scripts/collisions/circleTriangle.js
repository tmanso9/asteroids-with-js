import { isPointOnLineSegment } from "./utils.js"

const circleTriangleCollision = (circle, triangle) => {
	for (let i = 0; i < 3; i++) {
		const start = triangle[i]
		const end = triangle[(i + 1) % 3]

		let dx = end.x - start.x
		let dy = end.y - start.y
		const length = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))

		const dot =
			((circle.position.x - start.x) * dx +
				(circle.position.y - start.y) * dy) /
			Math.pow(length, 2)
		
		let closestX = start.x + dot * dx
		let closestY = start.y + dot * dy

		if (!isPointOnLineSegment(closestX, closestY, start, end)) {
			closestX = closestX < start.x ? start.x : end.x
			closestY = closestY < start.y ? start.y : end.y
		}

		dx = closestX - circle.position.x
		dy = closestY - circle.position.y

		const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))

		return distance <= circle.radius
	}
}

export { circleTriangleCollision }
