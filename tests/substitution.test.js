// Write your tests here!
const expect = require("chai").expect;

const {substitution} = require("../src/substitution");
describe("substitution", () => {
  it("Substituting `Thinful` for encrypted alphabet.",() => {
    const input = "Thinkful";
    const alphabet = "bcdefghijklmnopqrstuvwxyza";
    const expected = "uijolgvm";
    const actual = substitution(input, alphabet);
    expect(actual).to.eql(expected);
  });
  /*
  it("Substituting `Mason` for encrypted alphabet with numbers.",() => {
    const input = "Mason";
    const alphabet = "cdefghijklmnopqrstuvwxyz12";
    const expected = "ocuqp";
    const acutal = substitution(input, alphabet);
    expect(actual).to.eql(expected);
  });*/
});
