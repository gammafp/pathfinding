// Comprobar vecinos
function comprobarVecinos(padre, map) {
    var salida = [];
    // Considerando que será el ulitmo de la lista abierta
    var player = padre;
    // [verticales y horizontales, diagonales]
    var puntosG = [10, 200];
    var sonda = [padre.x, padre.y];
    var objeto = {};
    var comprobarLista = {};

    // Faltan agregar a los que estan en la lista blanca
    // Arriba izquierda


    // Comprueba si está dentro del lienzo
    if(sonda[0] - 1 != -1 && sonda[1] - 1 != -1) {
        // Comprueba si sepuede pasar o no
        if(map[sonda[0]-1][sonda[1]-1] != 1) {

            // comprueba que no se encuentre en la lista cerrada
            if(comprobarListaCerrada([sonda[0]-1, sonda[1]-1] , listaCerrada)) {

                /*
                    Si ya está en la lista abierta comprobar si el camino es mas eficiente.
                    Si el camino es mas eficiente entonces cambiar el padre por el padre actual, de lo contrario mantener.
                    Si no está en la lista pues calcular todo normalmente
                */
                comprobarLista = comprobarListaAbierta([sonda[0]-1, sonda[1]-1] , listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[1]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "ArribaIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1]-1,
                            G: G(player, puntosG[1]),
                            H: Heuristica([sonda[0]-1, sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }
                } else { // Esto crea un nuevo objeto y lo mete
                    salida.push({
                            tag: "ArribaIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1]-1,
                            G: G(player, puntosG[1]),
                            H: Heuristica([sonda[0]-1, sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        });
                }
            }
        }
    } 
    // Arriba centro
    if(sonda[1] - 1 != -1) {
        if(map[sonda[0]][sonda[1]-1] != 1) { 
            if(comprobarListaCerrada([sonda[0], sonda[1]-1] , listaCerrada)) {	
                
                comprobarLista = comprobarListaAbierta([sonda[0], sonda[1]-1] , listaAbierta);
                if(comprobarLista.status) {

                    if(G(player, puntosG[0]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "ArribaCentro",
                            x: sonda[0],
                            y: sonda[1]-1,
                            G: G(player, puntosG[0]),
                            H: Heuristica([sonda[0], sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }

                    
                } else {

                    salida.push(
                        {
                            tag: "ArribaCentro",
                            x: sonda[0],
                            y: sonda[1]-1,
                            G: G(player, puntosG[0]),
                            H: Heuristica([sonda[0], sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );

                }
            
            }
        }
    } 
    // Arriba derecha
    if(sonda[0] + 1 < map.length && sonda[1] - 1 != -1) {
        if(map[sonda[0]+1][sonda[1]-1] != 1) {
            if(comprobarListaCerrada([sonda[0]+1, sonda[1]-1] , listaCerrada)) {

                comprobarLista = comprobarListaAbierta([sonda[0]+1, sonda[1]-1] , listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[1]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {	
                                tag: "ArribaDerecha",
                                x: sonda[0]+1,
                                y: sonda[1]-1,
                                G: G(player, puntosG[1]),
                                H: Heuristica([sonda[0]+1, sonda[1]-1]),
                                F: function() { 
                                    return this.G + this.H 
                                },
                                padre: [sonda[0], sonda[1]]
                            };
                    }
                } else {

                    salida.push(
                        {	
                            tag: "ArribaDerecha",
                            x: sonda[0]+1,
                            y: sonda[1]-1,
                            G: G(player, puntosG[1]),
                            H: Heuristica([sonda[0]+1, sonda[1]-1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );

                }




            }
        }
    } 
    // Centro izquierda
    if(sonda[0] - 1 != -1) {
        if(map[ sonda[0]-1][sonda[1] ] != 1) {
            if(comprobarListaCerrada([sonda[0]-1, sonda[1]] , listaCerrada)) {

                comprobarLista = comprobarListaAbierta([sonda[0]-1, sonda[1]] , listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[0]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "CentroIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1],
                            G: G(player, puntosG[0]),
                            H: Heuristica([sonda[0]-1, sonda[1]]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }
                } else {
                    salida.push(
                        {
                            tag: "CentroIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1],
                            G: G(player, puntosG[0]),
                            H: Heuristica([sonda[0]-1, sonda[1]]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                
                    );
                }
                

            }
        }
    } 

    // Centro derecha
    if(sonda[0] + 1 < map.length) {
        if(map[sonda[0]+1][sonda[1]] != 1) {
            if(comprobarListaCerrada([sonda[0]+1, sonda[1]] , listaCerrada)) {

                comprobarLista = comprobarListaAbierta([sonda[0]+1, sonda[1]], listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[0]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "CentroDerecha",
                            x: sonda[0]+1,
                            y: sonda[1],
                            G: G(player, 10),
                            H: Heuristica([sonda[0]+1, sonda[1]]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }
                } else {
                    salida.push(
                        {
                            tag: "CentroDerecha",
                            x: sonda[0]+1,
                            y: sonda[1],
                            G: G(player, 10),
                            H: Heuristica([sonda[0]+1, sonda[1]]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );
                }






            }
        }
    } 

    // abajo izquierda
    if(sonda[0] - 1 != -1 && sonda[1] + 1 < map[0].length) {
        if(map[sonda[0]-1][sonda[1]+1] != 1) {
            if(comprobarListaCerrada([sonda[0]-1, sonda[1]+1] , listaCerrada)) {

                comprobarLista = comprobarListaAbierta([sonda[0]-1, sonda[1]+1], listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[1]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "AbajoIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1]+1,
                            G: G(player, puntosG[1]),
                            H: Heuristica([sonda[0]-1, sonda[1]+1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }
                } else {

                    salida.push(
                        {
                            tag: "AbajoIzquierda",
                            x: sonda[0]-1,
                            y: sonda[1]+1,
                            G: G(player, puntosG[1]),
                            H: Heuristica([sonda[0]-1, sonda[1]+1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );

                }



            }
        }
    } 

    // abajo centro
    if(sonda[1] + 1 < map[0].length) {
        if(map[sonda[0]][sonda[1]+1] != 1) {
            if(comprobarListaCerrada([sonda[0], sonda[1]+1], listaCerrada)) {
            
            comprobarLista = comprobarListaAbierta([sonda[0], sonda[1]+1], listaAbierta);
            if(comprobarLista.status) {
                if(G(player, puntosG[0]) < listaAbierta[comprobarLista.indice].G) {
                    listaAbierta[comprobarLista.indice] = {
                        tag: "AbajoCentro",
                        x: sonda[0],
                        y: sonda[1]+1,
                        G: G(player, puntosG[0]),
                        H: Heuristica([sonda[0], sonda[1]+1]),
                        F: function() { 
                            return this.G + this.H 
                        },
                        padre: [sonda[0], sonda[1]]
                    };
                }
            } else {

                salida.push(
                    {
                        tag: "AbajoCentro",
                        x: sonda[0],
                        y: sonda[1]+1,
                        G: G(player, puntosG[0]),
                        H: Heuristica([sonda[0], sonda[1]+1]),
                        F: function() { 
                            return this.G + this.H 
                        },
                        padre: [sonda[0], sonda[1]]
                    }
                );
            
            }



            }
        }
    } 

    // abajo derecha
    if(sonda[0] + 1 < map.length && sonda[1] + 1 < map[0].length) {
        if(map[sonda[0]+1][sonda[1]+1] != 1) {
            if(comprobarListaCerrada([sonda[0]+1, sonda[1]-1] , listaCerrada)) {


                comprobarLista = comprobarListaAbierta([sonda[0]+1, sonda[1]-1], listaAbierta);
                if(comprobarLista.status) {
                    if(G(player, puntosG[1]) < listaAbierta[comprobarLista.indice].G) {
                        listaAbierta[comprobarLista.indice] = {
                            tag: "AbajoDerecha",
                            x: sonda[0]+1,
                            y: sonda[1]+1,
                            G: G(player, puntosG[1]),
                            H: Heuristica([sonda[0]+1, sonda[1]+1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        };
                    }
                } else {

                    salida.push(
                        {
                            tag: "AbajoDerecha",
                            x: sonda[0]+1,
                            y: sonda[1]+1,
                            G: G(player, puntosG[1]),
                            H: Heuristica([sonda[0]+1, sonda[1]+1]),
                            F: function() { 
                                return this.G + this.H 
                            },
                            padre: [sonda[0], sonda[1]]
                        }
                    );

                }





            }
        }
    } 
    // Heuristica([1, 2]);
    return salida;
}

function G(padre, valor) {
    var salida = 0;
    if(padre.G != undefined) {
        salida = padre.G + valor; 
    } else {
        salida = valor;
    }

    return salida;
}

function Heuristica(inicio) {
    var heuristic = (Math.abs(inicio[0] - destino.x)) + (Math.abs(inicio[1] - destino.y));
    return heuristic * 10;
}