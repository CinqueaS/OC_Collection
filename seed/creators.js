const db = require('../db')
const  Creators  = require('../models/creator')
const Stories = require('../models/story')
const Characters = require('../models/character')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {}



















const run = async () => {
    await main()
    db.close()
  }
  
  run()