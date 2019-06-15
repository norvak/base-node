// requierds

const fs = require('fs');

let listarTabla  = (base, limite = 5) => {
    for (let i=1; i<=limite; i++) {
       console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearDocumento = (base, limite = 5) => {

    return new Promise( (resolve, reject) => {

        if ( !Number(base)) {
            reject(`Èl valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        // Tabla de multiplicar solo cambiar la base
        for (let i=1; i<=limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        // registrar un archivo en la ruta solicitada
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            
            if(err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }
            
           
        });
    })
}

module.exports = {
    crearDocumento,
    listarTabla
}


