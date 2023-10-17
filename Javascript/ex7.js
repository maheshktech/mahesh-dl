//index of () and last index of ()
l1=[10,20,30,40,10,60,20,80,90,100,10,300,400]
//   0  1  2  3  4  5  6  7  8  9  10  11  12

console.log(l1.indexOf(10))
console.log(l1.lastIndexOf(10))
console.log(l1.indexOf(10,3))
console.log(l1.indexOf(20,5))

//contact
l1=[10,20]
l2=[30,40]
console.log(l1.concat(l2))

console.log(l1.concat([100,200]))

//isarray()
l1=[10,20]
console.log(Array.isArray(l1))
l2="Nameone"
console.log(Array.isArray(l2))

//sortt()
l1=[20,10,40,30,50]
console.log(l1.sort())
console.log(l1.reverse())