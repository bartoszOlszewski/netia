const slideList = [{
    img: "img/s1.jpeg",
    text: "Netia - najlepszy dostawca internetu wg. badania uke"
},
{   
img: "img/s2.jpeg",
text: "Światłowód do 1 Gb/s, Telewizja, Telefon"
},
{
    img: "img/s3.jpeg",
    text: "info o technologii światłowodowej i nowoczesnym routerze gratis"
}];

const image = document.querySelector('img.header__img');
const title = document.querySelector('h2.header__title');
const dots = [...document.querySelectorAll('span.dots__dot')];

const areas = [...document.querySelectorAll('.btn')];

// INTERFACE

const slideTime = 15000;
let active = 0;

// IMPLEMENTATION

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if(active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    title.textContent = slideList[active].text;
    changeDot();
}

let indexInterval = setInterval(changeSlide, slideTime);

const keyChangeSlide = (e) => {
if(e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if(active === slideList.length) {
        active = 0;
    } else if (active < 0) {
        active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    title.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, slideTime);
}
}

function areaSelect() {
    clearInterval(indexInterval);
        active = this.id;
        image.src = slideList[active].img;
        title.textContent = slideList[active].text;
        changeDot();
        indexInterval = setInterval(changeSlide, slideTime);
    }

areas.forEach(area => area.addEventListener('click', areaSelect));

window.addEventListener('keydown', keyChangeSlide);
