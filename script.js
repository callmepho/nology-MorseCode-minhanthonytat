// const morseCode = {
// 	A: ".-",
// 	B: "-...",
// 	C: "-.-.",
// 	D: "-..",
// 	E: ".",
// 	F: "..-.",
// 	G: "--.",
// 	H: "....",
// 	I: "..",
// 	J: ".---",
// 	K: "-.-",
// 	L: ".-..",
// 	M: "--",
// 	N: "-.",
// 	O: "---",
// 	P: ".--.",
// 	Q: "--.-",
// 	R: ".-.",
// 	S: "...",
// 	T: "-",
// 	U: "..-",
// 	V: "...-",
// 	W: ".--",
// 	X: "-..-",
// 	Y: "-.--",
// 	Z: "--..",
// 	0: "-----",
// 	1: ".----",
// 	2: "..---",
// 	3: "...--",
// 	4: "....-",
// 	5: ".....",
// 	6: "-....",
// 	7: "--...",
// 	8: "---..",
// 	9: "----.",
// 	".": ".-.-.-",
// 	",": "--..--",
// 	"?": "..--..",
// 	"'": ".----.",
// 	"!": "-.-.--",
// 	"/": "-..-.",
// 	"(": "-.--.",
// 	")": "-.--.-",
// 	"&": ".-...",
// 	":": "---...",
// 	";": "-.-.-.",
// 	"=": "-...-",
// 	"+": ".-.-.",
// 	"-": "-....-",
// 	_: "..--.-",
// 	'"': ".-..-.",
// 	$: "...-..-",
// 	"@": ".--.-.",
// 	" ": "/",
// };

// const reversed = Object.entries(morseCode).map(([key, value]) => [value, key]);
// const reversedMorseCode = Object.fromEntries(reversed);
// const toMorse = (input) => {
// 	if (!input) {
// 		throw new Error("Input is empty!");
// 	}
// 	const inputArr = input
// 		.toUpperCase()
// 		.trim()
// 		.split("")
// 		.map((letter) => {
// 			if (morseCode[letter]) {
// 				return morseCode[letter];
// 			} else {
// 				throw new Error(
// 					`Input contains '${letter}' which cannot be translated to morse`
// 				);
// 			}
// 		})
// 		.join(" ");
// 	return inputArr;
// };

// const toEnglish = (input) => {
// 	if (!input) {
// 		throw new Error("Input is empty!");
// 	}
// 	const inputArr = input
// 		.trim()
// 		.split(" ")
// 		.map((morse) => {
// 			if (reversedMorseCode[morse]) {
// 				return reversedMorseCode[morse];
// 			} else {
// 				throw new Error(
// 					`Input contains '${morse}' which cannot be translated to English`
// 				);
// 			}
// 		});
// 	return inputArr.join("");
// };
// const autoTranslate = (input) => {
// 	if (!input) {
// 		throw new Error("Input is empty!");
// 	}
// 	let isMorse = true;
// 	const inputArr = input.toUpperCase().trim().split(" ");
// 	inputArr.forEach((word) => {
// 		word.split("").forEach((letter) => {
// 			if (letter === "." || letter === "-" || letter === "/") {
// 			} else {
// 				isMorse = false;
// 			}
// 		});
// 	});
// 	if (isMorse) {
// 		return toEnglish(input);
// 	} else {
// 		return toMorse(input);
// 	}
// };

import { autoTranslate, toEnglish, toMorse } from "./scripts/auto.js";

const userInput = document.querySelector("#input");
const output = document.querySelector("#output");
const btnMorse = document.querySelector("#btnMorse");
const btnEnglish = document.querySelector("#btnEnglish");
const btnAuto = document.querySelector("#btnAuto");

const submitMorse = () => {
	let userValue = userInput.value;
	try {
		const morse = toMorse(userValue);
		output.innerHTML = morse;
	} catch (e) {
		output.innerHTML = e.message;
	}
};

const submitEnglish = () => {
	let userValue = userInput.value;
	try {
		const english = toEnglish(userValue);
		output.innerHTML = english;
	} catch (e) {
		output.innerHTML = e.message;
	}
};

const sumbitAuto = () => {
	let userValue = userInput.value;
	try {
		const auto = autoTranslate(userValue);
		output.innerHTML = auto;
	} catch (e) {
		output.innerHTML = e.message;
	}
};

btnMorse.addEventListener("click", submitMorse);
btnEnglish.addEventListener("click", submitEnglish);
btnAuto.addEventListener("click", sumbitAuto);
