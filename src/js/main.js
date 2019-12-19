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

function setGlassBlueHeight(height) {
	glassBlueHeight = height;
	console.log(height);
	glassBlueHeight = glassBlueHeight.toString();
	glassBasicBlue.setAttribute('height', glassBlueHeight);
}

console.log('actualGlassNumber before switch: ' + actualGlassNumber + typeof actualGlassNumber);
console.log('glassBlueHeight before switch: ' + glassBlueHeight);

switch (parseInt(actualGlassNumber)) {
	case 1:
		setGlassBlueHeight(41);
		break;
	case 2:
		setGlassBlueHeight(81);
		break;
	case 3:
		setGlassBlueHeight(121);
		break;
	case 4:
		setGlassBlueHeight(161);
		break;
	case 5:
		setGlassBlueHeight(201);
		break;
	case 6:
		setGlassBlueHeight(241);
		break;
	case 7:
		setGlassBlueHeight(281);
		break;
	case 8:
		setGlassBlueHeight(321);
		break;
	case 9:
		setGlassBlueHeight(361);
		break;
	case 10:
		setGlassBlueHeight(401);
		break;
}
console.log('actualGlassNumber after switch: ' + actualGlassNumber);
console.log('glassBlueHeight after switch: ' + glassBlueHeight);

buttonAdd.addEventListener('click', addGlass);
buttonSubtract.addEventListener('click', subtractGlass);

function addGlass() {
	if (actualGlassNumber < 10) {
		actualGlassNumber++;
		glassCounter.innerHTML = actualGlassNumber;
		localStorage.setItem(keyDate, actualGlassNumber);
		glassBlueHeight = parseInt(glassBasicBlue.getAttribute('height'));
		glassBlueHeight += 40;
		glassBlueHeight = glassBlueHeight.toString();
		glassBasicBlue.setAttribute('height', glassBlueHeight);
	}
}

function subtractGlass() {
	if (actualGlassNumber > 0) {
		actualGlassNumber--;
		glassCounter.innerHTML = actualGlassNumber;
		localStorage.setItem(keyDate, actualGlassNumber);
		glassBlueHeight = parseInt(glassBasicBlue.getAttribute('height'));
		if (glassBlueHeight > 40) {
			glassBlueHeight -= 40;
			glassBlueHeight = glassBlueHeight.toString();
			glassBasicBlue.setAttribute('height', glassBlueHeight);
		}
	}
}
