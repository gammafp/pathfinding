/* Se quedan en el objeto global para poder modular :( */
var listaAbierta = [];
var listaCerrada = [];
var mapa = [];
var vecinos = [];
var pader = {};
var destino = {};

var Estrella = function() {

	this.set = function(ini, fin, map) {
		// Set, se coloca el inicial en la lista cerrada y se asigna un padre
		// ini.padre = {x: 0, y: 0};
		listaCerrada.push(ini);
		padre = ini;
		
		
		mapa = map.slice();
		destino = fin;
	
	}
	this.mapear = function() {
		let indicePadre = 0;

		// Inicia el while y si encuentra la ruta nos ayudará a salir
		let rutaEncontrada = false;
		// Bucle para crear la lógica de análisis del algoritmo.
		while(!rutaEncontrada) {
			vecinos = comprobarVecinos(padre, mapa);
			listaAbierta = vecinos.concat(listaAbierta);
			indicePadre = obtenerMenorF();
			padre = listaAbierta[indicePadre];
			removerLista(indicePadre);

			rutaEncontrada = finalizarLogica(listaCerrada);
		}
	
		// Lista encontrada ahora solo hace falta pintarlo en el lienzo do nosso señor
		
		listaCerrada.reverse();
	
		var direccionDePadres = listaCerrada[0].padre;
		var salidaFinal = [direccionDePadres];

		for(let i = 1; i < listaCerrada.length-1; i++) {
			// Comprobamos el siguiente padre que corresponda con las sus coordenadas
			if(listaCerrada[i].x === direccionDePadres[0] && listaCerrada[i].y === direccionDePadres[1]) {
				direccionDePadres = listaCerrada[i].padre;
				salidaFinal.push(listaCerrada[i].padre);
			}
		}
	
		return salidaFinal;

	}
} // Fin de la funcion/clase padre

function removerLista(indice) {
	listaCerrada.push(listaAbierta[indice]);
	listaAbierta.splice(indice, 1);
}

function obtenerMenorF() {
	let menor = 0;
	let indiceMenor = 0;
	if(listaAbierta.length > 0) {
		menor = listaAbierta[0].F();
		for(let i = 1; i < listaAbierta.length; i++) {
			if(listaAbierta[i].F() < menor) {
				menor = listaAbierta[i].F();
				indiceMenor = i;
			}
		}
	}
	
	return indiceMenor;
}

// Herramientas
function finalizarLogica(lista) {
	for(var i = 0; i < lista.length; i++) {
		
		if(lista[i].x === final.x && lista[i].y === final.y) {
			
			return true;
		}
	}
}

function comprobarListaCerrada(caja, lista) {
	if(lista.length >= 1) {
		for(var i = 0; i < lista.length; i++) {
			if(lista[i].x === caja[0] && lista[i].y === caja[1]) {
				return false;
			}
		}

	}
	return true;
}

// Comprobador de lista abierta
function comprobarListaAbierta(caja, lista) {

	if(lista.length >= 1) {
		for(var i = 0; i < lista.length; i++) {
			if(lista[i].x === caja[0] && lista[i].y === caja[1]) {
				return {status: true, indice: i};
			}
		}

	}
	return {status: false};
}