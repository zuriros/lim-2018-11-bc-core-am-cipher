const firstText =document.getElementById('mensaje');
const numbCod= document.getElementById('enciph');
const secondText = document.getElementById('mensaje2');
const passwordInput= document.getElementById('numb');
const numbCodTwo=document.getElementById('deciph');


numbCod.addEventListener('click', () => {
  secondText.innerHTML = cipher1(firstText.value,parseInt(passwordInput.value));
});


numbCodTwo.addEventListener('click',() =>{
  secondText.innerHTML = decipher1(firstText.value,parseInt(passwordInput.value));
});
