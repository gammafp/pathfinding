function mover(x) {
    switch(x) {
        // Izquierda
        case 1: inicial.x -= 1;
        break;
        // Arriba
        case 2: inicial.y -= 1;
        break;
        // Derecha
        case 3: inicial.x += 1;
        break;
        case 4: inicial.y += 1;
        break;
    }
}