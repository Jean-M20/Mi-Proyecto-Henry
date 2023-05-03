//Este bucle se usa cuando sabemos la cantidad de pasos que vamos a necesitar

var suma= 0;

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
}
 console.log('Variable suma: ', suma);

//Es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución

while(suma < 3) {
   suma = suma + 1;
       console.log(suma);
};