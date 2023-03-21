const prompt = require("prompt-sync")();
const weight = parseFloat(prompt("enter weight in kg :"));
const height = parseFloat(prompt("enter height in meters :"));
const bmi = (weight,height) => weight/(height*height);
const result = bmi(weight,height);

if (result < 18.5 && result > 0){
  console.log("underweight");
}
else if (result >= 18.5 && result <= 24.9){
  console.log("Normal weight");
}
else if(result >= 25 && result >= 20.9){
  console.log("overweight");
}
else if (result > 30){
  console.log("Obese");
}
else{
  console.log("inavalid inputs")
}