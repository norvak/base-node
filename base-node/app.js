// requierds
/*
const fs = require('fs');
// const fs = require('express'); 
// const fs = require('./s');  se usa para identidicar el archivo que se esta usando
let base = 2;
let data = '';
*/
// Tabla de multiplicar solo cambiar la base
/* for (let i=1; i<=10; i++) {
     data += `${base} * ${i} = ${base * i}\n`;
 }
*/

// registrar un archivo en la ruta solicitada
/* fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    
    if(err) throw err;
    
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});
*/
/** 
 * TODO: npm init para crear el packa ge.json
 * !! ejem: node app --base=1; ejecutar desde la terminal
 * * Esta funcion recibe los paramentro desde la terminal 
*/
const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar', {
                    base: {
                        demand: true, 
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .command('crear','genera un archivo con la tabla de multiplicar', {
                    base: {
                        demand: true, 
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .help()
                .argv;
const { crearDocumento, listarTabla } = require('./multiplicar/multiplicar');
   
let comando = argv._[0];
 /**
 * !! Otra forma Funcion para simplificar codigo
 */
switch( comando ) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':       
        crearDocumento(argv.base, argv.limite).then(archivo => console.log(`Àrchivo creado: ${archivo}`))
        .catch (err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}



// envia la ubicacion del archivo (ENVIA UN PARAMETRO O ARGUMENTOS)
//let argv   = process.argv;
// Enviamos la posicion que necesitamos
//let parametro = argv[2];
// el split es para separar elementos (convertir de un string a un arreglo)
//let base = parametro.split('=')[1];



