let score = false//33abc also converts
console.log(typeof(score));
//type conversion
let score_in_number=Number(score)
console.log(typeof(score_in_number))
console.log(score_in_number)//NaN=>not a number
//"33" => 33
//"33abc"=>NaN
//"true"=>1
//"false"=>1

let is_logged_in="shivansh"
let boolean_is_logged_in= Boolean(is_logged_in)
console.log(boolean_is_logged_in);
//"something"=>true
//""=>false
//1=>true
//0=>false
let name1=33
let string_number=String(name1)
console.log(typeof(string_number))