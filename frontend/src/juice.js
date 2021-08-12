class Juice{
    static all =[]
    constructor({name, image_url, ingredients, id, category_id}){    //deconstructed the {} allows to put elements w/ attributes
        this.name = name    // this will also display on the back with image card
        this.image_url = image_url  // front of card
        this.ingredients = ingredients  //back of card 
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

   
    static findByID(){
        return Juice.all.find(juice =>juice.id == id)
    }
    addImagesToDom(){
        this.addEventListeners()
        this.imageContainer.append(this.fullRender())  //this is for when make changes, it'll only rerender and not add divs
    }

    fullRender(){
        console.log(this)
        this.element.innerHTML = `<img src = "${this.image_url}" width= "400" height="200"> 
        <p><span>Juice: ${this.name}</span> is great ${this.category_id}. It has all of this ingridents</p>`
        return this.element // need to return otherwise returns undefined
    }

    addEventListeners(){
        this.element.addEventListener(`mouseenter`, this.handleMouseEnterImage)
        this.element.addEventListener(`mouseleave`, this.handleMouseLeaveImage)
    }
    handleMouseEnterImage(event){
        console.log(event)
        this.classList.remove('imageFront')
        this.classList.add(`imageBack`)

    }

    handleMouseLeaveImage(event){
        console.log(event)
        this.classList.add('imageFront')
        this.classList.remove(`imageBack`)
    }

}