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
    const creators = await axios.get(`http://localhost:3001/Creators/`)
    let i = 0
        OCs.data.forEach((OC) => {
            let new_div = document.createElement("div")
            let parent = document.getElementById("characters")
            let div_img = document.createElement("img")
            let button = document.createElement("button")
            div_img.setAttribute("class",  `${creators.data[i]._id}`)
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
            i = i+1
         } 
        
     )
    
   
getThisOC()
console.log(creators)
    }
getOC()

const getCreators = async() =>{
    const creators = await axios.get(`http://localhost:3001/Creators/`)
    botOfPage = document.querySelector('.Creators')
    botOfPage.innerText = `Brought to you by our following sponsors ${creators.data[0].userName}, ${creators.data[1].userName}, ${creators.data[2].userName}`
}
getCreators()
async function getThisOC() {
    images.forEach(image => {
        image.addEventListener('click', async (event) => {
            const id = event.target.getAttribute('id')
            const classid = event.target.getAttribute('class')
            console.log(id)
            const characterDetails = document.querySelector('#results')
            const characterContainer = document.querySelector('#section-1')

            try {
                const response = await axios.get(`http://localhost:3001/Character/${id}`)
                const response2 = await axios.get(`http://localhost:3001/Creators/${classid}`)
                const OC = response.data
                document.getElementById('characterName').innerText = `${OC.Name}`
                document.getElementById('owner').innerText = `this OC belongs to ${response2.data.userName}`
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
    let gotchapters = await axios.get(`http://localhost:3001/Story/671a583a0a1131e926ad6189`)
    chapters = gotchapters.data.chapters
    console.log(chapters)
    const characterDetails = document.querySelector('#results')
    const characterContainer = document.querySelector('#section-1')
    characterDetails.classList.add('hidden')
    characterContainer.classList.add('hidden')
    showChapters(chapters)

})

buttonNH.addEventListener('click', async () => {
    let gotchapters = await axios.get(`http://localhost:3001/Story/671a583a0a1131e926ad618a`)
    chapters = gotchapters.data.chapters
    console.log(chapters)
    const characterDetails = document.querySelector('#results')
    const characterContainer = document.querySelector('#section-1')
    characterDetails.classList.add('hidden')
    characterContainer.classList.add('hidden')
    showChapters(chapters)
})

buttonDR.addEventListener('click', async () => {
    let gotchapters = await axios.get(`http://localhost:3001/Story/671a583a0a1131e926ad618b`)
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
