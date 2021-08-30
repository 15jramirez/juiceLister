class JuiceApi{
     constructor(){
         this.baseUrl = `http://localhost:3000/juices`
     }

      fetchInfo(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(result =>{
            result.data.forEach(element =>{
                let juice = new Juice(element.attributes)
                juice.addInfoToDom(element)
            })
        })
    }

    patchUpdateRequest(juiceId){
         const name = document.getElementById(`update-juice-name-${juiceId}`).value
         const description = document.getElementById(`update-juice-description-${juiceId}`).value
         const ingredients = document.getElementById(`update-juice-ingredients-${juiceId}`).value

         let juiceObj ={
            name,
            description,
            ingredients,
         }

         let configObj ={
             method: `PATCH`,
             headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
             },
             body: JSON.stringify(juiceObj)
         }
        fetch(this.baseUrl + `/${juiceId}`, configObj)
        .then(resp => resp.json())
        .then (result => {
            let juice = Juice.all.find(j => j.id === result.data.attributes.id)
            juice.updateInfoToDom(result.data.attributes)
            alert(` ${juice.name} was updated successfully! `)
        })
        let form = document.getElementById(`update-form-${juiceId}`)
        form.remove()
    }
    handleFormSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(document.getElementById('juice-form'))
        let configObj ={
            method: 'POST',
            // headers removed content type due to FormData(has own key/pair values) not string like JSONusing own content type of multiple.
            // headers: {
            //     // "Content-Type": "application/json",  
            //     Accept: "application/json"
            // },
            body: formData
        }
        fetch(this.baseUrl, configObj)
        .then(res => res.json())
        .then(newInfo => {
            let juice = new Juice(newInfo.data.attributes)
            juice.addInfoToDom()
        })
        juiceForm.reset()
        const newFormButton = document.getElementById('new-form-btn')        
        const formContainer = document.getElementById('new-form-container')
        formContainer.hidden = true
        newFormButton.hidden = false
        newFormButton.addEventListener('click', hideBtnLoadForm)
    }
 }

