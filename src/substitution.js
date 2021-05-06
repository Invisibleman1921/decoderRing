// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
  
  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26){
      return false;
    }
    if(Array.from(new Set(alphabet)).length !== 26){
      return false;
    }//Conditions that if any are met, false is returned.
    alphabet = alphabet.split('');//converting and splitting to array
    input = input.toLowerCase();//Set to lowercase
    let map = {};
    let decode = {};
    let result = '';
    realAlphabet.split('').forEach((letter,index) => {
      map[letter] = alphabet[index]//encode object
      decode[alphabet[index]] = letter//decode object
    })
    //Goes through the realAlphabet, and mapping each letter to the cipher alphabet.
    //Decode object generating the decryption
    if(!encode){
      map = decode;
    }
    input.split('').forEach(input => {
      result += input === ' ' ? ' ' : map[input]
    })
    return result
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
