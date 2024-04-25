function getFavoritos(){
    try {
        var array = [];
        if(localStorage.getItem("favoritos")){
            array = JSON.parse(localStorage.getItem("favoritos"))
        }
        
        for (let i = 0; i < array.length; i++){

            var ul = document.querySelector("ul")

            var li = document.createElement("li")
            li.textContent = JSON.parse(array[i]).nome

            ul.appendChild(li)
        }

    } catch (error) {
        console.error(error)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    getFavoritos()
})