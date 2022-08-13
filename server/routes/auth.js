import {Router} from 'express';
import {register, login, getMe} from '../controllers/userController.js'
import {loginValidation, registerValidation} from "../validations.js";
import handleValidationError from "../utils/handleValidationError.js";
import checkAuth from "../utils/checkAuth.js";

const router = new Router()

router.post('/register',registerValidation, handleValidationError,  register)
router.post('/login', loginValidation, handleValidationError, login)
router.get('/me', checkAuth, getMe)


export default router