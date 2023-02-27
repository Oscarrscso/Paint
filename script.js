const canvas = document.getElementById('canvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const palleteBTNS = document.querySelectorAll('.pallete-btn');
const sizeSlider = document.getElementById('slider');
const sizeSliderText = document.getElementById('sizeSliderText');

let drawColor = 'red';
document.getElementById("red").classList.add('activeColor')
let size = 10;

const drawBox = (x, y) => 
{
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = drawColor;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2*Math.PI);
  ctx.fill();
}

let isDrawing = false;

canvas.addEventListener('mousedown', e => isDrawing = true);
canvas.addEventListener('mouseup', e => isDrawing = false);
canvas.addEventListener('mouseout', e => isDrawing = false);

canvas.addEventListener('mousemove', e => {
  if (isDrawing) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
      drawBox(x, y);
    }
  }
});

palleteBTNS.forEach(btn => {
  btn.style.backgroundColor = btn.id;
  btn.addEventListener('click', e => {
    drawColor = e.target.id;
    palleteBTNS.forEach(btn => btn.classList.remove('activeColor'));
    document.getElementById(e.target.id).classList.add('activeColor');
  });
});

sizeSlider.addEventListener('input', e => 
{
    size = e.target.value;
    sizeSliderText.innerHTML = `Size: ${e.target.value}`;
});