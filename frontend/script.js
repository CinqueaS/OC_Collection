const Home = require("Home.js")
// const getOC = async () => {
//     const OCs = await axios.get(`http://localhost:3001/Character/`)
//     console.log(OCs)
// }


let characterName = document.querySelector(`#characterName`)
let homeStory = document.querySelector(`#homeStory`)
getOC() 
async function OCSearch() {

    let id = "671657082dc320fe35999f25"
    let response = await axios.get(
        `http://localhost:3001/Character/${id}`, 
    )

    let OCname = response.data.Name
    // let Story = response.data.story
    characterName.innerText = OCname
    // homeStory.innerText = Story

    console.log(OCname)
    console.log(response)

}
OCSearch()


// button.addEventListener(`click`, () => {
// 
// })
// let typingTimer
// let doneTypingInterval = 1000

// input.addEventListener(`keyup`, () =>{
//     clearTimeout(typingTimer);
//     if (input.value) {
//         typingTimer = setTimeout(doneTyping, doneTypingInterval);
//     }
// })

// async function doneTyping(){   
//     await getAnime()
//     let result = []
//     let inputs = input.value
//     if(inputs.length){
        
//         result = animeList.filter((keyword)=>{
//             return keyword.toLowerCase().includes(inputs.toLowerCase())
//         })
//          console.log(result)

//     }
//     display(result)

//     if(!result.length){
//         resultsBox.innerHTML = ""
//     }
// }

// async function display(result){
//     const content = result.map((list) =>{
//         return "<li onclick=selectInput(this)>" + list + "</li>"
//     })

//     resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"
// }
// function selectInput(list){
//     input.value = list.innerText

//     animeSearch()
// }
