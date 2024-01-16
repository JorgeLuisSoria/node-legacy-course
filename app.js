const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const base = 151;

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'created') )
    .catch( err => console.log(err) );