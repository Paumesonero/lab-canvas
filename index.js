const canvas = document.getElementById('practice')
const ctx = canvas.getContext('2d');

// images position
// const sun = {
//     x: 50,
//     y: 50,
//     width: 200,
//     height: 200
// }

const sea = {
    x: 0,
    y: 500,
    width: 1000,
    height: 200
}

const boat = {
    x: 100,
    y: 350,
    width: 200,
    height: 250
}

const cloud = [
    {
        x: 50,
        y: 180,
        width: 200,
        height: 100
    },
    {
        x: 200,
        y: 280,
        width: 200,
        height: 80
    },
    {
        x: 300,
        y: 400,
        width: 200,
        height: 80
    },
    {
        x: 400,
        y: 150,
        width: 200,
        height: 80
    }
]

// images
// const sunImg = new Image();
// sunImg.src = 'img/sol.png';

const seaImg = new Image();
seaImg.src = 'img/sea.png';

const boatImg = new Image();
boatImg.src = 'img/boat.png'

const cloudImg = new Image();
cloudImg.src = 'img/cloud.png'





window.onload = function () {
    // ctx.drawImage(sunImg, sun.x, sun.y, sun.width, sun.height)
    ctx.drawImage(seaImg, sea.x, sea.y, sea.width, sea.height)
    ctx.drawImage(boatImg, boat.x, boat.y, boat.width, boat.height)
    cloud.forEach(el => {
        ctx.drawImage(cloudImg, el.x, el.y, el.width, el.height)
    })
}

//Boat moving function

function moveBoat() {
    ctx.clearRect(0, 0, 5000, 5000);
    boat.x = boat.x + 10;
    if (boat.x > 1000) {
        boat.x = -50;
    }
    ctx.drawImage(seaImg, sea.x, sea.y, sea.width, sea.height)
    cloud.forEach(el => {
        ctx.drawImage(cloudImg, el.x, el.y, el.width, el.height)
    })
    ctx.drawImage(boatImg, boat.x, boat.y, boat.width, boat.height)
}

//function to start movement

setTimeout(function () {
    let interval = setInterval(moveBoat, 100);
}, 1000)