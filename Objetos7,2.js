/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo 
  objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/

const miObjeto={
    nombre:"Alan",
    apellido:"Rodriguez",
    edad:32,
    altura:1.84,
    eresDesarrollador: true,
    
}

let miedad=miObjeto.edad

let listamia=new Array(miObjeto.nombre,miObjeto.apellido,miObjeto.edad,miObjeto.altura,miObjeto.eresDesarrollador)


const amigos={
    nombre:"Juan",
    apellido:"Sabena",
    edad:31,
    altura:1.86,
    eresDesarrollador: false,
    nombre2:"Juan",
    apellido2:"Sabena",
    edad2:31,
    altura2:1.86,
    eresDesarrollador2: false,
}
