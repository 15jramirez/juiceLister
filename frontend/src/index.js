console.log('hello form src')
let picture = document.getElementById(`juice-container`)

document.addEventListener(`DOMContentLoaded`, function(){
    fetchImages()
})

function fetchImages(){
    fetch(`http://localhost:3000/juices`)
    .then(resp => resp.json())
    .then(result => addImages(result))
}

function addImages(result){
   // want to grab the each element of array of result. 
   result.forEach(juice => picture.innerHTML += `<img src = "${juice.image_url}">`)
   picture.addEventListener(`click`, handleClickImage)

}

function handleClickImage(event){
    console.log(event)
}