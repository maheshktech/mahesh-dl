var username="sai kiran"
var password="admin"
console.log(username,password)
console.log(username,password)
console.log(username,password)
console.log(username,password)

//function without args
function userdetails(){
    console.log("userdetails function invoked")
}
userdetails()

//function with args
function userdetails1(uname,pword){
    console.log("user Name is" +uname, "user name is "+pword)
}
userdetails1("sai kiran","admin")
userdetails1("sai kiran","admin")
userdetails1("sai kiran","admin")
userdetails1("sai kiran","admin")

//function using return keyword
function userdetails2(uname,pword){
    return "User Name is "+uname,"User Name is"+pword
}
console.log(userdetails2("vamsi",'admin'))
