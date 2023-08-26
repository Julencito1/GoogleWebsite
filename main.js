const images = document.querySelectorAll('.cha img');
let index = 0;

setInterval(() => {
  images[index].classList.remove('move-right', 'move-left');
  index = (index + 1) % images.length;
  if (index === images.length - 1) {
    images[index].classList.add('move-left');
  } else {
    images[index].classList.add('move-right');
  }
}, 1000);

images.forEach(function(image, index) {
  image.classList.add(index % 2 === 0 ? 'move-right' : 'move-left');
});

// 

const cir = document.querySelector('#cir')
const lin = document.querySelector('#linea')

cir.addEventListener('animationstart', () => {
  lin.style.opacity = '0'
})

cir.addEventListener('animationend', () => {
  document.querySelector('#goog').style.opacity = '1';
  document.querySelector('#mic').style.opacity = '1';
  document.querySelector('#lin-s').style.opacity = '1';
  document.querySelector('#con').style.opacity = '1'
} )

const loader = document.querySelector('.loader');
const txt = document.getElementById('webs');

setTimeout(() => {
  loader.classList.remove('hidden');
}, 6000);

setTimeout(() => {
  loader.classList.add('hidden');
}, 11000);

setTimeout(() => {
  if (loader.classList.contains('hidden')) {
    txt.style.display = 'initial';
  }
}, 11000);

const hist = document.querySelector('.hist');

hist.addEventListener('animationend', () => {
  hist.style.display = 'none';
});