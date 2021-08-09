// contains juice class. simlar to model handle all logica, info specific to juice
class Juice{
    static all =[]
    constructor({name, image_url, ingredients, id, category_id}){
        this.name = name 
        this.image_url = image_url
        this.ingredients = ingredients
        this.id = id 
        this.category_id = category_id
        this.element = document.createElement(`div`)
        this.element.id = `juice-${this.id}`
        this.element.classList.add(`imageFront`)
        Juice.all.push(this)
    }
    get frontPicture(){
        return  document.getElementById(`container`)
    }

    get imageCards(){
        return Array.from(document.getElementsByClassName(`imageFront`))
    }
    addImagesToDom(){
        this.frontPicture.append(this.fullRender())  //this is for when make changes, it'll only rerender and not add divs
        this.addEventListeners()
    }

    fullRender(){
        this.element.innerHTML = `<img src = "${this.image_url}" width= "400" height="200">`
        return this.element
    }

    addEventListeners(){
        console.log(this)
        console.log(this.imageCards)
        this.imageCards.addEventListener(`mouseenter`, function(){
            this.classList.remove(`imageFront`)
            this.classList.add(`imageBack`)
        })

        this.frontPicture.addEventListener(`mouseleave`, function(){
            this.classList.add(`imageFront`) 
            this.classList.remove(`imageBack`)
        })
        // this.element.addEventListener(`click`, this.handlePictureClick)
    }

    handlePictureClick(){
        
    }

}