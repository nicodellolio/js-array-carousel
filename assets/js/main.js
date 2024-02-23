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


// creiamo un ciclo per passare in rassegna le immagini dell'array

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    // console.log(slide);

    let imageMarkup = 
    `<img class="${ i === activeSlide ? 'active' : '' }" src="./assets/img/${slide}">`
    console.log(imageMarkup);

    slidesElement.insertAdjacentHTML('beforeend', imageMarkup);
}


//aggiungiamo l'event listner ai bottoni per il prev ed il next
prevElement.addEventListener('click', function () {
    console.log('slide to the previous image');

    //decrementiamo l'iterazione ad ogni click
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length -1
    }

    //togliamo la classe active prima di aggiungerla a quella successiva
    const currentSlide = document.querySelector('img.active')
    console.log(currentSlide);

    currentSlide.classList.remove('active')

    //diamo la classe active alle successive iterazioni
    const allSlides = document.querySelectorAll('.slides img')
    // console.log(allSlides);

    allSlides[activeSlide].classList.add('active')
} )

nextElement.addEventListener('click', function () {
    console.log('slide to the next image');

    //incrementiamo l'iterazione ad ogni click
    activeSlide++

    if (activeSlide > slides.length -1) {
        activeSlide = 0
    }

    //togliamo la classe active prima di aggiungerla a quella successiva
    const currentSlide = document.querySelector('img.active')
    console.log(currentSlide);

    currentSlide.classList.remove('active')

    //diamo la classe active alle successive iterazioni
    const allSlides = document.querySelectorAll('.slides img')
    // console.log(allSlides);

    allSlides[activeSlide].classList.add('active')
} )





