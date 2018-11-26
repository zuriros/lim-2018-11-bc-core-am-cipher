const firstText =document.getElementById('mensaje');
const numbCod= document.getElementById('codigo');
const secondText = document.getElementById('mensaje2');
const passwordInput= document.getElementById('numb');

numbCod.addEventListener('click', () => {
  secondText.innerHTML = cipher1(firstText.value,parseInt(passwordInput.value))
});


function cipher1(string,offset) {
  let blankEspace=""
for (var i = 0; i < string.length; i++) {
    codCipher=string.charCodeAt(i);
    offsetformula=(codCipher-65+offset)%26+65;
    letterCod= String.fromCharCode(offsetformula);
    blankEspace+=letterCod;
}
  return blankEspace;
}
