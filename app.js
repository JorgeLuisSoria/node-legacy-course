const { crearArchivo } = require('./helpers/multiplicar');

console.clear();


// console.log( process.argv );
// const [ , , arg3] = process.argv;
const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');

// console.log( base );
// console.log( arg3 );
// const base = 5;

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'created') )
    .catch( err => console.log(err) );