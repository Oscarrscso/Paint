const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  

  const drawBox = (x, y) =>
  {

    let randomRed = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);

    let randomSize = Math.floor(Math.random() * 50);

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`;
    ctx.fillRect(x, y, randomSize, randomSize);
    
  }


  canvas.addEventListener('click', (e) => {
    drawBox(e.clientX, e.clientY);
  });
  