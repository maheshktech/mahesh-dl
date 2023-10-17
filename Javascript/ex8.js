//join()
l1=[10,20,30,40,50]
console.log(l1)
console.log(l1.join(''))
console.log(l1.join('-'))
console.log(l1.join(' and '))

//update
l1=[10,20,30,40,50]
l1[0]=100
console.log(l1)

//delete
delete l1[1]
console.log(l1)
console.log(l1.length)

//iterations
//create array using for loop ,  while loop  and do while
var l1=[10,20,30,40,50]
for(var i=0; i < l1.length; i++){
    console.log(l1[i])
}
var l1=[10,20,30,40,50,70]
var i=0
while(i<l1.length){
    console.log(l1[i])
    i++
}
var l1=[10,20,30,40,50,60,70,80,90]
var i=0
do{
    console.log(l1[i])
    i++
}while(i<l1.length)