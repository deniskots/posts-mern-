import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsAuth} from "../redux/slices/auth";
import {toast} from "react-toastify";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const navigate = useNavigate()

    const activeLink = {
        color: 'white'
    };
    const onClickLogout = () => {
        dispatch(logout())
        navigate('/register')
        toast('Вы вышли из аккаунта')

    };

    return (
        <div className='flex py-5 justify-between items-center'>
            <span className='items-center text-xs text-white bg-amber-400 px-2 py-2 rounded-2xl'>
                LOGO
            </span>
            {isAuth &&
                <ul className='flex gap-8'>
                    <li>
                        <NavLink
                            to='/'
                            className='text-sx text-gray-400 hover:text-white'
                            style={({isActive}) => isActive ? activeLink : undefined}>
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/posts'
                            className='text-sx text-gray-400 hover:text-white'
                            style={({isActive}) => isActive ? activeLink : undefined}>
                            Мои публикация
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/new'
                            className='text-sx text-gray-400 hover:text-white'
                            style={({isActive}) => isActive ? activeLink : undefined}>
                            Добавить
                        </NavLink>
                    </li>
                </ul>
            }
            <div
                className="flex justify-center items-center bg-red-600 text-lg text-white rounded-sm px-3 py-1 shadow-lg">
                {isAuth ? <button onClick={onClickLogout}>Выйти</button> : <Link to='/login'>Войти</Link>}

            </div>
        </div>
    );
};

export default Navbar;
