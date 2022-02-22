const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

function random(e=1, o){
    let op = Math.floor(Math.random()*(o-e)+e)
    return(op)
}

console.log(random("",names.length))

function chossename(i){
    let chosse = i[random("",names.length)]
    return(chosse)
}

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);
console.log(chossename(names))

// Esto es la siguitne tarea aprtir de la tarea 1

//function random(e, o){




