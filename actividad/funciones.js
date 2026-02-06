import colors from 'colors';

const sumar = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return 'Error: Ambos argumentos deben ser numeros';
    }    
}
const restar = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 - num2;
    } else {
        return 'Error: Ambos argumentos deben ser numeros';
    }    
}
const multiplicar = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 * num2;
    } else {
        return 'Error: Ambos argumentos deben ser numeros';
    }
};

const dividir = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (num2 === 0 || num1 === 0) {
            return 'Error: no se puede dividir por cero';
        }
        return num1 / num2;
    } else {
        return 'Error: Ambos argumentos deben ser numeros';
    }
};

const menu = () =>{
    console.log('             ','                                       '.bgGreen);
    console.log('             ','  '.bgGreen,'                                 ','  '.bgGreen,'            ',);
    console.log('             ','  '.bgGreen,'              MENU               ','  '.bgGreen,'            ',);
    console.log('             ','  '.bgGreen,'                                 ','  '.bgGreen,'            ',);
    console.log('             ','                                       '.bgGreen);
    console.log('             ','  '.bgGreen,'                                 ','  '.bgGreen,'            ',);
    console.log('             ','  '.bgGreen,'     1.Sumar dos números         ','  '.bgGreen,'            ',);
    console.log('             ','  '.bgGreen,'     2.Restar dos números        ','  '.bgGreen,'            ',);
    console.log('             ','  '.bgGreen,'     3.Multiplicar dos números   ','  '.bgGreen,'            ',);
    console.log('             ','  '.bgGreen,'     4.Dividir dos números       ','  '.bgGreen,'            ',);
    console.log('             ','  '.bgGreen,'     5.Salir                     ','  '.bgGreen,'            ',);
    console.log('             ','  '.bgGreen,'                                 ','  '.bgGreen,'            ',);
    console.log('             ','                                       '.bgGreen);
    
}

const numerosAleatorios = () =>{
    return Math.random( ) * 20;
}

const funciones = {
    sumar,
    restar,
    multiplicar,
    dividir,
    menu,
    numerosAleatorios
}

export default funciones;