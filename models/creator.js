const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Creator = new Schema(
    {
        userName: { type: String, required: true },
        stories: {type: mongoose.Schema.Types.ObjectId, ref: "stories_id", required: false},
        characters: {type: mongoose.Schema.Types.ObjectId, ref: "characters_id", required: false}
    },
    { timestamps: true },
)

module.exports = mongoose.model('creators', Creator)