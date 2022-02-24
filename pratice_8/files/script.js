let numer = prompt("Dime un numero")

function prime(number){
    for(let i=2;i<number;i++){
        if(number%i===0){
            return(false)
        }
    }
    return(true)   
}

for(e=1;e<=numer;e++){
    if(prime(e)){
        console.log(e)
    }
}