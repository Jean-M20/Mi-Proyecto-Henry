//Función Viajar
function viajar (destino){
    if (destino === 'Brasil') {
        console.log('Gire a la Izquierda')
    } else if (destino === 'Argentina') {
        console.log('Gire a la Derecha')
    } else {
        console.log('Nos Perdimos');
    }
};
viajar('Argentina');
viajar('Brasil')


//Función Puede Manejar
function puedeManejar (edad) {
    if(edad >= 18) {
        console.log(true);
    } 
    console.log(false);
}

puedeManejar(17);