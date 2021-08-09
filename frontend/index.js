console.log('hello form src')
const frontside = document.getElementsByClassName(`front-end`)[0]
let backside = document.getElementsByClassName(`back-end`)[0]
const juiceApi = new JuiceApi
document.addEventListener(`DOMContentLoaded`, function(){
    juiceApi.fetchImages()
})
 
// function addImages(result){
//    // want to grab the each element of array of result. 
//    result.forEach(juice => picture.innerHTML += `<img src = "${juice.image_url}" width= "400" height="200">`)
//    picture.addEventListener(`click`, handleClickImage)

// }

// function handleClickImage(event){
//     console.log(event)
// }
