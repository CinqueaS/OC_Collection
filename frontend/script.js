const image = document.querySelectorAll(`.character-box`)


const getOC = async () => {
    const OCs = await axios.get(`http://localhost:3001/Character`)
    console.log(OCs)
}
let characterName = document.querySelector(`#characterName`)

getOC() 
async function OCSearch() {

    let response = await axios.get(
        `localhost:3001/Character/`, 
    )

    let OCname = respone.




}

image.addEventListener(`click`, () => {
    OCSearch()
})