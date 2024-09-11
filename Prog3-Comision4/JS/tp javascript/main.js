//1. Introducción a JavaScript

//Ejercicio 2:

/*
let a = 4;
let b = 5;

let c = a + b;
console.log("La suma de a y b es: ", c);

*/


//Ejercicio 3:


/*
let nombre = prompt("Ingrese su nombre: ");
console.log("Hola, ", nombre, "!")
*/

//2.Operadores logicos y condicionales


//Ejercicio 1:

/*
let a = 5;
let b = 6;
let c;

if (a > b) {
   c = a;
} else {
  c = b;
}

console.log("El mayor número es: ", c);
*/

//Ejercicio 2

/*
let numero = prompt("Ingresa un número: ");

numero = parseInt(numero)

if (numero % 2 === 0) {
  console.log("El numero ", numero , " es par.");
} else {
  console.log("El número ", numero, " es impar");
}

*/

//3.Operadores de asignacion y bucles

//Ejercicio 1:

/* 
let numero = 10;

while (numero > 0) {
  console.log(numero);
  numero--
}

*/

//Ejercicio 2:

/* 
let number;

do {
  number = prompt("Ingrese un número mayor a 100: ")

  number = parseInt(number)
  
} while (number <= 100 || isNaN(number));

console.log("Ingresaste un numero mayor a 100: ", number);

*/

//4.Funciones de JavaScript

//Ejercicio 1:

/* 
const esPar = (num)=> {

  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const impresionConsola = (num)=> {
  if (esPar(num)) {
    console.log("El número " + num + " es par" );
  } else {
    console.log("EL número " + num + " es impar" );
  }
}

impresionConsola(8)
impresionConsola(7)
*/

//Ejercicio 2:

/* 
const convertirCelsiusAFahrenheit = (celsius) => {

  let farhrenheit = celsius * 1.8 + 32
  return farhrenheit;
}
console.log("La temperatura es: " + convertirCelsiusAFahrenheit(30) + "°F");
*/

//5. Objetos en JavaScript

//Ejercicio 1:

/* 
let persona = {
  nombre : "Lautaro",
  edad: 21,
  ciudad: "Mendoza",
  cambiarCiudad: function (nuevaCiudad){
    this.ciudad = nuevaCiudad;
  },
}
console.log(persona.nombre);
persona.cambiarCiudad("Maipu");
console.log(persona.ciudad);
*/

//Ejercicio 2:

/*
let libro = {
  titulo: "Harry Potter",
  autor: "Pablo Neruda",
  anio: 2019,
  anioPublicacion: function () {
    
    const añoActual = new Date().getFullYear();
    const antiguedad = añoActual - this.anio;

    if (antiguedad<10) {
      return true
    }else{
      return false
    }
  }
}

if (libro.anioPublicacion) {
  console.log(`El libro ${libro.titulo} es reciente`);
}else{
  console.log(`El libro ${libro.titulo} es antiguo`);
}
*/

//6. Arrays

//Ejercicio 1: 

/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayNuevo = [];

let elemento = numeros.map((el)=>{
  return el * 2
})
arrayNuevo.push(elemento);

console.log(numeros);
console.log(arrayNuevo);
*/

//Ejercicio 2:

/*
let pares = [];

for (let num = 0; pares.length < 10; num++) {

  if (num % 2 === 0){
    pares.push(num)
  }

}
console.log(pares);
*/

//7. Introducción al DOM

//Ejercicio 1:

/*
const button = document.getElementById('buttonColor')
const estiloDiv = document.getElementById('colorParrafo')

const estiloBoton = () => {

  if (estiloDiv.classList.contains('parrafoColor')) {
    return estiloDiv.classList.remove('parrafoColor')
  }else{
    estiloDiv.classList.add('parrafoColor')
  }
 
}

button.addEventListener("click",() =>{
  estiloBoton()
})
*/

//Ejercicio 2: 

/*
const nombre = document.getElementById('nombreInput')
const button = document.getElementById('alertaButton')

button.addEventListener('click', ()=>{

  const valor = nombre.value;
  
  alert('El nombre ingresado es: ' + valor)
})
*/

//8. Eventos DOM

//Ejercicio 1:

/*
const list = document.querySelectorAll('#list li')
console.log(list);

list.forEach(element => {
  element.addEventListener('click', function () {
    console.log('Texto del elemento: ', element.textContent);
  })
});
*/

//Ejercicio 2: 

/*
const campoTexto = document.getElementById('miCampoTexto')
const deshabilitarBoton = document.getElementById('desactivarBoton')
const habilitarBoton = document.getElementById('habilitarBoton')

deshabilitarBoton.addEventListener('click',()=>{
  campoTexto.disabled=true;
})

habilitarBoton.addEventListener('click',()=>{
  campoTexto.disabled = false
})
*/

//9. LocalStorage

//Ejercicio 1:

const sendButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");
const saveEmail = document.getElementById("saveEmail")


const getDataInput = () => {
    const emailInput = document.getElementById("mail").value;
    localStorage.setItem("emails", JSON.stringify({emailInput}))
    if(emailInput) {
        saveEmail.innerHTML = <p>Correo guardado: ${emailInput}</p>
    }
}

const deleteDataInput = () => {
    const emailRemove = localStorage.removeItem("emails")
    saveEmail.innerHTML = ""
}

sendButton.addEventListener("click", () => {
    getDataInput();
});

deleteButton.addEventListener("click", ()=>{
    deleteDataInput();
})