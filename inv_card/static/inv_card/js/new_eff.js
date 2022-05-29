import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function party(){
	confetti()
}
document.getElementById('confetti').addEventListener('click', party);

ScrollReveal({
	reset: true,
	distance:'60px',
	duratio: 2500,
	delay: 100
});

ScrollReveal().reveal('.pic, .section-title-02', {delay:500, origin: 'left'});
ScrollReveal().reveal('.Notes', {delay:600, origin: 'right'});
ScrollReveal().reveal('.about-img', {delay:800, origin: 'bottom'});
ScrollReveal().reveal('.p1, .k1', {delay:600, origin: 'left'});
ScrollReveal().reveal('.p2', {delay:800, origin: 'bottom'});
ScrollReveal().reveal('.p3', {delay:900, origin: 'bottom'});
ScrollReveal().reveal('.p4', {delay:1000, origin: 'bottom'});
ScrollReveal().reveal('.sim00, .months', {delay:500, origin: 'left'});
ScrollReveal().reveal('.sim01', {delay:600, origin: 'right'});
ScrollReveal().reveal('.card', {delay:600, origin: 'bottom', interval:200});