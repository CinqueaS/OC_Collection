let input = ""
let images 
const getOC = async () => {
    const OCs = await axios.get(`http://localhost:3001/Character/`)
    // console.log(OCs.data)

    OCs.data.forEach((OC) => {
       let new_div = document.createElement("div")
       let parent = document.getElementById("characters")
       let div_img = document.createElement("img")
       let button = document.createElement("button")
       parent.appendChild(new_div)
       new_div.appendChild(button)
       button.appendChild(div_img)
       div_img.style.width = "230px"
       div_img.style.height = "230px"
        new_div.setAttribute("class", "character-box")
        div_img.setAttribute("id", `${OC._id}`)
        div_img.setAttribute (`src`, `${OC.images}`)
        div_img.setAttribute("alt", `${OC.Name}`)
        button.setAttribute("class", `clickable-image`)
        // a.setAttribute("href", `index.html`)
        images = document.querySelectorAll('.clickable-image')
        
    } )
// console.log(OCs)
getThisOC()
console.log(images)
}
getOC()

// document.addEventListener('DOMContentLoaded', () => {

async function getThisOC() {
    images.forEach(image => {
        image.addEventListener('click', async (event) => {
            const id = event.target.getAttribute('id');
            console.log(id)
            const characterDetails = document.querySelector('.hidden')
            const characterContainer = document.querySelector('.character-container')

            try {
                const response = await axios.get(`http://localhost:3001/Character/${id}`)
                const OC = response.data
                document.getElementById('characterName').innerText = `${OC.Name}`
                document.getElementById('homeStory').innerText = `appears in ${OC.story}`
                document.getElementById('age').innerText = `age: ${OC.age}`
                document.getElementById('gender').innerText = `gender: ${OC.gender}`
                document.getElementById('height').innerText = `height: ${OC.height}`
                document.getElementById('weight').innerText = `weight: ${OC.weight}`
                document.getElementById('bio').innerText = `${OC.bio}`
                characterDetails.classList.remove('hidden')
                characterContainer.classList.add('hidden')
                console.log("this is working")
            } catch (error) {
                console.error('Error fetching biography:', error);
            }
        }
    )})}   
// })

// images.forEach(image => {
//     image.addEventListener('click', async (event) => {
//         const id = event.target.getAttribute('id');
//         const characterDetails = document.querySelectorAll('.hidden')
//         const characterContainer = document.querySelector('.character-container')
//         input = id.value
//         getThisOC()
//         console.log("right before try")
//     })
// })










