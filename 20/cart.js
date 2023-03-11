const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let mCount = 0;
let sCount = 0;
for( let i = 0; i < shoppingCart.length ; i++){
  if (shoppingCart[i] === "Meat"){
    mCount++
  }
  if (shoppingCart[i] === "Sugar"){
    sCount++
  }

  if (shoppingCart[i] === "Honey"){
    shoppingCart.pop(i); // removing 'Honey'
  }
 if (shoppingCart[i] === "Tea"){
  shoppingCart[i] = "Green Tea";  // modifing Tea to 'Green Tea'
 }
}



if (!mCount){
 shoppingCart.unshift("Meat") // adding 'Meat' in the beginning of your shopping cart
}

if (!sCount){
  shoppingCart.push("Sugar"); // Sugar at the end of your shopping cart
}
console.log(shoppingCart)

