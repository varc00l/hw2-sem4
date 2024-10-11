
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
}
  
const sliderInput = document.querySelector('.slider__input');
  const sliderImage = document.querySelector('.slider__image');
  

function resizeImage() {
    const size = sliderInput.value;
    sliderImage.style.width = `${size}%`; // Зміна розміру зображення
}
  
sliderInput.addEventListener('input', debounce(resizeImage, 100));

const box = document.getElementById('box');

function moveBox(event) {
  const x = event.clientX;
  const y = event.clientY;

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

window.addEventListener('mousemove', debounce(moveBox, 100));

const debouncedMoveBox = _.debounce(moveBox, 100);
window.addEventListener('mousemove', debouncedMoveBox);
