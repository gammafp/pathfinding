
function update() {
	ctx.clearRect(0, 0, tamano * filas, tamano * columnas);
	drawGrid();
	PintarMapaObstaculos();
	drawPlayer(final, "darkorange");
	drawPlayer(inicial, "blue");
	window.requestAnimationFrame(update);
}

