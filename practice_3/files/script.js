let admit = document.getElementById("admitido");
let refuse = document.getElementById("denegado");
let button = document.getElementById("button");
let people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
let people_admit = []
let people_refuse = []

button.onclick = function(){
    for(const name of people){
        if(name==="Phil"||name==="Lola"){
            people_refuse[people_refuse.length] = name
        }
        else{
            people_admit[people_admit.length] = name
        }

    }

    admit.innerHTML = "Admit: " + people_admit + "."
    refuse.innerHTML = "Refuse: " + people_refuse + "."
}