var filas = 30; // Y
var columnas = 30; // X
var tamano = 15; // px
var lienzo = new Array(filas);
var ctx;
var teclado = null;
var canvas;

var inicial = {
    x: 0,
    y: 2
};
var final = {
    // x: filas-1,
    // y: columnas-1,
    x: 29,
    y: 29
}
var ruta = [];
var A_estrella = new Estrella();


function setup() {
    console.log("Cargado pathfinding GAMMAFP");
    canvas = document.getElementById("canvas");
    canvas.width = filas * tamano;
    canvas.height = columnas * tamano;

    canvas.addEventListener("click", (e) => {
        Click(e, canvas)
    }, false);

    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, tamano * filas, tamano * columnas);

    // generar el lienzo
    for (var i = 0; i < filas; i++) {
        lienzo[i] = new Array(columnas);
        for (var j = 0; j < columnas; j++) {
            lienzo[i][j] = 0;
        }
    }

    // Poner muros
    lienzo = mapaOriginal;
    lienzo = (localStorage.getItem("lienzo") != null) ? JSON.parse(localStorage.getItem("lienzo")) : lienzo;


    // Iniciar la busqueda do carallo
    Busqueda();
    // carga el udpate
    update();
}

function Busqueda() {
    A_estrella.set(inicial, final, lienzo);
    ruta = A_estrella.mapear();
    ruta.reverse();

    var tiempoRecorrido = 0;
    var tiempo = setInterval(() => {

        if (tiempoRecorrido >= ruta.length - 1) {
            clearInterval(tiempo);
        }
        inicial.x = ruta[tiempoRecorrido][0];
        inicial.y = ruta[tiempoRecorrido][1];

        tiempoRecorrido++;
    }, 100);

}

function resetearMapa() {
     localStorage.clear();
     location.reload();
}

function limpiarMapa() {
    let lienzoLimpio = [];
    for(let x = 0; x < columnas; x++) {
        lienzoLimpio[x] = [];
        for(let y = 0; y < filas; y++) {
            lienzoLimpio[x][y] = 0;
        }
    }
    localStorage.setItem("lienzo", JSON.stringify(lienzoLimpio));
    location.reload();

}

window.addEventListener("load", setup, false);