/*

Ejercicio 6 


– Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
•
•
•
Ambos arreglos son iguales
Cuál de los dos es más largo
Cuantas letras tienen en común
*/



var x = [“a”,”l”,”f”,”a”];
var y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”];

var distinto = false;
var xL = x.length;
var yL = y.length;
var N;
var M;

if (xL == yL){ //son iguales 

for(i=0;i<x.length;i++){ 
	if (xL[i] != yL[i]){ // son dist8into
		distinto = true;
}
}


}else{

if(xL > yL){
console.log("x es mas largo");
N = yL; //controla el for de afuera
M = xL; //controla el for de adentro 
}else{
console.log("y es mas largo")
N = xL;
M = yL;
}
}
