const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Character = new Schema(
    {
        Name: { type: String, required: true },
        story: {type:Schema.Types.ObjectId, ref: "stories_id"},
        bio: {type:String, required: true},
        images: {}

    },
    { timestamps: true },
)

module.exports = mongoose.model('creators', Creator)