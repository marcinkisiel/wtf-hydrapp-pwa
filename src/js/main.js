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

const buttonAdd = document.querySelector('.button_add-glass--js');
const buttonSubtract = document.querySelector('.button_subtract-glass--js');
const glassCounter = document.querySelector('.glass__counter--js');
const glassBasicBlue = document.querySelector('.glass__basic-blue--js');

// glassBasicBlue.setAttribute('height', '0');

const keyDate = new Date().toISOString().slice(0, 10);

const checkDate = localStorage.getItem(keyDate);

let actualGlassNumber;
let glassBlueHeight = 0;

if (checkDate == null) {
	actualGlassNumber = 0;
} else {
	actualGlassNumber = localStorage.getItem(keyDate);
}
glassCounter.innerHTML = actualGlassNumber;

function setGlassBlueHeight(glasses) {
	glasses = parseInt(glasses);
	glassBlueHeight = glasses * 40 + 1;
	glassBlueHeight = glassBlueHeight.toString();
	glassBasicBlue.setAttribute('height', glassBlueHeight);
}

setGlassBlueHeight(actualGlassNumber);

buttonAdd.addEventListener('click', addGlass);
buttonSubtract.addEventListener('click', subtractGlass);

function addGlass() {
	if (actualGlassNumber < 20) {
		actualGlassNumber++;
		glassCounter.innerHTML = actualGlassNumber;
		localStorage.setItem(keyDate, actualGlassNumber);
		if (actualGlassNumber < 11) {
			glassBlueHeight = parseInt(glassBasicBlue.getAttribute('height'));
			glassBlueHeight += 40;
			glassBlueHeight = glassBlueHeight.toString();
			glassBasicBlue.setAttribute('height', glassBlueHeight);
		} else {
			glassCounter.classList.add('glass__counter--red');
		}
	}
}

function subtractGlass() {
	if (actualGlassNumber > 0) {
		actualGlassNumber--;
		glassCounter.innerHTML = actualGlassNumber;
		localStorage.setItem(keyDate, actualGlassNumber);
		if (actualGlassNumber < 10) {
			glassBlueHeight = parseInt(glassBasicBlue.getAttribute('height'));
			glassCounter.classList.remove('glass__counter--red');
			if (glassBlueHeight > 40) {
				glassBlueHeight -= 40;
				glassBlueHeight = glassBlueHeight.toString();
				glassBasicBlue.setAttribute('height', glassBlueHeight);
			}
		}
	}
}
