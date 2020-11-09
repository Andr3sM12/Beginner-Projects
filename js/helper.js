// generar numero al azar
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

// obtener distancia entre dos puntos
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return and string depending on the distances
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Hirviendo";
    } else if (distance < 40) {
        return "Muy Caliente";
    } else if (distance < 60) {
        return "Caliente!";
    } else if (distance < 100) {
        return "Tibio";
    } else if (distance < 180) {
        return "Frio";
    } else if (distance < 360) {
        return "Muy Frio";
    } else {
        return "Congelado!";
    }
}





