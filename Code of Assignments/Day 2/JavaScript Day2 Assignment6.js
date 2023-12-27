function calculate(a=40,b=50){
let obj = prompt("Enter operation : ")
if(obj=='+'){
  console.log(a+b)
}
else if(obj=='-'){
  console.log(a-b)
}
else if(obj=='/'){
  console.log(a/b)
}
else if(obj=='*'){
  console.log(a*b)
}
else{
  console.log("invalid obj")
}
}
calculate()