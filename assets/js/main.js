/* tools
-array
-loop for
-log
-if
-ternary
*/

// creiamo il nostro array con le immagini necesserie al carosello

const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
]

// creiamo le immagini in modo dinamico attraverso JS

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);
}