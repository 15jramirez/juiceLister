class Juice{
    static all =[]
    constructor({name, image_url, ingredients, id, category_id, description}){    //deconstructed the {} allows to put elements w/ attributes
        this.name = name    // this will also display on the back with image card
        this.image_url = image_url  // front of card
        this.ingredients = ingredients  //back of card 
        this.description = description
        this.id = id //id of juice instance
        this.category_id = category_id  // want to put this on back of card too
        this.element = document.createElement(`div`)  // creating image with own div. this is front of card/(image is front)
        this.element.id = `juice-${this.id}`
        // this.element.classList.add(`imageFront`)  // adding class of imageFront to have FRONT CARD
        Juice.all.push(this);
    }
    get imageContainer(){
        return document.getElementById(`container-box`) //this to grab div to append 
    }

   
    // static findByID(id){
    //     return Juice.all.find(juice =>juice.id == id)
    // }
    addInfoToDom(){
        this.imageContainer.append(this.fullRender()) 
        this.addEventListeners() //this is for when make changes, it'll only rerender and not add divs
    }

    updateInfoToDom({name, description, ingredients}){
        this.name = name
        this.description = description
        this.ingredients = ingredients
        this.fullRender()
    }

    fullRender(){
        console.log(this)
        this.element.innerHTML = `<img src = "${this.image_url}" width= "400" height="200"> 
        <p><span>${this.name}</span>: ${this.category_id}<br>${this.description}<br><span>Ingredients:</span><br>${this.ingredients}</p>
        <button class="update" data-id="${this.id}">Update</button>`
        return this.element // need to return otherwise returns undefined
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