const prompt  = require("prompt-sync")();

const month = prompt("enter the month:").toLowerCase();
if (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december"){
  console.log(`${month} has 31 days`)
}
else if(month == "febraury"){
  console.log(`${month} has 28 days`)
}
else if( month == "april" || month == "june" || month == "september" || month == "november" ){
  console.log(`${month} has 30 days`)
}
else{
  console.log('invalid name entered.....')
}