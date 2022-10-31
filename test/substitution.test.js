const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return an encoded message", () => {
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";

        const actual = substitution("message", alphabet);
        const expected = "y&ii$r&";
        expect(actual).to.eql(expected);
    });

    it("should return a decoded message", () => {
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";

        const actual = substitution("y&ii$r&", alphabet, false);
        const expected = "message";
        expect(actual).to.eql(expected);
    });

    it("should return false if the input or alphabet is missing", () => {
        const expected = false;
        const actual = substitution("", "");
        expect(actual).to.eql(expected);
    });

    it("should return false if all of the characters in the alphabet are not unique", () => {
        const alphabet = "abcabcabcabcabcabcabcabcyz";

        const actual = substitution("thinkful", alphabet);
        expect(actual).to.be.false;
    });

    it("should return false if the alphabet is not exactly 26 characters long", () => {
        const alphabet = "short";

        const actual = substitution("thinkful", alphabet);
        expect(actual).to.be.false;
    });

    it("should ignore capital letters and maintain spaces and non-alphabetical symbols while encoding", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.eql(expected);
    });

    it("should return false if the alphabet does not contain all characters from the input", () => {
        const alphabet = "xoyqmcgr&swa+=#!@djpz$bev";

        const actual = substitution("thinkful", alphabet);
        expect(actual).to.be.false;
    });
})