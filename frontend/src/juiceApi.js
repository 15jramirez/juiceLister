 // communicate with backend. handle posts, patch, delete
 // interfacing with api of backend
 class JuiceApi{
     constructor(){
         this.baseUrl = `http://localhost:3000/juices`
     }

      fetchImages(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(result =>{
            result.data.forEach(element =>{
                let juice = new Juice(element.attributes)
                juice.addImagesToDom(element)
            })
        })
    }

    updateRequest(juiceId){
        // const name = document.getElementById(``).value

        //to write fetch want: this.baseUrl + `${juiceId}

        fetch(this.baseUrl + this.juice.findById(id))
        .then(resp => resp.json())
        .then (info=> console.log(info))
    }
    
    deleteRequest(){

    }
 }

