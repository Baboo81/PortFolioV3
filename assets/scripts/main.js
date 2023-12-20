"use strict";

//Animation balls:
const ball = document.getElementById('logo');
let leftPos = 0;
let upDownPos = 0;
let dir = -1;
let current_rotation = 0; 

ball.style.position = "absolute";

function ballAnimate1 () {

    if (leftPos == 100) {
        dir = 1
    } else if 
        (leftPos == -100) {
        dir = -1
    }
    
    leftPos += -2 * dir;
    current_rotation += 1;
    

    ball.style.right = `${leftPos}px`;
    ball.style.transform = 'rotate('  + current_rotation + 'deg)';

    requestAnimationFrame(ballAnimate1);
};

requestAnimationFrame(ballAnimate1);

//Footer map:

//Create map:
const centroid = [50.71036, 4.36889];
const map = L.map('mapid').setView(centroid, 16.4);

//Add tiles & marker:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([50.71036, 4.36889]).addTo(map);