/*import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../utils/axios";

const EditPost = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [oldImage, setOldImage] = useState('');
    const [newImage, setNewImage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`/posts/${id}`)
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => {
                console.log(err)
                alert('Ошибка получения публикации')
            });
    }, [])

    return (
        <form
            className='w-1/3 mx-auto py-12'
            onSubmit={(e) => e.preventDefault()}
        >
            <label
                className='flex items-center justify-center border-2 text-gray-300 bg-gray-600 py-2 text-xm cursor-pointer'
            >
                Загрузить изображение:
                <input
                    type="file"
                    className='hidden'
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </label>
            <div
                className='flex flex-col object-cover py-3 text-gray-300'
            >
                {image && <img src={URL.createObjectURL(image)} alt=""/>}
                {image &&
                    <button
                        onClick={onClickRemoveImage}
                        className='flex justify-center items-center mt-2 bg-red-500 text-xs text-white rounded-sm py-2 px-4'
                    >
                        Delete
                    </button>}
            </div>
            <label
                className='text-xm text-white opacity-70 cursor-pointer'
            >
                Заголовок публикации:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='mt-1 text-black w-full rounded-xs bg-zinc-50 py-2 px-3 text-xm outline-none'
                    placeholder='Заголовок'
                />
            </label>
            <label
                className='text-xm text-white opacity-70 cursor-pointer'
            >
                Текст публикации:
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='mt-1 text-black w-full rounded bg-zinc-50 py-2 px-3 text-xm outline-none resize-none h-36'
                    placeholder='Введите текст'
                />
            </label>
            <div className='flex items-end justify-end gap-8 mt-4'>
                <button
                    className='flex items-center justify-center bg-gray-600 text-white text-xs py-2 px-4 rounded-xm'
                    onClick={onSubmit}
                >
                    Добавить
                </button>
                <button
                    onClick={clearFormHandler}
                    className='flex items-center justify-center bg-red-500 text-white text-xs py-2 px-4 rounded-xm'
                >
                    Отменить
                </button>

            </div>
        </form>
    );
};

export default EditPost;*/
