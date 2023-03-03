const prompt = require("prompt-sync")();
let square="";
const num= parseInt(prompt("enter the number:"));
for(let i=0 ; i<num ;i++){
  for(let j = 0 ; j<num ;j++){
    square += "*";

  }
  square += "\n";
}
console.log(square);