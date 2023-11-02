const canvas = document.querySelector('#myCanvas')

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

