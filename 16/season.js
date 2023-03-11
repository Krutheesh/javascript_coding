

const prompt  = require("prompt-sync")();

const month = prompt("enter the month :").toLowerCase();
console.log(month)
if (month === "september" || month === "october" || month === "november" ){
  console.log("Thes Season is Autumn");
}
else if(month === "december" || month === "janurary" || month === "februray"){
  console.log("The Season is Winter");
}
else if( month === "march" || month === "march" || month === "may" ){
  console.log("The Season is Spring");
}
else if ( month === "june" || month  === "july" || month === "august"){
  console.log("The season is summer");
}
else{
  console.log("invalid month name")
}