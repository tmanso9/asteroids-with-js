const circleCollision = (circle1, circle2) => {
	const deltaX = circle2.position.x - circle1.position.x
	const deltaY = circle2.position.y - circle1.position.y

	const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))

	if (distance <= circle1.radius + circle2.radius) {
		return true
	}
	return false
}

export { circleCollision }
