const polybiusModule = (function () {

  function polybius(input, encode = true) {
    
    let alphabet = {
    a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55",[' ']: " " };
  
  let decoded={
    11:"a", 12: "f", 13: "l", 14: "q", 15: "v", 21: "b", 22: "g", 23: "m", 24: "r", 25: "w", 31: "c", 32: "h", 33: "n", 34: "s", 35: "x", 41: "d", 42: "(i/j)", 43: "o", 44: "t", 45: "y", 51: "e", 52: "k", 53: "p", 54: "u", 55: "z", [' ']: " " };
    
    if(encode){
      return input.split('').map(letter => {
        return alphabet[letter.toLowerCase()]
      }).join('')
    }
    //SPlitting input to handle 1 letter at a time.
    //Then using the map function to say that alphabet goes to each letter, after being made lowercase.
    //finally joining the resulting string of numbers.
    
    else{
      if(input.replace(/\s/g,'').length %2 !==0) return false
        return input.match(/[0-9]{2}|\s/g).map(number => {
          return decoded[number]
        }).join('')
    }
    //Using pattern matching to look at special characters to replace spaces.
    //Then checking if the length of the input isn't even, then returning false.
    //Within that if statement (assuming true), taking 2 numbers that will be between 0-9, or a space. And taking this number and mapping it through decoded.
    //finally returning the now decoded string through a join.
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
