const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yarg');
const colors = require('colors');


console.clear();

// console.log( process.argv );

// console.log( argv );

// console.log( 'base: yargs', argv.base );

// console.log( process.argv );
// const [ , , arg3] = process.argv;
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

// console.log( base );
// console.log( arg3 );
// const base = 5;

crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'created') )
    .catch( err => console.log(err) );