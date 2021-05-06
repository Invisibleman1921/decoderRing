// Write your tests here!
const expect = require("chai").expect;

const {caesar} = require("../src/caesar");
describe("caesar", () => {
  it("Testing a shift of 0",() => {
    const input = "Thinkful";
    const expected = false;
    const actual = caesar(input, 0);
    expect(actual).to.eql(expected);
  });
  
  it("Testing a shift of 1",() => {
    const input = "Mason";
    const expected = "nbtpo";
    const actual = caesar(input,1);
    expect(actual).to.eql(expected);
  });
  
  it("Testing a shift of 1 with space",() => {
    const input = "Mason is";
    const expected = "nbtpo jt";
    const actual = caesar(input,1);
    expect(actual).to.eql(expected);
  });
});
