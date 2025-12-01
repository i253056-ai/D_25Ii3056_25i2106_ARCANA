document.addEventListener('DOMContentLoaded',() =>{
const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');
    let currentSlide = 0;
    let slideInterval;

    // Function to show specific slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Handle wrapping (infinite loop)
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Add active class to current slide
        slides[currentSlide].classList.add('active');
    }

    // Next Slide Logic
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Previous Slide Logic
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Event Listeners for Arrows
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval(); // Restart timer when manually clicked
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    // Automatic Sliding (Auto-play)
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Initialize Slider
    if (slides.length > 0) {
        startInterval();
    }

});

const home = document.getElementById('homebutton')
const library = document.getElementById('library')

const about = document.getElementById('aboutus')

function homeclick(){
    window.location.href = 'ARCANA.html';
}
function libraryclick(){
    window.location.href = 'library.html';
}
function aboutclick()
{
    window.location.href = 'aboutus.html';
}
home.addEventListener('click',homeclick)
library.addEventListener('click',libraryclick)
about.addEventListener('click',aboutclick)

