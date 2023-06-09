//Paramentros y propiedades y funcion constructora

function Auto(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    this.informacion = function(){return 'Este es un' + this.marca + ' de color' + this.color; };
}

var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

return miPrimerAuto.informacion
return miPrimerAuto.marca;

// Expresion de clase

class Auto{
    constructor(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    }
}
var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);

return miSegundoAuto;

//Asosiar metodos

class Football{ 
    constructor(jugador){
        this.jugador = jugador;
    }
    obtenerNombre(){return this.jugador};}

    var argentina = new Football('Messi');
    var brasil = new Football('Pele');

    argentina.obtenerNombre();
    brasil.obtenerNombre();