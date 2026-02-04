const { expect } = require("chai");
const hexToRgb = require("../src/hexToRgb");

describe("hexToRgb unit tests", () => {

  it("converts hex to rgb", () => {
    const result = hexToRgb("#ff0000");
    expect(result).to.deep.equal({ r: 255, g: 0, b: 0 });
  });

  it("throws error for invalid hex", () => {
    expect(() => hexToRgb("zzz")).to.throw("Invalid hex color");
  });

});