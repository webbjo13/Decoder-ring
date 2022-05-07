const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests by Johnny", ()=>{
    describe("missing or incorrect parameters", ()=>{
        it("should return false if shift is not input", ()=>{
            const actual = caesar("testing")
            expect(actual).to.be.false
        })
    
        it("should return false if shift is less than -25", ()=>{
            const actual = caesar("testing", -50)
            expect(actual).to.be.false
        })
    
        it("should return false if shift is greater than 25", ()=>{
            const actual = caesar("testing", 50)
            expect(actual).to.be.false
        })
    })
    describe("correctly encodes or decodes a message", ()=>{
        it("should encode a message correctly given a string and proper shift", ()=>{
            const actual = caesar("thinkful", 3)
            const expected = "wklqnixo"
            expect(actual).to.equal(expected)
        })
        it("should retain spaces and non-alphabetic characters as is", ()=>{
            const actual = caesar("thinkful is number 1!", 3)
            const expected = "wklqnixo lv qxpehu 1!"
            expect(actual).to.equal(expected)
        })
        it("should allow for shifts going backwards from the letter 'a'", ()=>{
            const actual = caesar("thinkful", -10)
            const expected = "jxydavkb"
            expect(actual).to.equal(expected)
        })
        it("should allow for shifts going forwards after the letter 'z'", ()=>{
            const actual = caesar("thinkful", 20)
            const expected = "nbchezof"
            expect(actual).to.equal(expected)
        })
        it("should decode by shifting letters in the opposite direction", ()=>{
            const actual = caesar("nbchezof", 20, false)
            const expected = "thinkful"
            expect(actual).to.equal(expected)
        })
        it("should ignore capital letters", () => {
            const message = "thiNKfuL"
            const shift = 13
            const actual = caesar(message, shift)
            const expected = "guvaxshy"
      
            expect(actual).to.equal(expected)
        })
    })
})
