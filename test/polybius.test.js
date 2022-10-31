const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => { 
    it("should return an encoded message", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    });

    it("should return a decoded message", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });
  
  it("should translate the number 42 to the letters i and j while decoding", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters and maintain spaces and non-alphabetical symbols while encoding", () => {
        const actual = polybius("Hello world");
        const expected = "3251131343 2543241341"
        expect(actual).to.eql(expected);
    });

    it("should return false when the number of characters in the string excluding spaces should be odd", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    }); 

    it((" maintain spaces while deciding"), () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.eql(expected);
    });
})