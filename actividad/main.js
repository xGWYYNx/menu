import colors from 'colors';
import readline from 'readline-sync';
import funciones from './funciones.js';

funciones.menu();

const opcion = readline.questionInt('Digite la opcion deseada: '.red);

let num1 = funciones.numerosAleatorios();
let num2 = funciones.numerosAleatorios();

console.log(`Numero 1: ${num1}`);
console.log(`Numero 2: ${num2}`);

switch (opcion) {
    case 1:
        console.log(`Resultado suma: ${funciones.sumar(num1, num2)}`.cyan);
    break;

    case 2:
        console.log(`Resultado resta: ${funciones.restar(num1, num2)}`.cyan);
    break;

    case 3:
        console.log(`Resultado multiplicacion: ${funciones.multiplicar(num1, num2)}`.cyan);
    break;

    case 4:
        console.log(`Resultado division: ${funciones.dividir(num1, num2)}`.cyan);
    break;

    case 5:
        console.log('Saliendo del programa...'.g);
    break;

    default:
    console.log('Opcion invalida'.red);
}


