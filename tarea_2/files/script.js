const canvas = document.getElementById('lienso');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here
function draw_hastaelpincho(){

    ctx.clearRect(0, 0, 480, 320);

    ctx.fillStyle = color;

    ctx.fillRect(x, y, width, height);

    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 90, 65);

}
draw_hastaelpincho()
// Don't edit the code below here!

const section = document.querySelector('section');