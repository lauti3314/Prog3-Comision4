"use strict";
//Ejercicio 3
let stringVar = "Hola, TypeScript!";
let numberVar = 14;
let booleanVar = true;
let dateVar = new Date();
const container = document.getElementById("tipoDeDatos");
container.innerHTML = `
<p>String: ${stringVar}</p>
<p>Number: ${numberVar}</p>
<p>Boolean: ${booleanVar}</p>
<p>Date: ${dateVar.toLocaleDateString()}</p>
`;
//Ejercicio 4
let number = 14;
function convertNumber(number) {
    let cadenaNum;
    cadenaNum = number.toString();
    return cadenaNum;
}
const numContainer = document.getElementById("arraynumber");
numContainer.innerHTML = `
<p>Numero convertido a cadena: ${convertNumber(number)}</p>
`;
//Ejercicio 5
let arrayNumero = [1, 2, 3, 4, 5];
function sumaNumeros(arrayNumero) {
    let sum = 0;
    for (let index = 0; index < arrayNumero.length; index++) {
        sum += arrayNumero[index];
    }
    return sum;
}
let cadenaSum = document.getElementById("arraySuma");
cadenaSum.innerHTML = `
<p>Suma del array: ${sumaNumeros(arrayNumero)}</p>
`;
//Ejercicio 6
const estudiante = {
    nombre: "Lautaro Tejada",
    edad: 21,
    curso: "Programación"
};
let student = document.getElementById("claseEstudiante");
student.innerHTML = `
<p>Estudiante: ${estudiante.nombre}</p>
<p>Edad: ${estudiante.edad}</p>
<p>Curso: ${estudiante.curso}</p>
`;
const direccion = {
    calle: "San Martin",
    ciudad: "Godoy Cruz",
    codigoPostal: 5513
};
const direc = document.getElementById("typePersonalizado");
direc.innerHTML = `
<p>Calle: ${direccion.calle}</p>
<p>Ciudad: ${direccion.ciudad}</p>
<p>Código Postal: ${direccion.codigoPostal}</p>
`;
let usuario = {
    nombre: "Lautaro Tejada",
    correo: "lautaro3314@hotmail.com",
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};
const inter = document.getElementById("interfaz");
inter.innerHTML = usuario.saludar();
//Ejercicio 9
class Persona {
    constructor(name, edad) {
        this.edad = edad;
        this.name = name;
    }
    presentar() {
        return `Hola mi nombre es ${this.name} y tengo ${this.edad} años.`;
    }
}
const persona1 = new Persona("Lautaro Tejada", 21);
const conteinerClass = document.getElementById("divClass");
conteinerClass.innerHTML = persona1.presentar();
//Ejecicio 10
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
const caja = new Caja("Mensaje Secreto");
const caja2 = new Caja(14);
const cajaContainer = document.getElementById("divGeneric");
cajaContainer.innerHTML = `
<p>Contenido de cajaDeTexto: ${caja.obtenerValor()}</p>
<p>Contenido de cajaDeNumero: ${caja2.obtenerValor()}</p>
`;
//Ejercicio 11
function identidad(num) {
    return num;
}
const numIdentidad = identidad(123);
const textIdentidad = identidad("texto");
const identContainer = document.getElementById("funcionDiv");
identContainer.innerHTML = `
<p>Identidad del número: ${numIdentidad}</p>
<p>Identidad del texto: ${textIdentidad}</p>
`;
//Ejercicio 12
var Colores;
(function (Colores) {
    Colores["Rojo"] = "Rojo";
    Colores["Blanco"] = "Blanco";
    Colores["Negro"] = "Negro";
})(Colores || (Colores = {}));
const colorFav = Colores.Rojo;
const colorContainer = document.getElementById("enumDiv");
colorContainer.innerHTML = `
<p>Color favorito: ${colorFav}</p>
`;
