let api="https://www.omdbapi.com/?apikey=6c8ea3b1&t="
function searchmovie(){
    let names=document.getElementById('search').value
    let search= api + names
    fetch(search).then(function(data){
        return data.json()
    }).then(function(data){
        document.getElementById('cont').style.display='flex'
        document.getElementById('title').innerText=data.Title
        document.getElementById('Actors').innerText=data.Actors
        document.getElementById('Rated').innerText=data.Rated
        document.getElementById('Genre').innerText=data.Genre
        document.getElementById('Writer').innerText=data.Writer
        document.getElementById('Director').innerText=data.Director
        document.getElementById('Language').innerText=data.Language
        document.getElementById('BoxOffice').innerText=data.BoxOffice
        document.getElementById('image').src=data.Poster
        console.log(data)
    })
}