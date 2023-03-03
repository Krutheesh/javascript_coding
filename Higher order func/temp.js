const arr = [10,20,30,40]
const newArr1 = arr.filter((a) => a%2!=0)
console.log(newArr1)
const newArr2 = arr.filter((a,index,arr) => {
  console.log(index)
  return(arr[arr.length-1])});
console.log(newArr2)

const arr3 = arr.map((x) => x/2)
console.log(arr3)


//reduce used to find sum of elements in an array or max element or min element 

const op = arr.reduce((sum,curr) => sum+=curr,0);//sum of elements in an array
console.log(op);

const maxi = arr.reduce((max,curr) => {if (curr > max){max = curr} return max})
console.log(maxi)
const c = {26:1}
const user = [{f:'mas', l:"k", age:26}, {f:'das', l:"d", age:40},{f:'pas', l:"p", age:26} ];
console.log(c[user[0].age])
// let d =10;
// if (c[user[0].age] ){
//   d++
// }
// console.log(d);
const out = user.reduce((acc, curr) => {
  if(curr.age < 30){
    acc.push(curr.f)
  }
  return acc
}, []);
console.log(out)