/*Ejercicio 7 – Dado el siguiente array 
datos1 = [“Fido”,”Gomez”,26,15000.78,true] 
datos2 = [“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
¿Cuál de los dos personajes es más viejo?
¿Cuál de los dos personajes está casado?
Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el
monto a cobrar?*/



datos1 = ["Fido","Gomez",26,15000.78,true];
datos2 = ["Gervasio","Fernandez",32,28.550,false];

console.log("Quien es mas grande?");
var = i;
for (i=0;i<datos1.length; i++){
	if(((Number.isInteger(datos1[i]) && Number.isIneger(datos2[i])) && (datos1[i] > datos2[i])) {
	console.log("Fido es mayor");
  }else{
  console.log("Fido es menor");
  }
  if (typeof(datos1[i]) == "boolean" && typeof(datos2[i])){
  	if (datos1[i]) { console.log ("Casado")}
    else if (datos2[i] === true) {console.log ("Soltero")}
  }
};