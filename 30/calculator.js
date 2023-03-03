const prompt = require("prompt-sync")();
let a = parseInt(prompt("enter first number:"));
let b = parseInt(prompt("enter second number:"));
let operator = prompt("enter \n + for addition\n - for subtraction\n * for multiplication\n / for division \n");
if (operator === "+"){
  console.log(a+b);
}
else if(operator === "-"){
  console.log(a-b);
}
else if(operator === "*"){
  console.log(a*b);
}
else if(operator === "/"){
  console.log(a/b);
}
else{
  console.log("invalid operator");
}

