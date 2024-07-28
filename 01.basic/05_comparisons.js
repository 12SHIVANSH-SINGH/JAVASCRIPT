//comparators => == ,!= , >= ,<=
console.log("2">1);
console.log("02">1);// auto converts

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true 
//reason is because different working of equality and comaprison
//operators 
//comparison operators first convert null to number treating it as 0
//then compares hence true

//for undefined it always false

// === strictly check comparators
// checks for value and datatype also
console.log(2==="2")//false