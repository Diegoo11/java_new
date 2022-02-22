function add7(e){
    return(e+7)
}

function multiply(i, o){
    return(i*o)
}
console.log(add7(15))
console.log(multiply(8, 9))

function capitalize(a){
    let oracion = a;
    let firstlether = (oracion.charAt(0));
    let oracion_final = oracion.toLowerCase();
        firstlether = firstlether.toUpperCase();
        oracion_final = oracion_final.slice(1)
    return(firstlether+oracion_final)

}
console.log(capitalize('hOlA COmo eStAn'))

function lastletter(u){
    let uwu = u
    let ultima = uwu.charAt(uwu.length-1)
    return(ultima)

}

console.log(lastletter('como'))

