const account_id = 144453
let account_email = "javascript@gmail.com"
var account_password = "12234"//scope issues
let account_state//no effect of semicolon
//nothing inputted then it will be in undefined state
//hence we shall use only let and const only
/*
prefer not to use var
because of issue in block scope and functional scope
*/
account_city="jamshedpur"
//we can even reserve memory without even declaring its datatype 
//but this method shoud be avoided
//assinging to constant value not allowed account_id=2;
account_email="sanjay.singh@gmail.com"
account_password="1221"
account_city="delhi"
console.log(account_id);
console.table([account_id,account_email,account_password,account_city,account_state])