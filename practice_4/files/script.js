const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');
let content = ""
// Add your code here

for(let vaca of myArray ){
    content +=`<li>${vaca}</li>`
}

list.innerHTML = content
// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(list);