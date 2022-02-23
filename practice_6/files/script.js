let i = 500;
let numeros = ""
let numbers = document.getElementById("numbers")
const para = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

while(i>1){
    if(isPrime(i)){
        numeros += `${i}<br>`
    };
    i--;
}

numbers.innerHTML = numeros
