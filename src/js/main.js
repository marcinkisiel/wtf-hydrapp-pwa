'use strict';

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('serviceworker.js').then(
			function(registration) {
				// Registration was successful
				console.log('ServiceWorker registration successful with scope: ', registration.scope);
			},
			function(err) {
				// registration failed :(
				console.log('ServiceWorker registration failed: ', err);
			}
		);
	});
}

// place your code below

const key = new Date().toISOString().slice(0, 10);
localStorage.setItem('currentDate', key);
console.log(key);

const buttonAdd = document.querySelector('.button_add-glass--js');
const buttonSubtract = document.querySelector('.button_subtract-glass--js');
const glassCounter = document.querySelector('.glass__counter--js');
let actualGlassNumber = localStorage.getItem('actualGlassNumber');
glassCounter.innerHTML = actualGlassNumber;
console.log(actualGlassNumber);

buttonAdd.addEventListener('click', addGlass);
buttonSubtract.addEventListener('click', subtractGlass);

function addGlass() {
	if (actualGlassNumber < 9) {
		actualGlassNumber++;
		glassCounter.innerHTML = actualGlassNumber;
		localStorage.setItem('actualGlassNumber', actualGlassNumber);
	}
}

function subtractGlass() {
	if (actualGlassNumber > 0) {
		actualGlassNumber--;
		glassCounter.innerHTML = actualGlassNumber;
		localStorage.setItem('actualGlassNumber', actualGlassNumber);
	}
}
