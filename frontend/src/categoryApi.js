class CategoryApi{
    constructor(){
        this.baseurl =  `http:/localhost:3000/categories`
    }

    fetchCategories(){
        fetch(this.baseurl)
        .then(resp=> resp.json())
        .then(result => 
            result.data.forEach(category => this.intializeCatgeory(category))
    )}

    intializeCatgeory(resultData){
        console.log(resultData)
        let categoryInstance = new Category({id: resultData.id, ...resultData.attributes})
        
    }
}