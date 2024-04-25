async function getMunicipioUfBrasil() {
    try {
        if(!location.search){
            return
        }
        const uf = new URLSearchParams(location.search).get("uf")

        document.title = `Municipios de ${uf}`
        document.querySelector("h1").innerText += ` ${uf}`;

        const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios `)

        const jsonData = await data.json()

        for (let i = 0; i < jsonData.length; i++){

            var ul = document.querySelector("ul")

            var li = document.createElement("li")
            var a = document.createElement("a")
            var bt = document.createElement("button")
            a.textContent = jsonData[i].nome
            a.href = `./pages/municipios/index.html?uf=${jsonData[i].nome}`

            bt.textContent = "Favoritar"
            bt.value = JSON.stringify(jsonData[i])
            bt.addEventListener("click", function(){
                var valor = [];
                if(localStorage.getItem("favoritos")){
                    valor = JSON.parse(localStorage.getItem("favoritos"))
                    valor.push(this.value)
                    localStorage.setItem("favoritos", JSON.stringify(valor))
                }else{
                    valor.push(this.value)
                    localStorage.setItem("favoritos", JSON.stringify(valor))
                }
            })

            ul.appendChild(li)
            li.appendChild(a)
            li.appendChild(bt)
        }

    } catch (error) {
        console.error(error)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    getMunicipioUfBrasil()
})