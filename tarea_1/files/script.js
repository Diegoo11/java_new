const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
chossename = (o)=> (o[Math.floor(Math.random() * +names.length)])

let hola = chossename(names)
hola.append("p")

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);
console.log(chossename(names))



