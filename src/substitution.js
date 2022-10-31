const substitutionModule = (function () {
  
  let correctAlpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  let cypher = [];
  
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    
    let checkUnique = new Set(alphabet)
    if ([...checkUnique].length !== 26) return false;
    alphabet.split('');
    if (encode) {
      for (let i = 0; i < 25; i++) {
        cypher[correctAlpha[i]] =  alphabet[i]
      }
    } else {
      for (let i = 0; i < 25; i++) {
        cypher[alphabet[i]] =  correctAlpha[i]
      }
    }
    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return cypher[letter]
    })
    return answer.join('')
  }
  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
