import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
        title: {type: String, required: true},
        username: {type: String},
        text: {type: String, required: true},
        imageUrl: {type: String, default: ''},
        viewCount: {type: Number, default: 0},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
    },
    {timestamps: true}
)


export default mongoose.model('Post', PostSchema)