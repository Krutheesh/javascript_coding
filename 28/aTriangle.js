const prompt = require("prompt-sync")();
let triangle="";
const num= parseInt(prompt("enter the number:"));
for(let i=0 ; i<num ;i++){
  for(let j = 0 ; j<=i ;j++){
    triangle += "*";

  }
  triangle += "\n";
}
console.log(triangle);