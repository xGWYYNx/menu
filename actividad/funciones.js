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
        if (num2 === 0) {
            return 'Error: no se puede dividir por cero';
        }
        return num1 / num2;
    } else {
        return 'Error: Ambos argumentos deben ser numeros';
    }
};

const menu = () =>{
    console.log('             ','                               '.bgBlue);
    console.log('             ','*            MENU             *'.bgBlue);
    console.log('             ','*******************************'.bgBlue);
    console.log('             ','* 1.Sumar dos números          '.bgBlue);
    console.log('             ','* 2.Restar dos números         '.bgBlue);
    console.log('             ','* 3.Multiplicar dos números    '.bgBlue);
    console.log('             ','* 4.Dividir dos números        '.bgBlue);
    console.log('             ','* 3.Salir                      '.bgBlue);
    console.log('             ','*******************************');
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