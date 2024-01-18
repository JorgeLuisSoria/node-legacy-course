const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false
            })
            .check( (argv, options) => {
                if( isNaN(argv.b) ){
                    throw 'La base tiene que ser un número'
                }
                return true
            })
            .argv;

console.clear();

// console.log( process.argv );

console.log( argv );

// console.log( 'base: yargs', argv.base );

// console.log( process.argv );
// const [ , , arg3] = process.argv;
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

// console.log( base );
// console.log( arg3 );
// const base = 5;

crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo, 'created') )
    .catch( err => console.log(err) );