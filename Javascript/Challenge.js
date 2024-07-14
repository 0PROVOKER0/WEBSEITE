// IF challenge

let a = 10 ;

a < 10 
? console.log(10)
: a >= 10 && a <= 40
? console.log("10 To 40")
: a > 40 
? console.log("> 40")
: console.log("Unknown")

// Switch Challenge

let job = "Manager";
let salary = 0;

switch (job){
case "Manager":
    salary = 8000;
break;
default:
    salary=4000
}