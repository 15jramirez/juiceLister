console.log('hello form src')
const juiceForm = document.getElementById(`juice-form`)
const newFormButton = document.getElementById('new-form-btn')
const juiceApi = new JuiceApi
document.addEventListener(`DOMContentLoaded`, function(){
    juiceApi.fetchImages()
    juiceForm.addEventListener('submit', juiceApi.handleFormSubmit)
    newFormButton.addEventListener('click', hideBtnLoadForm)
})
 
function hideBtnLoadForm(e){
    e.target.hidden = true
    const newForm = document.getElementById('new-form-container')
    newForm.hidden = false
}