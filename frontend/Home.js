const button = document.querySelectorAll("#character-box")

const getOC = async () => {
    const OCs = await axios.get(`http://localhost:3001/Character/`)
    console.log(OCs.data)

    OCs.data.forEach((OC) => {
       let new_div = document.createElement("div")
       let parent = document.getElementById("characters")
       let div_img = document.createElement("img")
       let a = document.createElement("a")
       parent.appendChild(new_div)
       new_div.appendChild(a)
       a.appendChild(div_img)
       div_img.style.width = "230px"
       div_img.style.length = "230px"
        new_div.setAttribute("class", "character-box")
        new_div.setAttribute("id", `${OC._id}`)
        div_img.setAttribute (`src`, `${OC.images}`)
        div_img.setAttribute("alt", `${OC.Name}`)
        a.setAttribute("href", `character.html`)
    } )
console.log(OCs)
}

button.addEventListener(`click`, () => {
    
})














getOC()