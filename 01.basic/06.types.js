//two categories of datatypes=>
    //primitive and non primitive(reference)
//#primitive=>
    /*
    7 types=>
        1. strings
        2. number
        3. bool
        4. null
        5. undefined
        6. symbol=>used to make any value unique
        7. BigInt


*/
//#refernce=>(non primitive)
/*
    arrays
    objects
    functions
*/
//statically typed languages =>we need predefine each variable type before execution
//dynamically typed language =>no need to predefine variable's datatype as it is computed by the compiler at execution time depending on its value
//Javascript is a dynamically typed language


const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)//false

const bignumber=423423425235452523245231521n//adding n makes it BigInt


const heros=["pap","mummy","tommy"];
let myobj={
    name: "shivansh",
    age: 18


}
const myfunction =function(){
    console.log("Hello world");
}


