function drawGrid() {
    // generar el lienzo
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.rect(i*tamano, j*tamano, tamano, tamano);
            ctx.stroke();
        }
    }
}

function drawPlayer(jugador, color) {
    ctx.fillStyle = color;
    ctx.fillRect(jugador.x*tamano, jugador.y*tamano, tamano, tamano);
}

function PintarMapaObstaculos() {
    for (var x = 0; x < lienzo.length; x++) {
        for (var y = 0; y < lienzo[x].length; y++) {
            if(lienzo[x][y] === 1) {
                ctx.fillStyle = "black";
                ctx.fillRect(x*tamano, y*tamano, tamano, tamano);
            } 
        }
    }
}