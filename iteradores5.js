

//Ejercicio 5 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10],
//mostrar por pantalla el valor máximo y la cantidad de veces que se repite.


//tengo un conjunto de numero tengo que buscar cual es el mayor

var x = [10,24,36,7,98,11,20,98,14,98]
var i; //indice
var time=0;
var mayor = x[0]; //condiciono un valor al pone 0

for (var i=0; i < x.length; i++){
if (x[i] >= mayor){
if (mayor==x[i]){
time = time +1;
}else{
	time =0;
}
mayor=x[i];
} 
}
console.log("el valor " +mayor+"es el valor mayor");


//maximo (quiero contar la cantidad de numeros repetidos que son maximos)