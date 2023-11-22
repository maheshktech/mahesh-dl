// data types: which type of data stored in the value. a particular  kind of value, value can be the take the programming language use.
//2 types of the data types......
//predefined data types = 'string, boolean,number'
//userdefined data types ='object, array,function'

//1.
//string data type:(collection of the charectors & sequence of the charectors)
var userName = "Mahesbbabu";
console.log(userName);
console.log(typeof userName)

//boolean data type:(true & false)
var maheshbabu= true;
console.log(maheshbabu);
console.log(typeof maheshbabu)

//number data type:
var a=100;
    b=200;
    console.log(a);
    console.log(b);
    console.log(a+b)
    console.log(a-b)
    console.log(a/b)
    console.log(typeof a)



//2.
//user defined data types:
//Array data type:collection of the  values.
var mahesh=[1,2,3,4,5,6]
console.log(mahesh)
console.log(mahesh[2])
mahesh.push(7)
console.log(mahesh);
mahesh[3]=8;
console.log(mahesh)

//object: collection of the key-values pairs.
// irregular date then go for the object data type.
var valueInfo={
             name: 'mahesh',
             designation: 'software engineer',
             salary: '50000',

             }
 
             
 console.log(valueInfo)                   
console.log(valueInfo.salary)  
console.log(valueInfo.designation )
console.log(valueInfo.name)  
