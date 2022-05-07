const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests by Johnny", () => {
    it('Should return "4432423352125413", if thinkful is entered - tests encoding', () => {
        const actual = polybius("thinkful");
        const expected = '4432423352125413';
        expect(actual).to.equal(expected);
    });
    it('Should return encoding, the (i/j) should return 42', () => {
        const actual = polybius("ij");
        const expected = '4242';
        expect(actual).to.equal(expected);
    });
    it('Should return "hello thinkful" -tests normal decoding', () => {
        const actual = polybius("3251131343 4432423352125413", false);
        const expected = 'hello th(i/j)nkful';
        expect(actual).to.equal(expected);
    });
    it('Should return false if decoding, the number of characters in the string excluding spaces should be even', () => {
        const actual = polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it('Should return encoding even with a space, the space should be maintained', () => {
        const actual = polybius("hello thinkful");
        const expected = '3251131343 4432423352125413';
        expect(actual).to.equal(expected);
    });
    it('Should return the encoded version even if there are caps', () => {
        const actual = polybius("HeLLo ThinKFuL");
        const expected = '3251131343 4432423352125413';
        expect(actual).to.equal(expected);
    });
    it('Should return decoding if there is a false set in encoding part even with spaces', () => {
        const actual = polybius("3251131343 4432423352125413", false);
        const expected = 'hello th(i/j)nkful';
        expect(actual).to.equal(expected);
    });
    it('Should return decoding if false, the (i/j) share space', () => {
        const actual = polybius("4432423352125413", false);
        const expected = 'th(i/j)nkful';
        expect(actual).to.equal(expected);
    });

});