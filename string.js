let a= "We are always responsible for our experiences,trust in the for process.";

//foe getting index of a word in a string in its first occurance
let firstOccurence=a.indexOf("for");
console.log(firstOccurence);

// for finding last occurance
let lastOccurence=a.lastIndexOf("for");
console.log(lastOccurence);

// slicing  a string between two index
let slicedpart= a.slice(5,15);
console.log(slicedpart);

// slice accepts negative value too. accepts negative values and count from end.
//the resultant string obtained is called substring.
let substring=a.substring(7,17);
console.log(substring);

// addition of two strings
let b= "all is good if end is good";
let z=a+b;
console.log(z);

//for removing white spaces from the string
console.log(a.trim());