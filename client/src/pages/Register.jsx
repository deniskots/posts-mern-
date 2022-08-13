import React, {useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchRegister, selectIsAuth} from "../redux/slices/auth";
import {toast} from "react-toastify";


const Register = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const isAuth = useSelector(selectIsAuth);

    const onSubmit = async () => {
        try {
           const data = await dispatch(fetchRegister({fullName, email, password}));
            console.log(data.payload)
            {data.payload ? toast('Супер регистрация прошла успешно') : toast('Не получилось пройти регистрацию')}
            if ('token' in data.payload) {
                window.localStorage.setItem('token', data.payload.token)
            }
        }catch (error) {
            console.log(error)
        }
    }

    if (isAuth) {
        return <Navigate to="/"/>
    }

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className='mx-auto mt-40 w-1/3'>
            <h1 className='text-xl text-white text-center mb-5'>Регистрация</h1>
            <label className='text-sm text-gray-400 '>
                FullName:
                <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder='FullName'
                    className='mt-1 text-black text-sm w-full rounded
                    bg-gray-400 border py-2 px-3 text-xs
                    outline-none placeholder: text-gray-700'/>
            </label>
            <label className='text-sm text-gray-400'>
                Email:
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder='Email'
                    className='mt-1 text-black text-sm w-full rounded
                    bg-gray-400 border py-2 px-3 text-xs
                    outline-none placeholder: text-gray-700'/>
            </label>
            <label className='text-sm text-gray-400'>
                Password:
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Password'
                    className='mt-1 text-black text-sm w-full rounded
                    bg-gray-400 border py-2 px-3 text-xs
                    outline-none placeholder: text-gray-700'/>
            </label>
            <div className="flex gap-8 justify-center mt-4">
                <Link to='/login' className='flex justify-center items-center text-sm text-white'>Уже
                    зарегистрированы?</Link>
                <button
                    type='submit'
                    className='flex justify-center items-center
                    bg-gray-400 text-sm text-white py-2 px-3 rounded-sm'
                    onClick={onSubmit}
                >
                    Создать
                </button>
            </div>

        </form>
    );
};

export default Register;
