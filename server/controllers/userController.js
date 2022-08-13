import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../models/User.js';



export const register = async (req, res) => {
    try {
        const password = req.body.password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            passwordHash: hash
        })
        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SECRET_KEY, {expiresIn: '30d'})
        const {passwordHash, ...userData} = user._doc;

        res.json({
            ...userData,
            token
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось зарегистрироваться',
        });
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        };

        const isValidPassword = await bcrypt.compare(password, user._doc.passwordHash);
        if (!isValidPassword) {
            return res.status(400).json({
                message: 'Неверный пароль или логин'
            })
        };

        const token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SECRET_KEY, {expiresIn: '30d'})

        const {passwordHash, ...userData} = user._doc;
        res.json({
            ...userData,
            token
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось авторизоваться',
        });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId)
        if(!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }
        const {passwordHash, ...userData} = user._doc;
        res.json(userData)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить данные',
        });
    }
};