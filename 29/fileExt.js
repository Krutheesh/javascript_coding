const prompt = require("prompt-sync")();
let fileName = prompt("enter the file name:");
let extension = fileName.split(".");
console.log(`The extension of file is: ${extension[1]}`)