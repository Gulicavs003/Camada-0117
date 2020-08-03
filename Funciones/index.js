// EJERCICIO 1
/* 
function Nucba() {

    console.log("Hola Nucba")
}

Nucba()   */

// EJERCICIO 2
/* var nombre = "Hernan"
decirNombre(nombre)


function decirNombre(nombre){
        console.log("Hola" + nombre)
} */

// EJERCICIO 3
/*
console.log(factorial(4))

function factorial (numero){
    let resultado = 1 
    for(i = 1; i<= numero; i++)
    {
        resultado = resultado * i
    }
    return resultado
} */

// EJERCICIO 4

/* var numerosarray= [2,5,9,13,15,16]
console.log(arrayCuadrado(numerosarray))

function arrayCuadrado(array)
{
    let cuadrado = []
    for(let i = 0; i < array.length; i++){
        cuadrado.push(array[i] * array[i])
    }
    return cuadrado
}
 */

// EJERCICIO 5


/* var base = 0;
var altura = 0;

base = preguntarBase();
altura = preguntarAltura();


escribeArea(base,altura);

      
function preguntarBase(){
    return (window.prompt("Escribe la base del rectangulo"));
}    

function preguntarAltura(){
    return(window.prompt("Escribe la altura del rectangulo"))
}

function escribeArea(a,b){
    var area = a*b;
    alert("El Área del rectangulo es:" + " " + area)
    
} */ 
 

// EJERCICIO  6


/* var a = prompt("Por favor, ingrese un número ")
var b = prompt("Por favor, ingrese un segundo número")

relacion(a,b)

function relacion(a,b){
    if(a > b) {
        alert( 1)
    }
    else if(b > a) {
        alert( -1)
    }
    else {
        alert("Ambos son iguales")
    }
}  */
 

// EJERCICIO 7 (No pude hacerlo, busque en internet pero encontre muchas cosas raras :,v )


// EJERCICIO 8 (No sé como hacer para que me retorne false o verdadero
// asi que opte por hacer un alert asi el ejercicio no queda incompleto)

  var dni = prompt();

dniverificacion();


function dniverificacion (){

    dni.split()
   
    var parametro = dni.length
    console.log(parametro)
    
    if (parametro > 7 ) {
        alert("Dni valido")
        return true
    } else {

        alert("Su Dni no es valido")
        return false
    }
} 
     



// EJERCICIO 9 



/* var words = prompt();

lastword();


function lastword (){
    words.split()
    let ultimo = words[words.length - 1]
    console.log(words)
    console.log(ultimo)
} */
 


