# Path Finding A*

Implementación de pathfinding A* en donde se usa heuristica para poder saber la distancia que hay entre el punto "A" al punto "B" sumado el costo que hay para ir entre un cuadro a otro.

La versión acá expuesta es solo para apredizaje del autor y no pretende ser una guía de como programar un pathfinding.

Este pathfinding está en versión de pruebas es decir que pueden ocurrir los siguientes herrores conocidos:
- Al encerrar el punto final y al no encontrar una ruta eficiente el programa deja de funcionar, para solucionarlo solobasta con "resetear el mapa" o limpiar el mapa.
- La primera vez que se carga y no se ha modificado el mapa este no se guarda en localStorage debido a eso no se puede obtener un mapa en fichero y aunque se intente descargar este será un archivo nulo.
- Cuando se carga un archivo que no contiene un mapa valido el programa posiblemente dejaráde funcionar, para solucionar el error solo basta con reiniciar el mapa.
---
Este código está abierto para que todos puedan descargarlo y editarlo.
Para probarlo pueden hacerlo clicando en el siguiente (DEMO)[]
Vista: 

![Vista](https://i.gyazo.com/9530b9ec775f45de101b9caad1b84ab1.png)


