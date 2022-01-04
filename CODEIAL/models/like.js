const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId
    },
    // this defines object id of th ;iked object
    likeable:{
        type: mongoose.Schema.ObjectId,
        require:true,
        refPath:'onModel'
    },
    // this field for fefining the type of liked obj since this is a dynamic reff
    onModel:{
        type: String,
        required:true,
        enum: ['Post','Comment']
    }
},{
    timestamps: true
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;