import PostModel from '../models/Post.js';
import CommentModel from '../models/Comment.js';
import UserModel from '../models/User.js';

export const createComment = async (req, res) => {
    try {
        const {postId, comment} = req.body;
        if(!comment) {
            return res.json({message: 'Error'})
        }
        const newComment = new CommentModel({comment})
        await newComment.save()

        try{
            await PostModel.findByIdAndUpdate(postId, {
                $push: {comments: newComment._id}
            })
        }catch (e) {
            console.log(e)
        }

        res.json(newComment)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать коментарий',
        });
    }
};
