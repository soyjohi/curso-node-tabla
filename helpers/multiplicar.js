
const colors = require('colors');
const fs = require('fs');
const crearArchivoPromesa = async (base = 5, listar=false, hasta = 20) => {

try{           
    let salida = '';
    let consola = '';
    
    for ( let i= 1 ; i <= hasta; i ++) {
    salida += `${base} X ${i} = ${base * i} \n` ;
    consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i} \n` ;
    
}
if (listar)
    {
    console.clear();
    console.log ('========================='.cyan);
    console.log ('     Tabla del: '.yellow, colors.blue(base));
    console.log ('========================='.cyan);
    
    console.log (consola);
} 

fs.writeFileSync (`./salida/tabla-${base}.txt`, salida);
return `tabla-${base}.txt`;
} catch (err) {
    throw(err);
}
    

}

module.exports ={
     crearArchivoPromesa
}