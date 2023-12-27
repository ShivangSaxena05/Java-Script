function check(a="level"){
    let characters = a.split('')
    let reverse = characters.reverse()
    reversestring=reverse.join('')
    if (a==reversestring){
        console.log("It is palendrome")
    }
    else{
        console.log("It is not a palendrome")
    }
}
check()