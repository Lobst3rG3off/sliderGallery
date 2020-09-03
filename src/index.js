function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No sliderPassed')
    }
    // create some variables for working with the slider
    let current
    let prev
    let next
    // select elements needed for the slider
    const slides = slider.querySelector('.slides');
    const prevButton = document.querySelector('.goToPrev')
    const nextButton = document.querySelector('.goToNext')

    function startSlider() {
        current = slider.querySelector('.current') || 
        slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.lastElementChild;
    }

    function applyClasses() {
        current.classList.add('current')
        prev.classList.add('prev')
        next.classList.add('next')
    }
    function move(direction) {
        // first strip the classes off the current slides
        const classesToRemove = ['prev', 'current', 'next'];

        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
    }

// when this slider is created, run the start slider function
   startSlider() 
   applyClasses()
}

const mySlider = Slider(document.querySelector('.slider'))
const dogSlider = Slider(document.querySelector('.dog-slider'))