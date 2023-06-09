//Objetos y asignar objetos
var deportes = {
    conBalon: ['Footbal', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

//Cambiar a objetos
var persona = {nombre: "Lucas", edad: 26, estudios: {esProgramador: true}};

persona.nombre = "Martin";

persona.edad = 34;

//Borrar objetos
var autos = {}
autos.marcas = ["Ford", "Audi", "Ferrari"];

delete autos.marcas;

//Dot notation y Bracket notation
var misFunciones = {saludar: function () {console.log("Hola")}};

var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Sandalias']};

return atuendos.manos;

atuendos["piernas"] = ['Bermudas', 'Pantalones'];

return atuendos;

var comidas = {};
var diferenciasDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburgesa', 'PapasFritas'];
};
diferenciasDeNotaciones('saludable', 'noSaludable');
return comidas;

//hasOwnProperty y Object.keys
var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('nombre');
return tienePropiedad;

var todasLasPropiedades = Object.keys(libro);
return todasLasPropiedades;

var mundo = {continente: 7, paises: 195, oceanos: 5};
for(var prop in mundo){
    return("Esta es la propiedad:" + prop)
    return("Este es el valor:" + mundo[prop]);   
}

//This
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Aleman',
    amisotoso: true,
    dueña: 'Maria Lopez',
    info: function () {
        return "Mi perro es un" + this.raza;
    }
};
