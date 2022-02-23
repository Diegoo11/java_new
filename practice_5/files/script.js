const para = document.createElement('p');
let nombres = document.getElementById("nombres")
let info = document.getElementById("info")
let barra 
let button = document.getElementById("button")
let lista = ""
let filtro
let informacion =""
const phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

// Add your code here
function search(){
    for(i=0; i < phonebook.length; i++){
        filtro = phonebook[i].name
        if(filtro===barra){
            informacion = "The " + barra + "'s number is " + phonebook[i].number;
            info.innerHTML = informacion
            break

        }
        else{continue}
    }    
}


for(i=0; i < phonebook.length; i++){
   lista += `${phonebook[i].name}, `
}

button.onclick = function(){
    barra = document.getElementById("buscar").value;
    search()
}



nombres.innerHTML = lista
info.innerHTML = informacion
// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);

function owo() {
    console.log("hola")
}
owo()