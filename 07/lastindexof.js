let array=['master','blaster','pw skills','krutheesh','large','small','hard','pw skills','range','power']
let lastOccurence=array.lastIndexOf("pw skills");
console.log(`last  occurence at index ${lastOccurence}`)//last occurence
let firstOccurence = array.lastIndexOf("pw skills",lastOccurence-1);
console.log(`first occurence at index ${firstOccurence}`)


