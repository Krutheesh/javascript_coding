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

function main(){

  for(let i = 0; i < 100; i++){
    if (isPrime(i)){
      console.log(i)
    }
  }
}
main();
