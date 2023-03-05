const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort()
console.log(ages)

//min and max
console.log(`minimum age is ${ages[0]}`);
console.log(`maximum age is ${ages[ages.length-1]}`);

// range = max - min

console.log(`range = ${ages[ages.length-1] - ages[0]}`)

// median
if((ages.length)%2 == 0){
  console.log(`median = ${(ages[(ages.length)/2 - 1]+ages[(ages.length)/2])}`);
 
}
else{
console.log(`median = ${ages[(ages.length)/2 - 1]}`)
}

//average


let sum = 0;
for(let i = 0; i < ages.length ; i++){
  sum += ages[i];
}
console.log(`average = ${sum/(ages.length)}`);


// comparing the values 
console.log(`min - average = ${Math.abs (ages[0] - sum/(ages.length)) }`);
console.log(`min - average = ${Math.abs (ages[ages.length-1] - sum/(ages.length)) }`);
