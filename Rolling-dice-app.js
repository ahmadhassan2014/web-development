var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stopped = false;


function change() {
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}


function stopStart() {
    if (stopped == false) {
        stopped = true;
        interval = setInterval(change, 0.5);
    } else {
         clearInterval(interval);
         stopped = false;
    }
}


window.onload = function() {
    dice = document.getElementById("dice");
    stopStart();
}

