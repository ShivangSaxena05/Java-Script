function getRandomColor(){
    const a='1234567890ABCDEF'
    let random='#'
    for(let i=0;i<6;i++){
        random += a[Math.floor(Math.random()*16)]
    }
    console.log(random)
    return random
}

function changecolor(){
    document.body.style.backgroundColor = getRandomColor()
}
document.onclick=changecolor