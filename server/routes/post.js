import {Router} from 'express';
import checkAuth from "../utils/checkAuth.js";
import {create, deletePost, getAll, getMyPosts, getOne, updatePost} from "../controllers/postController.js";

const router = new Router();

router.post('/', checkAuth, create)
router.get('/', getAll)
router.get('/:id', getOne);
router.get('/user/me', checkAuth, getMyPosts);
router.delete('/:id', checkAuth, deletePost);
router.put('/:id', checkAuth, updatePost);


export default router