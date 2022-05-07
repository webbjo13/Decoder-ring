// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // checks shift parameters given
    if (shift < -25 || shift > 25 || !shift || shift == 0) {
      return false;
    }
    // this would perform the opposite shift if the encoding is false
    if (!encode) {
      shift = shift * -1;
  }
    // makes all letters lower case
    input = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const results = [];
    for (let i = 0; i < input.length; i++) {
      const letter = input[i];
      let newLetter = alphabet.indexOf(letter);
      // using indexOf() returns a "-1" if the input it is searching for does not exist
      if (newLetter === -1) {
        results.push(letter);
      }
      else {
        newLetter += shift;
        if (newLetter > 25) {
          newLetter -= 26;
        }
        if (newLetter < 0) {
          newLetter += 26;
        }
        results.push(alphabet[newLetter]);
      }
    }
    return results.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
