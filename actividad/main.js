import colors from 'colors';
import readline from 'readline-sync';
import funciones from './funciones.js';

let opcion;

do { 
    console.log('                              ');
    console.log('                              ');
    console.log('                              ');
    funciones.menu();
    console.log('                              ');
    console.log('                              ');
    console.log('                              ');

    opcion = readline.questionInt('Digite la opcion deseada: '.red);

    console.log('------------------------------');
    console.log('                              ');

    switch (opcion) {
        case 1:
            console.log('Elegiste SUMAR'.green);
            break;
        case 2:
            console.log('Elegiste RESTAR'.gray);
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
    
    console.log('                              ');
    console.log('------------------------------');
    console.log('                              ');

    
    if (opcion >= 1 && opcion <= 4) { //Validar que la opcion ingresada este entre 1 y 4, si es asi, pedir los numeros

        const num1 = readline.questionInt('Digite el primer numero: '.cyan);
        const num2 = readline.questionInt('Digite el segundo numero: '.cyan);
        console.log('------------------------------');
        console.log('                              ');
        console.log(`Numeros ingresados: ${num1} y ${num2}`.green);
        console.log('                              ');
        console.log('------------------------------');
        
        

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



