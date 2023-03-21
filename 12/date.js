
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hour = String(now.getHours()).padStart(2, '0');
const minute = String(now.getMinutes()).padStart(2, '0');

const first = `${day}-${month}-${year} ${hour}:${minute}`;
console.log(first);// DD-MM-YYYY HH:mm:

const second = `${year}-${month}-${day} ${hour}:${minute}`;
console.log(second)//- YYYY-MM-DD HH:mm

const third = `${day}/${month}/${year} ${hour}:${minute}`;
console.log(third) //DD/MM/YYYY HH:mm


