const defaultPixelSize = 16;

const container = document.querySelector('.container');
const rainbow = document.querySelector('#rainbow');
const erase = document.querySelector('#erase');
const resize = document.querySelector('#resize');
const clear = document.querySelector('#clear');
let color = 'black';

fillGrid(defaultPixelSize);

const getRainbowColor = () => {
    const randomNum1 = Math.random() * 255;
    const randomNum2 = Math.random() * 255;
    const randomNum3 = Math.random() * 255;
    return `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
};

function fillGrid(pixelSize) {
    const grid = pixelSize * pixelSize;
    for (let i = 0; i < grid; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.className = 'square';
        div.addEventListener('mouseover', function(e) {
            const hoverColor = color === 'rainbow' 
                ? getRainbowColor() 
                : color;
            this.style.backgroundColor = hoverColor;
        });
    }

    container.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${pixelSize}, 1fr)`;
}

  erase.addEventListener('click', () => {
        color = 'white';
  });

  rainbow.addEventListener('click', () => {
        color = 'rainbow';
  });

  resize.addEventListener('click', () => {
        let pixelSize = prompt('How many squares per side? (Maxiumum 100)');

        if (pixelSize < 1 || pixelSize > 100) {
            alert('Please enter a value between 1 and 100.');
        }
        else {
            container.innerHTML = "";
            fillGrid(pixelSize);
            container.style.gridTemplateRows = `repeat(${pixelSize}, 1fr)`;
            container.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
        }
    });

  clear.addEventListener('click', clearGrid);
        
function clearGrid () {
    for(let i = 0; i < container.children.length; i++){
        container.children[i].style.backgroundColor = "white";
    }
};