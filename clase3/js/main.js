/* Ciclos === iteraciones === bucles === loops
Repetir una cantidad de veces una tarea.

Ciclo for: se utiliza cuando sabemos exactamente cuantas veces se quiere repetir el ciclo.

Estructura:
for(desde; hasta; incremento/actualización){
    lo que se escriba acá, 
    se ejecutará mientras dure el ciclo.
}

for estático:
for(let inicio = 0; inicio <= 10; inicio = inicio + 1){
    console.log("Iteración número:", inicio)
}

for dinámico:
let total = +(prompt("Ingresá un número"))

if (!isNaN(total)){
    for(let i = 0; i <= total; i++){
        console.log("Iteración del ciclo for dinámico número", inicio)
    }
} else {
    console.log("Error")
}

isNaN = esto no es un número?

Otro ejemplo:
let numeroIngresado = +(prompt("Ingresá un número"))

if (!isNaN(numeroIngresado)){
    for(let i = 1; i <= 10; i++){
        let multiplicacion = numeroIngresado * i
        //console.log("Iteración del ciclo for dinámico número", inicio)
        console.log(`${numeroIngresado} x ${i} = ${multiplicacion}`)
    }
} else {
    console.log("Error")
}

`` > backticks

Arrays
Empiezan con el índice en 0 (0, 1, 2,...)

Hay distintos console: .log, .table, .warn, etc


const paises = ["Brasil", "Argentina", "Francia", "Paraguay", "Chile", "Ecuador", "Colombia", "Uruguay", "Peru", "Venezuela"]
//                  0          1           2           3         4         5           6          7        8          9

for(let i = 0; i < paises.length; i++){
    console.log(paises[i])
}

sentencia break = sale del ciclo
for(let i = 0; i < paises.length; i++){
    if(paises[i] === "Brasil"){
        break
    }
    console.log(paises[i]);
    // si ponemos el if antes, no se imprime Brasil.
}

sentencia continue = saltea una iteración
for(let i = 0; i < paises.length; i++){
    if(paises[i] === "Brasil"){
        continue
    }
    console.log(paises[i]);
}

ciclo while (mientras): no se sabe exactamente cuantas iteraciones se quieren hacer, sino cual condición.
se ejecuta cero o más veces

let bucle = true 
while(bucle === true){
    console.log("Hola")
    bucle = confirm("Querés imprimir 'hola' nuevamente?")
}

let login = true
while(login === true){
    let user = prompt("Ingrese su usuario")
    let pass = prompt("Ingrese su contraseña")

    let validacion = (user === "Jona" && pass === "messi")
    if(validacion){
        alert(`Bienvenido ${user}`)
        login = false
        break
    }
    alert("Usuario y/o contraseña incorrecto")
}

do...while (hace esto mientras): se ejecuta por lo menos una vez y después evalua la condición.

let condicion = true
let user = "Guada"
let passGuardada = "messi"

do{
    let pass = prompt("Ingrese la pass")
    if(pass === passGuardada){
        alert(`Bienvenido ${user}`)
        condicion = false
    } else {
        alert("contraseña incorrecta")
    }
} while(condicion)

let contador = 0
let passGuardada = "messi"

do{
    let passIngresada = prompt("Ingresa tu pass")

    if(passIngresada != passGuardada){
        contador += 1
        alert(`Incorrecto, vas ${contador} de 3 intentos`)
    }
    if(passGuardada === passIngresada){
        console.log("Bienvenido Messi")
        break
    }
} while(contador < 3)

switch: estructura de control
*/

let opciones = prompt(`Elegir jugador favorito (con números): \n
    1- Messi\n
    2- Julian\n
    3- Cuti\n
    4- Dibu\n
    5- De Paul`)

switch(opciones){
    case "1":
        console.log("Seleccionaste a la opcion nr1")
        break
    case "2":
        console.log("Seleccionaste a la opcion nr2")
        break
    case "3":
        console.log("Seleccionaste a la opcion nr3")
        break
    case "4":
        console.log("Seleccionaste a la opcion nr4")
        break
    case "5":
        console.log("Seleccionaste a la opcion nr5")
        break
    default:
        console.log("opcion invalida")
        break     
}