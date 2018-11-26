window.cipher = {
  // ...
};

function cipher1(string,offset) {
  let blankEspace = "";
  for (let i = 0; i < string.length; i++) {
    codCipher=string.charCodeAt(i);
//     if (codCipher>=65 && codCipher<=90) {
//     offsetformula=(codCipher - 65 + offset)%26+65;
//     letterCod= String.fromCharCode(offsetformula);
//   // OTRA FORMA DE CONCATENAR blankEspace+= String.fromCharCode(offsetformula);
//  blankEspace+=letterCod;
// }
//      else if (codCipher>=97 && codCipher<=122) {
//      offsetFormulaLower=(codCipher-97+offset)%26+97;
//      letterCodLower=String.fromCharCode(offsetFormulaLower);
//      blankEspace+=letterCodLower;
//      }
// else if (codCipher==32) {
//        hole=" "
//     blankEspace+=hole;
// }
//  }
//  return blankEspace;
//   }
  // Empezando con el descirado


function decipher1(string,offset) {
  let blankSpaceSec = "";
  for (var i = 0; i < string.length; i++) {
    codDecipher = string.charCodeAt(i);
    offsetDez=(codDecipher+65-offset)%26+65;
    letterDecode=String.fromCharCode(offsetDez);
    blankSpaceSec+=letterDecode;
if (codDecipher>=97 && codDecipher<=122) {
  offsetDezLower=

}
}
return blankSpaceSec;
}
