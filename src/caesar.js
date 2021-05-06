const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(!shift || shift <-25 || shift > 25){
      return false;
    }
    if(!encode){
      shift *= -1;
    }
    return input.toLowerCase().split('').map((letter) => {
      if(letter.charCodeAt(0) < 97) return letter
      let num = letter.charCodeAt(0) + parseInt(shift)
      if(num > 122){
        num -= 26
      }
      else if(num < 97){
        num += 26
      }
      return String.fromCharCode(num)
    }).join('')
  }
  
  return {caesar};
})();
module.exports = { caesar: caesarModule.caesar };
