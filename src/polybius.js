// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    
    const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "(i/j)",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w" ,
    "x", "y", "z", ];

    const poly = [ "11", "21", "31", "41", "51", "12", "22", "32",
    "42", "52", "13", "23", "33", "43", "53", "14", "24", "34", "44",
    "54", "15", "25", "35", "45", "55", ];
  

  let answer = "";

  // encoding process
  if (encode) {
    for (let i = 0; i < input.length; i++) {
      input = input.toLowerCase();
      let index = alphabet.indexOf(input[i]);
      if (index === -1 && input[i] === " ") {
        answer += " ";
      } else if ((index === -1 && input[i] === "i") || input[i] === "j") {
        answer += poly[8];
      } else {
        answer += poly[index];
      }
    }
  }
// if encode is false
  else if (!encode) {
    let inputWithoutSpace = input.replace(/ /g, "");
    if (inputWithoutSpace.length % 2 !== 0) {
      return false;
    } else {
      let forInputArr = input.replace(/ /g, "  ");
      let inputArr = forInputArr.match(/.{1,2}/g);

      for (let i = 0; i < inputArr.length; i++) {
        let index = poly.indexOf(inputArr[i]);
        if (index === -1) {
          answer += " ";
        } else {
          answer += alphabet[index];
        }
      }
    }
    }
    console.log(answer);
    return answer;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
