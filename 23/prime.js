const prompt = require("prompt-sync")();



function isPrime(num){
  if (num <= 1){
    return false
  }
  else{
    for(let i = 2; i<=parseInt(num**0.5); i++){
      if(num % i == 0){
        return false
      }
    }
    return true 
  }
}
const num= parseInt(prompt("enter the number ::"));
console.log(isPrime(num));