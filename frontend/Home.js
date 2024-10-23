let input = ""
let images 
let button = document.getElementById("closeButton")
let chapters = []
let buttonWK = document.getElementById('WK')
let buttonNH = document.getElementById('NH')
let buttonDR = document.getElementById('DR')
let buttonHome = document.getElementById('Home')
const getOC = async () => {
    const OCs = await axios.get(`http://localhost:3001/Character/`)

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
        images = document.querySelectorAll('.clickable-image')
        
    } )
getThisOC()
console.log(images)
}
getOC()


async function getThisOC() {
    images.forEach(image => {
        image.addEventListener('click', async (event) => {
            const id = event.target.getAttribute('id');
            console.log(id)
            const characterDetails = document.querySelector('#results')
            const characterContainer = document.querySelector('#section-1')

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
                document.getElementById('characterImg').setAttribute(`src`, `${OC.images}`)
                characterDetails.classList.remove('hidden')
                characterContainer.classList.add('hidden')
                console.log("this is working")
            } catch (error) {
                console.error('Error fetching biography:', error);
            }
        }
    )})}   

async function closeOC() {
    const characterDetails = document.querySelector('#results')
    const characterContainer = document.querySelector('#section-1')
    const chapters = document.getElementById('story')
    chapters.classList.add('hidden')
    characterDetails.classList.add('hidden')
    characterContainer.classList.remove('hidden')

}

button.addEventListener(`click`, () => {
    closeOC()
})


const getChapters = async() => {
    let gotchapters = await axios.get(`http://localhost:3001/Story`)
    chapters = gotchapters.data.chapters
    console.log(chapters)
}

async function showChapters(arr) {
    
    const chapters = document.getElementById('story')
    chapters.innerHTML = ""
    const list = document.createElement('ul')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            let chapterList = showChapters(arr[i])
        } else {
            let li = document.createElement('li')
            let link = li.appendChild(document.createElement('a'))
            link.href = arr[i]
            link.innerText = `Chapter ${i+1}`
            console.log(list.appendChild(li))
        }
        chapters.appendChild(list)
    }
    chapters.classList.remove(`hidden`)
}

buttonWK.addEventListener('click', async () => {
    console.log("click")
    let gotchapters = await axios.get(`http://localhost:3001/Story/671949c2925be90a64256f46`)
    chapters = gotchapters.data.chapters
    console.log(chapters)
    const characterDetails = document.querySelector('#results')
    const characterContainer = document.querySelector('#section-1')
    characterDetails.classList.add('hidden')
    characterContainer.classList.add('hidden')
    showChapters(chapters)

})

buttonNH.addEventListener('click', async () => {
    console.log("click")
})

buttonDR.addEventListener('click', async () => {
    let gotchapters = await axios.get(`http://localhost:3001/Story/671949c2925be90a64256f46`)
    chapters = gotchapters.data.chapters
    console.log(chapters)
    const characterDetails = document.querySelector('#results')
    const characterContainer = document.querySelector('#section-1')
    characterDetails.classList.add('hidden')
    characterContainer.classList.add('hidden')
    showChapters(chapters)

})

buttonHome.addEventListener('click', () => {
    console.log("click")
    closeOC()
})
