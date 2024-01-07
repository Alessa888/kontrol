
let slides = document.querySelectorAll('#slides .slide');
let next = document.getElementById('arrow-right');
let previous = document.getElementById('arrow-left');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
	goToSlide(currentSlide+1);
}

function previousSlide() {
	goToSlide(currentSlide-1);
}

function goToSlide(n) {
	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide active-slide';
}

next.onclick = function() {
	nextSlide();
};

previous.onclick = function() {
	previousSlide();
};

