//global variable and local variable
var username= "sai kiran"

function f1(){  
    var pWord="admin"
    console.log(username,pWord)
}
f1()

console.log(username)
//console.log(pword)

//passing default variables in function
function f2(a=10,b=20){
    console.log(a,b)
}
f2()
f2(100,300)

//passing key and  values in function
function f3(a,b){
    console.log(a=100,b=400)
}
f3()