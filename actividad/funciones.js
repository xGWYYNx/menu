import colors from 'colors';

const Sumar = (primerEnteroDigitado, segundoEnteroDigitado) => {
    if (typeof primerEnteroDigitado === 'number' && typeof segundoEnteroDigitado === 'number') {
        return primerEnteroDigitado + segundoEnteroDigitado;
    } else {
        return 'Error: Ambos argumentos deben ser numeros';
    }    
}
const Restar = (primerEnteroDigitado, segundoEnteroDigitado) => {
    if (typeof primerEnteroDigitado === 'number' && typeof segundoEnteroDigitado === 'number') {
        return primerEnteroDigitado - segundoEnteroDigitado;
    } else {
        return 'Error: Ambos argumentos deben ser numeros';
    }    
}
const Multiplicar = (primerEnteroDigitado, segundoEnteroDigitado) => {
    if (typeof primerEnteroDigitado === 'number' && typeof segundoEnteroDigitado === 'number') {
        return primerEnteroDigitado * segundoEnteroDigitado;
    } else {
        return 'Error: Ambos argumentos deben ser numeros';
    }
};

const Dividir = (primerEnteroDigitado, segundoEnteroDigitado) => {
    if (typeof primerEnteroDigitado === 'number' && typeof segundoEnteroDigitado === 'number') {
        if (segundoEnteroDigitado === 0 || primerEnteroDigitado === 0) {
            return 'Error: no se puede dividir por cero';
        }
        return primerEnteroDigitado / segundoEnteroDigitado;
    } else {
        return 'Error: Ambos argumentos deben ser numeros';
    }
};



const numerosAleatorios = () =>{
    return Math.random( ) * 20;
}

const funciones = {
    Sumar,
    Restar,
    Multiplicar,
    Dividir,
    numerosAleatorios
}

export default funciones;