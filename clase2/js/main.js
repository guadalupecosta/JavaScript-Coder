/* Clase 2 - Control de flujos
IF
    Si(se cumple esta condición){
        hace esto
    } sino / de otro modo {
        hace esto otro
    }
*/

// variables booleanas
/*let llueve = false 

if(llueve){
    console.log("Llevá paraguas")
}else{
    console.log("No lleves paraguas")
}*/

/* Operadores de JS
        = --> asignación
        == --> comparación
        === --> comparación estricta
        < --> menor | <= --> menor o igual
        > --> mayor | >= --> mayor o igual
        & --> AND --> ambos lados son true
        || --> OR --> al menos uno es true


Comparación:
let clima = "soleado"
let comparacion = (clima == "lluvioso")

if(comparacion){
    console.log("Podes ir a la playa")
}else{
    console.log("Te quedas en casa")
}

let nombreIngresado = prompt("Ingresá tu nombre")

let validacionNombreIng = (nombreIngresado == "")

if(validacionNombreIng){
    console.log("No ingresaste un nombre")
}else{
    console.log("Hola " + nombreIngresado)
}

Condiciones anidadas:

let edadIngresada = 17

let edadObligatoria = 18
let edadOptativaMinima = 16

let mayoresDeEdad = edadIngresada >= edadObligatoria //false
let mayoresDeEdadOptativa = edadIngresada >= edadOptativaMinima //true

if(mayoresDeEdad){
    console.log("Tenes que ir a votar")
}else if(mayoresDeEdadOptativa){
    console.log("Podes ir a votar")
}else{
    console.log("No podes votar")
}

let edadIngresada = prompt("Ingresá tu edad:")

let edadObligatoria = 18
let edadOptativaMinima = 16
let edadOptativaMaxima = 70
let dni = confirm("Trajiste el DNI?")

let mayoresDeEdad = edadIngresada >= edadObligatoria
let mayoresDeEdadOptativa = edadIngresada >= edadOptativaMinima
let menoresDeSetenta = edadIngresada < edadOptativaMaxima
let mayoresDeSetenta = edadIngresada >= edadOptativaMaxima

if((mayoresDeEdad && menoresDeSetenta) && dni){
    console.log("Tenes que ir a votar")
}else if((mayoresDeEdadOptativa || mayoresDeSetenta) && dni){
    console.log("Podes ir a votar")
}else{
    console.log("No podes votar")
} */