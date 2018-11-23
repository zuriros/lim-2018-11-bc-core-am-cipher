const ambos =document.getElementById('mensaje');
const numb= document.getElementById('password');
const btnCodigo = document.getElementById('misterio');
const boxResult= document.getElementById('resultado');

function cifrar(string,offset) {
  let cifrada="";
for (var i = 0; i < string.length; i++) {
    ascii=string.charCodeAt(i);
    formula=(ascii-65+offset)%26+65;
    cifrada += String.fromCharCode(formula);
}
  return cifrada;
}



btnCodigo.addEventListener('click', () => {
  boxResult.innerHTML = cifrar(ambos.value,parseInt(numb.value));
})
