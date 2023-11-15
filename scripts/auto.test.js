import { autoTranslate, toEnglish, toMorse } from "./auto.js";

describe("autoTranslate Test", () => {
	it("Should throw an error if no parameters are passed", () => {
		expect(() => {
			autoTranslate();
		}).toThrow(new Error("Input is empty!"));
	});

	it("Should auto translate input", () => {
		expect(autoTranslate("Hello World")).toBe(
			".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
		);
		expect(autoTranslate(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe(
			"HELLO WORLD"
		);
	});
});

describe("toMorse Test", () => {
	it("Should throw an error if no parameters are passed", () => {
		expect(() => {
			toMorse();
		}).toThrow(new Error("Input is empty!"));
	});

	it("Should throw an error if invalid input", () => {
		expect(() => {
			toMorse("Hello world`");
		}).toThrow(
			new Error("Input contains '`' which cannot be translated to morse")
		);
	});

	it("Should translate English input to Morse", () => {
		expect(toMorse("Hello World")).toBe(
			".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
		);
	});
});

describe("toEnglish Test", () => {
	it("Should throw an error if no parameters are passed", () => {
		expect(() => {
			toEnglish();
		}).toThrow(new Error("Input is empty!"));
	});

	it("Should throw an error if invalid input", () => {
		expect(() => {
			toEnglish("-.-.---. -. -.- .-`");
		}).toThrow(
			new Error(
				"Input contains '-.-.---.' which cannot be translated to English"
			)
		);
	});

	it("Should translate Morse input to English", () => {
		expect(toEnglish(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe(
			"HELLO WORLD"
		);
	});
});
