arr=["A","Aditya","Vansh","Shivang","Mota"]    
    let i=0
document.getElementById("text").innerText=arr[i]
function next(){
    do{
        i+=1
}while(0>i){
    document.getElementById('text').innerText=arr[i]
}
}
function prev(){
    do{
        i-=1
    }while(0>i){
        document.getElementById('text').innerText=arr[i]
}
}
