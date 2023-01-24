const container = document.querySelector('.container');
const rainbow = document.querySelector('#rainbow');
const erase = document.querySelector('#erase');
let color = 'black';

const getRainbowColor = () => {
    const randomNum1 = Math.random() * 255;
    const randomNum2 = Math.random() * 255;
    const randomNum3 = Math.random() * 255;
    return `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
};

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style = "border: 1px solid black; height: 25px; width: 25px"; 
    container.appendChild(div);
    div.addEventListener('mouseover', function(e) {
        const hoverColor = color === 'rainbow' 
            ? getRainbowColor() 
            : color;
        this.style.backgroundColor = hoverColor;
    });
  }

  erase.addEventListener('click', () => {
        color = 'white';
  });

  rainbow.addEventListener('click', () => {
        color = 'rainbow';
  })



