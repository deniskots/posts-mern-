import PostModel from '../models/Post.js';
import UserModel from '../models/User.js';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';


export const create = async (req, res) => {
    try {
        const {title, text} = req.body;
        const user = await UserModel.findById(req.userId)
        if(req.files) {
            let fileName =  Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))

            const doc = new PostModel({
                username: user.username,
                title,
                text,
                imageUrl: fileName,
                user: req.userId,
            });
            const post = await doc.save();
            await UserModel.findByIdAndUpdate(req.userId, {
                $push: {posts: post}
            })
            return res.json(post)
        }

        const doc = new PostModel({
            username: user.username,
            title,
            text,
            imageUrl: '',
            user: req.userId,
        })
        const postNoImg = await doc.save();
        await UserModel.findByIdAndUpdate(req.userId, {
            $push: {posts: postNoImg}
        })
        res.json(postNoImg)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать публикацию',
        });
    }
};

export const getAll = async (req,res) => {
    try {
        const posts = await PostModel.find().sort('-createdAt').populate('user').exec()
        const postsPopular = await PostModel.find().sort('-views').limit(5)
        if(!posts) {
            return res.json({message: 'Публикаций нет'})
        }
        res.json({posts, postsPopular})
    }catch (e) {
        console.log(e)
        res.status(500).json({message: 'Не удалось получить все публикации'})
    }
}

export const getOne = async (req,res) => {
    try {
        const postId = req.params.id;
        //можно и просто файндван,но необходимо возращать обновленную статью,для изменения счетчика просмотра
        PostModel.findOneAndUpdate({
                _id: postId
            }, {
                $inc: {viewCount: 1}
            }, {
                returnDocument: 'after'
            },
            (err, doc) => {
                if (err) {
                    return res.status(500).json({message: 'Не удалось получить публикацию'})
                }
                if (!doc) {
                    return res.status(404).json({message: 'Статья не обнаружена'})
                }
                res.json(doc)
            }).populate('user')
    }catch (e) {
        console.log(e)
        res.status(500).json({message: 'Не удалось получить публикацию'})
    }
}

export const getMyPosts = async (req,res) => {
    try {
        const user = await UserModel.findById(req.userId);
        const postsList = await Promise.all(
            user.posts.map((post) => {
                return PostModel.findById(post._id)
            })
        )
        res.json(postsList)
    }catch (e) {
        console.log(e)
        res.status(500).json({message: 'Не удалось получить публикацию'})
    }
}

export const deletePost = async (req,res) => {
    try {
        const postId = req.params.id
        const post = await PostModel.findByIdAndDelete(postId)
        if(!post) {
            return res.json({message: 'Таклй публикации не существует'})
        }
        await UserModel.findByIdAndUpdate(req.userId, {
            $pull: {posts: postId}
        })
        res.json({message: 'Публикация удалена'})
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Не удалось удалить публикацию'})
    }
}

export const updatePost = async (req,res) => {
    try {
        const {title, text, id} = req.body
        const post = await PostModel.findById(id)

        if(req.files) {
            let fileName =  Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))
            post.imageUrl = fileName || ''
        }
        post.title = title
        post.text = text
        await post.save()

        res.json(post)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Не удалось удалить публикацию'})
    }
}