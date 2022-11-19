// ------ fonction timer + style ---------

let getTime = document.getElementById('time');
    getTime.style.margin = "10rem";
    getTime.style.fontSize = "3rem";

let sec = 60;

let timer = setInterval(function (){
    getTime.innerText = sec;
    sec = sec -1;
    if(sec === 0) {
        getTime.innerText = "Compte à rebours terminé !";
        clearInterval(timer)
    }

    // -- style --

    if(sec%2 == 0) {
        getTime.style.animationName = "color";
        getTime.style.animationDuration = "1s";
        getTime.style.color = "cornflowerblue";
    }
    else {
        getTime.style.animationName = "color";
        getTime.style.animationDuration = "1s";
        getTime.style.color = "red";
    }
},1000)

