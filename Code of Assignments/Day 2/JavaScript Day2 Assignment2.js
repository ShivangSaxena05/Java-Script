function factorial(a=5){
    if(a==0 && a==1){
        console.log("Factorial is = 1")
    }
    else{
        
        let result = 1
        for(let i=a;i>1;i--){
            result *= i
        }
        console.log("Factorial of " +a+ " is = "+result)
    }
}
factorial()