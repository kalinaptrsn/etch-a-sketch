const container = document.querySelector('.container');
const rainbow = document.querySelector('#rainbow');
const erase = document.querySelector('#erase');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px"; 
    container.appendChild(div);
    div.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = 'black';
    });
  }

  
