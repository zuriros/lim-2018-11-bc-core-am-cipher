
function cipher1(offset,string) {
  let blankEspace = "";
  let codCipher = "";
  let offsetformula = "";
  let letterCod = "";
  let letterCodLower = "";
  let offsetFormulaLower ="";
  let hole = "";
  for (let i = 0; i < string.length; i++) {
     codCipher=string.charCodeAt(i);
    if (codCipher>=65 && codCipher<=90) {
     offsetformula=(codCipher - 65 + parseInt(offset))%26+65;
     letterCod= String.fromCharCode(offsetformula);
  // OTRA FORMA DE CONCATENAR blankEspace+= String.fromCharCode(offsetformula);
     blankEspace+=letterCod;
}
     else if (codCipher>=97 && codCipher<=122) {
     offsetFormulaLower=(codCipher-97+parseInt(offset))%26+97;
     letterCodLower=String.fromCharCode(offsetFormulaLower);
     blankEspace+=letterCodLower;
     }
else if(codCipher===32) {
       hole=String.fromCharCode(codCipher);
    blankEspace+=hole;
}
 }
 return blankEspace;
  }

  // Empezando con el descirado


function decipher1(offset,string) {
  let blankSpaceSec = "";
  let codDecipher = "";
  let offsetDez = "";
  let letterDecode = "";
  let offsetDezLower = "";
  let letterDecodeLower = "";
  let holeSecond = "";
  for (var i = 0; i < string.length; i++) {
    codDecipher = string.charCodeAt(i);
    if (codDecipher>=65 && codDecipher<=90) {
    offsetDez=(codDecipher-90-parseInt(offset))%26+90;
    letterDecode=String.fromCharCode(offsetDez);
    blankSpaceSec+=letterDecode;
  } else if (codDecipher>=97 && codDecipher<=122) {
    offsetDezLower=(codDecipher-122-parseInt(offset))%26+122;
    letterDecodeLower=String.fromCharCode(offsetDezLower);
     blankSpaceSec+=letterDecodeLower;
  } else if (codDecipher===32){
    holeSecond=String.fromCharCode(codDecipher);
    blankSpaceSec+=holeSecond;
  }
    }
return blankSpaceSec;
       }

window.cipher = {
 encode:cipher1,
 decode:decipher1,
};
