"use strict";

//Animation balls:
const ball = document.getElementById('logo');
let leftPos = 0;
let upDownPos = 0;
let dir = -1;
let current_rotation = 0; 

ball.style.position = "absolute";

function ballAnimate1 () {

    if (leftPos == 1700) {
        dir = 1
    } else if 
        (leftPos == 1000) {
        dir = -1
    }
    
    leftPos += -2 * dir;
    current_rotation += 1;
    

    ball.style.left = `${leftPos}px`;
    ball.style.transform = 'rotate('  + current_rotation + 'deg)';

    requestAnimationFrame(ballAnimate1);
};

requestAnimationFrame(ballAnimate1);