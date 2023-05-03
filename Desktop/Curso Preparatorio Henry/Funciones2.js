function cuidadoConElConsolelog(nombre){
    console.log(nombre);
}

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsolelog('Jean')
    );
}

function cuidadoConElReturn (nombre) {
    return nombre;
    console.log(nombre)
}