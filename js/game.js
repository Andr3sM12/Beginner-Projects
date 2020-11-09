// import {
    // getRandomNumber,
    //getDistance,
    //getDistanceHint
    //} from './helper';


// coordenadas del tesoro
const WIDTH = 400;
const HEIGH = 400;

let target = {
    
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

// click handler
let $map = document.getElementById ('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
console.log('click');
clicks++;
let distance = getDistance(e, target)
let distanceHint = getDistanceHint(distance);
console.log(distanceHint)
$distance.innerHTML = `<h1>${distanceHint}</h1>`;


if (distance < 20) {
    alert(`Encontraste el tesoro en ${clicks} clicks! Felicidades`);
    location.reload();
}

});
