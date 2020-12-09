//Programa em JavaScript para mostrar se um numero especifico e primo

var number = 293; //numero de entrada
var count = 0; //contador
var div = 0; //soma de divisores




for (count = 0; count <= number ; count++ ){
    if (number % count === 0){
        div++;
    }
}
if(div===2){
    console.log('O numero ' + number + ' e primo.')
    
} else {
    console.log('O numero ' + number + ` nao e primo.`)
}

console.log('Ele possui ' + div + ' divisores.');


