// console.log('hola mundo')
// var string;('hola gente de yutu');
// let MiPrimeraVariable = 'mi primera variable'
// console.log(MiPrimeraVariable);


// MiPrimeraVariable = 'esto ha cambiado'
// console.log(MiPrimeraVariable);

// let miboolean = true
// let miOtroBoolean = false

// let miNumero1 = 0 
// let miNumero2 = 12 
// let miNumero3 = 21


// let undef
// console.log(undef);

// let nulo = null

// console.log(nulo);

// const miprimerObjeto = {
//     unNumero: 12,
//     unstring: 'Esta cadena de caracteres',
//     unacondicion: true,
// };


// console.log(miprimerObjeto);


// const suma = 1 + 2 
// const restar = 1 - 4
// const multiplicacion = 2 * 5
// const division = 5 / 3 
// console.log(suma,restar,multiplicacion,division)

// const modulo = 10 % 3
// console.log(modulo)

// const num = 5 
// console.log(modulo)

// num+
// num+
// num+
// num+
// num+
// console.log(num)


// const resultado1 = 5 === 6
// const resultado2 = 5 === '5'

// const resultado3 = 5<6
// const resultado4 = 5<5
// const resultado5 = 5<5
// const resultado6 = 5<4
// const resultado7 = 5<3
// const resultado8 = 5<34
// const resultado9 = 5<2
// const resultado10 = 5<6

// const resultado11 = 5<1
// const resultado12 = 5<63
// console.log(resultado3,resultado4)


// const edad = 5
// if (edad > 5 && edad < 13) {
// console.log('el niño puede jugar')
// } else {
//     console.log('no puede jugar')
// }


// let x = false;
// while (x) {
//     console.log(x)
//    x = false
// }

// switch(lala) {
// case 1: {
//     console.log('yo soy el caso 1')
//     break
//     }

// case 2: {
//     console.log('chanchito feliz')
//     break;
//         }

// case 3: {
//     console.log('no hay chanchito feliz')
//      break;
// }
// default: 
//     console.log('no hay chanchito')
//     break;
// }      


// console.log(numeros[2]);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// function iterar(arg1) {
//     for(let i = 0; i < arg1.length; i++) {
//         console.log(arg1[i]);
//     }  
// }
// const numeros = [1,2,'hola',4,5]
// const nombres = ['pedro','juan','felipe','chanchito feliz','chanchito triste']
// iterar(nombres)
// iterar(numeros)


// function suma(a, b) {
//     return a + b;
// }

// const resultadosuma1 = suma(1,2)
// const resultadosuma2 = suma(5,6)
// const resultadosuma3 = suma(resultadosuma1,resultadosuma2)
// console.log('resultado',resultadosuma3);


 function sumar(a,b,cb) {
 const r = a + b
 cb(r)
 }

function callback(result) {
    console.log('resultado', result)
 }

// sumar(2,3,callback)

// Primera foorma de llamar arrowfunction
// const mifatarrowfunction = (a,b) => a + b 
// const r = mifatarrowfunction(1,2)
// console.log(r)
// segunda forma
const fatArrowfunctions = (a,b) => a + b
const otraFAF = (a,b) => {
    return a + b
}
const r = otraFAF (1,2)
console.log(r);

// funciones anonimas


sumar(2,3,function (r) {
console.log('soy una funcion anonima y mi resultado es', r)
})