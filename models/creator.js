const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Creator = new Schema(
    {
        userName: { type: String, required: true },
        stories: {}

    },
    { timestamps: true },
)

module.exports = mongoose.model('creators', Creator)