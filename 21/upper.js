const arr = ["master","blaster","Hitesh sir", "Anirudh sir", "Anurag sir", "Ethiopia"];
let present = 0;
for(let i =0 ; i < arr.length ; i++){
  if (arr[i] === "Ethiopia"){
      arr[i] = arr[i].toUpperCase()
      present++
  }
}
if(!present){
  arr.push("")
}
console.log(arr)