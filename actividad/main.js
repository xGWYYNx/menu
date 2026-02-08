import colors from 'colors';
import readline from 'readline-sync';
import funciones from './funciones.js';
import menuOperaciones from './menu.js';

let opcionesMenuOperaciones;
let entrada;

do { 
    
    console.log('                              ');
    console.log('                              ');
    console.log('                              ');
    menuOperaciones.Menu();
    console.log('                              ');
    console.log('                              ');
    console.log('                              ');
    
    do {        
        entrada = readline.question('Digite la opcion deseada: '.red);
        opcionesMenuOperaciones = Number(entrada);
        if (isNaN(opcionesMenuOperaciones)) {
            console.log("Entrada invalida, por favor digite un numero entero entre 1 y 5");
            opcionesMenuOperaciones = 0;
        }else if (opcionesMenuOperaciones % 1 !== 0) {
            console.log("No se permiten numeros decimales");
            opcionesMenuOperaciones = 0;
        }
    } while (opcionesMenuOperaciones === 0);



    console.log('------------------------------');
    console.log('                              ');

    switch (opcionesMenuOperaciones) {
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

    
    if (opcionesMenuOperaciones >= 1 && opcionesMenuOperaciones <= 4) { //Validar que la opcion ingresada este entre 1 y 4, si es asi, pedir los numeros

        const primerEnteroDigitado = readline.questionInt('Digite el primer numero: '.cyan);
        const segundoEnteroDigitado = readline.questionInt('Digite el segundo numero: '.cyan);
        console.log('------------------------------');
        console.log('                              ');
        console.log(`Numeros ingresados: ${primerEnteroDigitado} y ${segundoEnteroDigitado}`.green);
        console.log('                              ');
        console.log('------------------------------');
        
        

        switch (opcionesMenuOperaciones) {
            case 1:
                console.log(`Resultado de la suma: ${funciones.Sumar(primerEnteroDigitado, segundoEnteroDigitado)}`.cyan);
                break;
            case 2:
                console.log(`Resultado de la resta: ${funciones.Restar(primerEnteroDigitado, segundoEnteroDigitado)}`.cyan);
                break;
            case 3:
                console.log(`Resultado de la multiplicacion: ${funciones.Multiplicar(primerEnteroDigitado, segundoEnteroDigitado)}`.cyan);
                break;
            case 4:
                if (primerEnteroDigitado === 0 || segundoEnteroDigitado === 0) {
                    console.log('Numero Invalido, no se puede dividir por 0');
                    
                }else{
                    console.log(`Resultado de la division: ${funciones.Dividir(primerEnteroDigitado, segundoEnteroDigitado).toFixed(2)}`.cyan);
                }
                break;
        }
    }

} while (opcionesMenuOperaciones !== 5);



