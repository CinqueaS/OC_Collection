const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Story = new Schema(
    {
        title: {type: String, required: true },
        genres: {type: Array, required: true},
        creator: {type: Schema.Types.ObjectId, ref: 'creators_id'},
        characters: {type: Array, required: true}

    },
    { timestamps: true },
)

module.exports = mongoose.model('stories', Story)