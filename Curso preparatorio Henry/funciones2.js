function cuidadoConElConsolelog(nombre) {
    console.log(nombre); return nombre;
}

function otraFuncion() {
    return ("El nombre retornado por la funcion 'cuidadoConElConsolelog' es: " + 
        cuidadoConElConsolelog("Camillo")
    );
}