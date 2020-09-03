function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No sliderPassed')
    }
    // create some variables for working with the slider
    let prev
    let current
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
        if (direction === 'back') {
            // make a new array of the new values, and destructure them over and into the prem current and next variables
            [prev, current, next] = [prev.previousElementSibling, prev, current];           
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling];
        }
        applyClasses();
    }

// when this slider is created, run the start slider function
   startSlider() 
   applyClasses()

//    Event LIsteners
prevButton.addEventListener('click', () => move('back'))
nextButton.addEventListener('click', move)
}

const mySlider = Slider(document.querySelector('.slider'))
const dogSlider = Slider(document.querySelector('.dog-slider'))