const prompt= require("prompt-sync") ();

const age = parseInt(prompt("enter a number:"));
if (age >= 18){
  console.log("You are old enough to drive")
}
else{
  console.log('you need to wait '+ (18 - age) +" years to drive")
}