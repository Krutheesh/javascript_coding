const prompt = require("prompt-sync")();
let pyramid="";
const num= parseInt(prompt("enter the number:"));
for(let i=0 ; i<num ;i++){
  for(let j = 0 ; j<(2*num-1) ;j++){
    pyramid += "*";

  }
  pyramid += "\n";
}
console.log(triangle);