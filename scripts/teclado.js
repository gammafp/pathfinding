document.addEventListener('keydown', function (evt) { 
    teclado = evt.which; 
    if(teclado === 37 && inicial.x > 0) {
        // console.log("izquierda");
        mover(1);
    }
    if(teclado === 38 && inicial.y > 0) {
        // console.log("Arriba");
        mover(2);
    }
    if(teclado === 39 && inicial.x < columnas-1) {
        // console.log("Derecha");
        mover(3);
    }
    if(teclado === 40 && inicial.y < filas-1) {
        // console.log("Abajo");
        mover(4);
    }
}, false);

function Click(e, canvass) {
    let pos = {
        x: Math.floor((e.clientX - canvas.offsetLeft)/tamano),
        y: Math.floor(((e.clientY - canvas.offsetTop+window.pageYOffset)/tamano) )
    }

    if(lienzo[pos.x][pos.y] === 1) {
        lienzo[pos.x][pos.y] = 0;
    } else {
        lienzo[pos.x][pos.y] = 1;
        
    }
    localStorage.setItem("lienzo", JSON.stringify(lienzo));

}