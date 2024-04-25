async function getUfsBrasil() {
    try {
        const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)

        const jsonData = await data.json()

        array = Object.values(jsonData)

        for (let i = 0; i < array.length; i++){

            var ul = document.querySelector("ul")

            var li = document.createElement("li")
            var a = document.createElement("a")
            a.textContent = array[i].nome
            a.href = `./pages/municipios/index.html?uf=${array[i].sigla}`

            ul.appendChild(li)
            li.appendChild(a)
        }

    } catch (error) {
        console.error(error)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    getUfsBrasil()
})