// //requireds
// const fs = require('fs');

// //const fs = require('express'); importar paquetes que no son nativos 

// //const fs = require('./fs'); importar paquetes de código que nosotros mismo hayamos creados. 


// let base = 5;
// let data = '';
// for (i = 0; i <= 10; i++) {
//     data += `${base} * ${i} = ${base * i}\n`;
// };


// fs.writeFile(`tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });


// const { alias } = require('yargs');

const { argv } = require('./config/yarg.js');
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo.red}`)).catch((e) => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}

// let argv2 = process.argv;
// // let parametro = argv[2];
// // let base = parametro.split('=')[1];

// console.log('Limite', argv.limite)
console.log(argv);
// console.log(argv2);