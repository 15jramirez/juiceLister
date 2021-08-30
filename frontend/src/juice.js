class Juice{
    static all =[]
    constructor({name, image_url, ingredients, id, category_id, description}){    
        this.name = name    
        this.image_url = image_url  
        this.ingredients = ingredients  
        this.description = description
        this.id = id 
        this.categoryId = category_id   
        this.element = document.createElement(`div`)  
        this.element.id = `juice-${this.id}`
        Juice.all.push(this);
    }
    get imageContainer(){
        return document.getElementById(`container-box`) 
    }


    addInfoToDom(){
        this.imageContainer.append(this.fullRender()) 
        this.addEventListeners()
    }

    updateInfoToDom({name, description, ingredients}){
        this.name = name
        this.description = description
        this.ingredients = ingredients
        this.fullRender()
    }

    fullRender(){
        const categoryName = Category.nameCall(this.categoryId)
        console.log(categoryName)
        this.element.innerHTML = `<img src = "${this.image_url}" width= "400" height="200"> 
        <p><span>${this.name}</span>: ${categoryName}<br>${this.description}<br><span>Ingredients:</span><br>${this.ingredients}</p>
        <button class="update" data-id="${this.id}">Update</button>`
        return this.element 
    }

    addUpdatesFields(juiceId){
        let juiceChange = document.querySelector(`#juice-${juiceId}`)
        let updateForm = `
          <label>Name:</label><input type="text" name="name" value="${this.name}" id="update-juice-name-${juiceId}"><br><br>
          <label>Description</label><input type="text" name="description" value="${this.description}" id="update-juice-description-${juiceId}"><br>
          <textarea id="update-juice-ingredients-${juiceId}" name="ingredients" value="${this.ingredients}">${this.ingredients}</textarea>
          `
          let formContainer = document.createElement(`div`)
          formContainer.id = `update-form-${juiceId}`
          formContainer.innerHTML= updateForm
  
          juiceChange.append(formContainer)
    }

    addEventListeners(){
        console.log(this.element)
        this.element.addEventListener(`mouseenter`, this.handleMouseEnterImage)
        this.element.addEventListener(`mouseleave`, this.handleMouseLeaveImage)
        this.element.addEventListener('click', this.handleOnClick)
    }
    handleMouseEnterImage(){
        this.classList.remove('imageFront')
        this.classList.add(`imageBack`)

    }

    handleMouseLeaveImage(event){
        this.classList.add('imageFront')
        this.classList.remove(`imageBack`)
    }

    handleOnClick= (e) => {
        let juiceId = e.target.dataset.id
        if (e.target.className ==="update"){
            e.target.className = "save"
            e.target.innerHTML = "save"
            this.addUpdatesFields(juiceId)
        }
        else if (e.target.className ==="save"){
            e.target.className = "update"
            e.target.innerHTML = "update"
            juiceApi.patchUpdateRequest(juiceId)
        }

    }

}