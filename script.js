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
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const englishToMorse = (input) => {
  return input
    .toUpperCase()
    .split("")
    .map((letter) => {
      if (morseCode[letter]) {
        return morseCode[letter];
      } else {
        return letter;
      }
    })
    .join(" ");
};

const userInput = document.querySelector("#english");
const morseP = document.querySelector("#morseCode");
const sumbitBtn = document.querySelector("#submit");

const submit = () => {
  let userValue = userInput.value;
  let morse = englishToMorse(userValue);
  morseP.innerHTML = morse;
};

sumbitBtn.addEventListener("click", submit);
