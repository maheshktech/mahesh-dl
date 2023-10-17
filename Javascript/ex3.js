//arrays
var l1=[10,20,30,40,50,60,70,80]
console.log(l1)
console.log(l1.length)

//calling using index positions
console.log(l1[0])//10
console.log(l1[2])//30
console.log(l1[4])//50
console.log(l1[7])//80
console.log(l1[20])// undefined

//iterables
for(var i=0; i<l1.length;i++){
    console.log(l1[i])
}