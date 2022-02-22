let cuenta = document.getElementById("cuenta")
let number = 0
let text = ""
let i = 0;
let boton = document.getElementById("boton")

boton.onclick = function(){
    while (i < 10) {
        text += "<br>Cuenta regresiva "+(10-i);
        i++;
    }
    cuenta.innerHTML = text + "<br>¡Despegue!"
}


//Cuenta regresiva 10