// in older version language cleaning of memory was our job and it was very hectic
//javascript automatically does this job and handles other garbage disposal
//thereby giving very little control over the memory space

//TWO TYPES OF MEMORY
//STACK(PRIMITIVE) AND HEAP(NON PRIMITIVE)
//STACK => WE GET A COPY
//HEAP =>WE GET REFERNCE ANY CHANGE WILL BE REFLECTED
let mychannel="shivanshgit"
let anotherchannel=mychannel//copy refernce not actual refernce
anotherchannel="git"//will got to stack
console.log(anotherchannel);
let user={
    email:"shivansh.sinhg@hmail.com",
    id:123
}//will go to heap
let user2=user//refernce type

user2.id=456
console.log(user.id)//456 i.e. refernce changed

