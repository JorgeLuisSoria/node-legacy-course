
const fs = require('fs');


console.clear();
console.log('=======================');
console.log('  Tabla del número 5');
console.log('=======================');

// Imprimir la tabla del 5

const base = 13;
let salida = '';

for( let i = 1; i <= 10; i++ ) {
    salida += `${ base } x ${ i } = ${ base * i }\n`;
}

console.log( salida );

// fs.writeFile(`tabla-${ base }.txt`, salida, ( err ) => {
//     if (err) throw err;

//     console.log(`tabla-${ base } has been created`);
// });

fs.writeFileSync( `tabla-${ base }.txt`, salida );

console.log(`tabla-${ base }.txt has been created`);