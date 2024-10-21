const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Story = new Schema(
    {
        title: {type: String, required: true },
        genres: {type: Array, required: true},
        creator: {type: mongoose.Schema.Types.ObjectId, ref: 'creators_id', required: false},
        characters: {type: mongoose.Schema.Types.ObjectId, ref: 'characters_id', required: false},
        chapters: {type: Array, required: true}

    },
    { timestamps: true },
)

module.exports = mongoose.model('story', Story)