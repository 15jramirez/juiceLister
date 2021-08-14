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
         const updateName = document.getElementById(`juice-name`).value
         const updateDescription = document.getElementById("juice-description")
         let updateJuiceObj ={
             name: updateName.value
         }

         let congfigObj ={
             method: "PATCH",
             headers: {
                 "Content-Type": "application/json",
                 "Accept": "application/json",
             },
             body: JSON.stringify(updateJuiceObj)
         }
        //to write fetch want: this.baseUrl + `${juiceId}

        fetch(this.baseUrl + this.juice.findById(id))
        .then(resp => resp.json())
        .then (info=> console.log(info))
    }
    
    deleteRequest(){

    }
 }

