class Category{
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name 
        Category.all.push(this)
    }


     static nameCall(categoryId){
        let categoryMatch = Category.all.find( c => c.id == categoryId)
        return categoryMatch.name 
    }
}