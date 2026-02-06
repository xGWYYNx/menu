import colors from 'colors';
import readline from 'readline-sync';
import funciones from './funciones.js';

let opcion;

do { 
    funciones.menu();
    opcion = readline.questionInt('Digite la opcion deseada: '.red);

    switch (opcion) {
        case 1:
            console.log('Elegiste SUMAR'.green);
            break;
        case 2:
            console.log('Elegiste RESTAR'.yellow);
            break;
        case 3:
            console.log('Elegiste MULTIPLICAR'.blue);
            break;
        case 4:
            console.log('Elegiste DIVIDIR'.cyan);
            break;
        case 5:
            console.log('Saliendo del programa...'.red);
            break;
        default:
            console.log('Opción no válida'.bgRed);
    }

    
    if (opcion >= 1 && opcion <= 4) { //Validar que la opcion ingresada este entre 1 y 4, si es asi, pedir los numeros

        const num1 = readline.questionInt('Digite el primer numero: '.cyan);
        const num2 = readline.questionInt('Digite el segundo numero: '.cyan);

        console.log(`Numero 1: ${num1}`);
        console.log(`Numero 2: ${num2}`);
        switch (opcion) {
            case 1:
                console.log(`Resultado de la suma: ${funciones.sumar(num1, num2)}`.cyan);
                break;
            case 2:
                console.log(`Resultado de la resta: ${funciones.restar(num1, num2)}`.cyan);
                break;
            case 3:
                console.log(`Resultado de la multiplicacion: ${funciones.multiplicar(num1, num2)}`.cyan);
                break;
            case 4:
                if (num1 === 0 || num2 === 0) {
                    console.log('Numero Invalido, no se puede dividir por 0');
                    
                }else{
                    console.log(`Resultado de la division: ${funciones.dividir(num1, num2)}`.cyan);
                }
                break;
        }
    }

} while (opcion !== 5);



