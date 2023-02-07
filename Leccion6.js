let compra=["yerba","cafe","jabon","leche", "queso", "tomate","pizza"]
compra.push("Aceite de Girasol");
compra.pop()

let peliculas=[
    {nombre:"Red Social",director:"David Fincher", fecha: new Date(2010,8,21)},
    {nombre:"La Gran Apuesta",director:"Adam McKay", fecha: new Date(2016,1,7)},
    {nombre:"Huye!",director:"Jordan Peele", fecha: new Date(2017,2,24),}
]
fechapos= new Date(2010,1,1)
const pelisnuevas=peliculas.filter(obj=>obj.fecha>fechapos)

const arrayDirector=peliculas.map(a=>a.director)
const arrayOriginal=peliculas.map(a=>a.nombre)
const arrayConcat=arrayOriginal.concat(arrayDirector)
const arrayFactor=[...arrayDirector,...arrayOriginal]
