const morseCode = {
	A: ".-",
	B: "-...",
	C: "-.-.",
	D: "-..",
	E: ".",
	F: "..-.",
	G: "--.",
	H: "....",
	I: "..",
	J: ".---",
	K: "-.-",
	L: ".-..",
	M: "--",
	N: "-.",
	O: "---",
	P: ".--.",
	Q: "--.-",
	R: ".-.",
	S: "...",
	T: "-",
	U: "..-",
	V: "...-",
	W: ".--",
	X: "-..-",
	Y: "-.--",
	Z: "--..",
	0: "-----",
	1: ".----",
	2: "..---",
	3: "...--",
	4: "....-",
	5: ".....",
	6: "-....",
	7: "--...",
	8: "---..",
	9: "----.",
	".": ".-.-.-",
	",": "--..--",
	"?": "..--..",
	"'": ".----.",
	"!": "-.-.--",
	"/": "-..-.",
	"(": "-.--.",
	")": "-.--.-",
	"&": ".-...",
	":": "---...",
	";": "-.-.-.",
	"=": "-...-",
	"+": ".-.-.",
	"-": "-....-",
	_: "..--.-",
	'"': ".-..-.",
	$: "...-..-",
	"@": ".--.-.",
	" ": "/",
};

const reversed = Object.entries(morseCode).map(([key, value]) => [value, key]);
const reversedMorseCode = Object.fromEntries(reversed);

export const toMorse = (input) => {
	if (!input) {
		throw new Error("Input is empty!");
	}
	const inputArr = input
		.toUpperCase()
		.trim()
		.split("")
		.map((letter) => {
			if (morseCode[letter]) {
				return morseCode[letter];
			} else {
				throw new Error(
					`Input contains '${letter}' which cannot be translated to morse`
				);
			}
		})
		.join(" ");
	return inputArr;
};

export const toEnglish = (input) => {
	if (!input) {
		throw new Error("Input is empty!");
	}
	const inputArr = input
		.trim()
		.split(" ")
		.map((morse) => {
			if (reversedMorseCode[morse]) {
				return reversedMorseCode[morse];
			} else {
				throw new Error(
					`Input contains '${morse}' which cannot be translated to English`
				);
			}
		});
	return inputArr.join("");
};

export const autoTranslate = (input) => {
	if (!input) {
		throw new Error("Input is empty!");
	}
	let isMorse = true;
	const inputArr = input.toUpperCase().trim().split(" ");
	inputArr.forEach((word) => {
		word.split("").forEach((letter) => {
			if (letter === "." || letter === "-" || letter === "/") {
			} else {
				isMorse = false;
			}
		});
	});
	if (isMorse) {
		return toEnglish(input);
	} else {
		return toMorse(input);
	}
};
