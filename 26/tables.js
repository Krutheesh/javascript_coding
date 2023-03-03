const prompt = require("prompt-sync")();

function table(n){
  for(let i = 1; i < 11; i++){
    console.log(`${n} * ${i} =`,n*i)
  }

}
function main(){
  const n = parseInt(prompt("enter the number:"));
  table(n)
}
main()