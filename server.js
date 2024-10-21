const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require(`morgan`)
const everythingController = require('./controllers/everythingController')
const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get(`/`, (req, res) => {
    res.send("You have set up your server.js")
})

app.get(`/Creator`, everythingController.getAllCreator)
app.get('/Creator/:id', everythingController.getCreatorById)
app.get('/Creator/name/:userName', everythingController.getCreatorByName)
app.post(`/Creator`, everythingController.createCreator)
app.put('/Creator/:id', everythingController.updateCreator)
app.delete('/Creator/:id', everythingController.deleteCreator)
app.get(`/Character`, everythingController.getAllCharacters)
app.get(`/Story`, everythingController.getAllStory)
app.get('/Character/:id', everythingController.getCharacterById)
app.get('/Story/:id', everythingController.getStoryById)
app.post(`/Character`, everythingController.createCharacter)
app.put('/Character/:id', everythingController.updateCharacter)
app.delete('/Character/:id', everythingController.deleteCharacter)
app.post(`/Story`, everythingController.createStory)
app.put('/Story/:id', everythingController.updateStory)
app.delete('/Story/:id', everythingController.deleteStory)
