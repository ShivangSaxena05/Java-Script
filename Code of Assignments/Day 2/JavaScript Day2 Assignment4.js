function check(a="level"){
    let characters = a.split('')
    let reverse = characters.reverse()
    reversestring=reverse.join('')
    if (a==reversestring){
        console.log(a+" Yes It is palendrome")
    }
    else{
        console.log(a+" No It is not a palendrome")
    }
}
check()