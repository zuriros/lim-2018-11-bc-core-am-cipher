
// objetos patanlla_1
let entrada_1=document.getElementById('entrada');
let box_1=document.getElementById('pantalla_1');

//objetos pantalla_2
let firstText =document.getElementById('mensaje');
let passwordInput= document.getElementById('number');
let numbCod= document.getElementById('enciph');
let numbCodTwo=document.getElementById('deciph');
let secondText = document.getElementById('mensaje2');
let box_2=document.getElementById('pantalla_2');
const theLast=document.getElementById('fin');
// Ocultando ventana y agregando un evento,para despues mostrar.
box_2.style.display="none";

entrada_1.addEventListener('click',function(){
  box_1.style.display="none";
  box_2.style.display="block";
})
// cerrando ventana con objetos pantalla_2
theLast.addEventListener("click",()=>{
  location.reload();
});

// Insertando eventos para el cifrado y descifrado.
numbCod.addEventListener('click', function() {
  secondText.innerHTML = cipher.encode(parseInt(passwordInput.value),firstText.value);
});


numbCodTwo.addEventListener('click',function(){
  secondText.innerHTML = cipher.decode(parseInt(passwordInput.value),firstText.value);
});
