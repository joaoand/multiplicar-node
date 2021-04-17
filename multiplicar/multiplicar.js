const fs = require('fs');
const { number } = require('yargs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('===================='.green);
    console.log(`===tabla de ${base}===`.green);
    console.log('===================='.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) | !Number(limite)) {
            reject(`El valor introducido ${base} no es un número`);
            return
        }

        let data = '';
        for (i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)

            else
                resolve(`tabla-${base}.txt`);

        });

    });
}

module.exports = { crearArchivo, listarTabla }