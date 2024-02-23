/* tools
-array
-loop for
-log
-if
-ternary
*/

// creiamo il nostro array con le immagini necesserie al carosello

let slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
]

// creiamo le immagini in modo dinamico attraverso JS
let activeSlide = 0;

const slidesElement = document.querySelector('.slides');

const prevElement = document.querySelector('.previous')
const nextElement = document.querySelector('.next')
// console.log(prevElement, nextElement);



for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    // console.log(slide);

    let imageMarkup = 
    `<img class="${ i === activeSlide ? 'active' : '' }" src="./assets/img/${slide}">`
    console.log(imageMarkup);

    slidesElement.insertAdjacentHTML('beforeend', imageMarkup);
}

prevElement.addEventListener('click', function () {
    console.log('slide to the previous image');
} )

nextElement.addEventListener('click', function () {
    console.log('slide to the next image');

    activeSlide ++
    console.log(activeSlide);

} )



