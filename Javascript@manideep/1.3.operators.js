//operators
//  there  are 4 types of operatos= 1.arithmetic, 2.assignment, 3.comparison ,4.logical operators

//arithmetic operators:
//+ =addition
//- =subtraction
//* =multiplication
// / =division
// % = modulus
// ++ =increment
// -- =decrement

var a=10,
    b=20;
    result=a+b;
    console.log(result)
    result=a-b;
    console.log(result)
    result=a*b;
    console.log(result)
    result=a%b;
    console.log(result)
    result=a/b;
    console.log(result)

    var i=0;
    i++;
    i++;
    i++;
    i--;
    console.log(i)


    //assignment  operators:

    //=       x=y
    //+=      x=x+y
    //-=      x=x-y
    //*=      x=x*y
    ///=      x=x/y
    //%=      x=x%y

    var nums=[10,20,30,40,50]
    var sum=0;
    var i=0;
    sum=sum+nums[i];
    i++;
    sum=sum+nums[i];
    i++;
    sum=sum+nums[i];
    i++;
    sum=sum+nums[i];
    i++;
    sum=sum+nums[i];
    i++; 
    console.log(sum)


    //comparison operators
    //==  double equal to
    //===  triple equal to
    //!=  not equal to
    //!==  not double equal to 
    //>  greater then
    //<  less then
    //>=  greater then equal  to
    //<=  lessthen or equal to
    //?   ternary

    var email='mahesh@gmail.com';
    var dbemail='mahesh@gmail.com';
    var isMatching= email==dbemail;
    console.log(isMatching)

    var otp=832002;
    var dbotp='832002';
    var isMatching= otp==dbotp;
    console.log(isMatching)
    console.log(typeof isMatching)
    console.log(typeof otp,typeof dbotp)
    console.log(otp==dbotp ? 'otp is matched':"otp's not matched")
    console.log(isMatching ? 'matched': 'not matched')

    var a=100;
        b=200;
        console.log(a>b)
        console.log(a<b)
        console.log(a<=b)
        console.log(a>=b)
        console.log(typeof a)


//logical operators:
//&& = logical and(all  conditions are true, its returns true.)
//  // =logical or (if any condition is true, its returns true. )
// !  =logical not (current value is true, its returns false.)

//&& (logical And):
var email='mahesh@gmail.com';
var dbemail='mahesh@gmail.com';
var matched=email==dbemail;
console.log(matched)
var password='mahesh123'
var dbpassword='mahesh123'
var ismatched= password==dbpassword;
console.log(matched)
console.log(matched && ismatched ? 'matched':'not Matched') 

// //(logical Or):
var number='7702868466';
var dbnumber='7702868466';
var isnumbermatch= number===dbnumber;
console.log(email==dbemail || number===dbnumber )

//! (logical not)
var inactive=true;
console.log(!inactive)
var active= false;
console.log(!active)


        
