const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Character = new Schema(
    {
        Name: { type: String, required: true },
        story: {type:mongoose.Schema.Types.ObjectId, ref: "stories_id", required: false},
        bio: {type:String, required: true},
        age: {type: Number, required: true},
        gender: {type: String, required: true},
        height: {type: String, required: true},
        weight: {type: String, required: true},
        images: {type: Array, required: true}

    },
    { timestamps: true },
)

module.exports = mongoose.model('characters', Character)