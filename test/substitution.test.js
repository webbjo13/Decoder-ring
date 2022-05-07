const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests by Johnny", () => {
    describe("error handling", () => {
      it("should return false if the substitution alphabet is missing", () => {
        const message = "testing";
        const actual = substitution(message);
        expect(actual).to.be.false;
      });
  
      it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "testing";
        const alphabet = "short";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
  
      it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "testing";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
    });
  
    describe("encoding a message", () => {
      it("should encode a message by using the given substitution alphabet", () => {
        const message = "thinkful";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "djbghnzv";
  
        expect(actual).to.equal(expected);
      });
  
      it("should work with any kind of key with unique characters", () => {
        const message = "thinkful";
        const alphabet = "xwaeszrd.tfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "jd.gfznc";
  
        expect(actual).to.equal(expected);
      });
  
      it("should preserve spaces", () => {
        const message = "hello thinkful";
        const alphabet = "xwaeszrd.tfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "dsccv jd.gfznc";
  
        expect(actual).to.equal(expected);
      });
    });
  
    describe("decoding a message", () => {
      it("should decode a message by using the given substitution alphabet", () => {
        const message = "djbghnzv";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "thinkful";
  
        expect(actual).to.equal(expected);
      });
  
      it("should work with any kind of key with unique characters", () => {
        const message = "jd.gfznc";
        const alphabet = "xwaeszrd.tfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "thinkful";
  
        expect(actual).to.equal(expected);
      });
  
      it("should preserve spaces", () => {
        const message = "dsccv jd.gfznc";
        const alphabet = "xwaeszrd.tfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "hello thinkful";
  
        expect(actual).to.equal(expected);
      });
    });
  });