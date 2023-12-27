function calculate(a=10,b=20){
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