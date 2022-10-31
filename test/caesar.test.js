const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return an encoded message", () => {
        const actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.eql(expected);
    });

    it("should return a decoded message", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = "thinkful";
        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.eql(expected);
    });

    it("should maintain spaces and non-alphabetical symbols", () => {
        const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!"
        expect(actual).to.eql(expected);
    });

    it("should return false if the shift value is equal to 0", () => {
        const actual = caesar("thinkful", 0);
        expect(actual).to.be.false;
    });

    it("should return false if the shift value is less than -25", () => {
        const actual = caesar("thinkful", -26);
        expect(actual).to.be.false;
    });

    it("should return false if the shift value is greater than 25", () => {
        const actual = caesar("thinkful", 26);
        expect(actual).to.be.false;
    });

    it("should return false if the input or shift is missing", () => {
        const expected = false;
        const actual = caesar("", )
        expect(actual).to.eql(expected); 
    });
})