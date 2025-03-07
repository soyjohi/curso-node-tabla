const fs = require('fs');
const {crearArchivoPromesa} = require('./helpers/multiplicar');
const { options } = require('yargs');
const argv= require ('./config/yargs');
const colors = require('colors');
const { constants } = require('buffer');




console.clear();

console.log(process.argv);
console.log(argv);

    crearArchivoPromesa(argv.b, argv.l, argv.h)
    .then(NombreArchivo => {
        console.log(NombreArchivo.rainbow, 'creada');  // Aquí manejamos el resultado exitoso
    })
    .catch(error => {
        console.log(error);  // Aquí manejamos el error
    });