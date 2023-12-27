// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
function factorial(a=5){
    if(a==0 && a==1){
        console.log("Factorial is = 1")
    }
    else{
        
        let result = 1
        for(let i=a;i>1;i--){
            result *= i
        }
        console.log("Factorial is = "+result)
    }
}
factorial()