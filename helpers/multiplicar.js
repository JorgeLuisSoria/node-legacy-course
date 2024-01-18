const fs = require('fs');
const { options, argv } = require('yargs');


const crearArchivo = async( base = 5, listar=true ) => {

    try {
        if( listar ) {
            console.log('=======================');
            console.log('   Tabla del:', base    );
            console.log('=======================');
        }
        let salida = '';
    
        for( let i = 1; i <= 10; i++ ) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
        
        if( listar ) { console.log( salida ) };        
    
        fs.writeFileSync( `tabla-${ base }.txt`, salida );
    
        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw err;
    }


}

// const crearArchivo = ( base = 5 ) => {

//     return new Promise( (resolve, reject) => {

//         console.log('=======================');
//         console.log('   Tabla del:', base    );
//         console.log('=======================');
    
//         let salida = '';
    
//         for( let i = 1; i <= 10; i++ ) {
//             salida += `${ base } x ${ i } = ${ base * i }\n`;
//         }
    
//         console.log( salida );
    
//         fs.writeFileSync( `tabla-${ base }.txt`, salida );
    
//         resolve(`tabla-${ base }.txt`);
//     })

// }

module.exports = {
    crearArchivo
}