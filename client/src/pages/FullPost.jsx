import React, {useEffect, useState} from 'react';
import Moment from "react-moment";
import {AiFillEye, AiOutlineDelete, AiOutlineEdit, AiOutlineMessage} from "react-icons/ai";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "../utils/axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchRemovePosts} from "../redux/slices/post";
import {toast} from "react-toastify";


const FullPost = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    const userData = useSelector(state => state.auth.data);
    const dispatch = useDispatch();
    const navigate = useNavigate()

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

    const removePostHandler = () => {
        try {
            dispatch(fetchRemovePosts(id))
            toast('Вы успешно удалили')
            navigate('/')
        } catch (e) {
            console.log(e)
        }

    }
    const goBack = () => {
        navigate(-1)
    }

    if (!post) {
        return (
            <div className='text-xl text-white text-center py-10'>
                Загрузка...
            </div>
        )
    }

    return (
        <div>
            <button
                onClick={goBack}
                className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4'
            >
                Назад
            </button>
            <div className="flex gap-10 py-8">
                <div className='w-2/3'>
                    <div className='flex flex-col basis-1/4 flex-grow'>
                        <div>
                            {post?.imageUrl &&
                                <img
                                    className='object-cover w-full'
                                    src={`http://localhost:3003/${post?.imageUrl}`}
                                    alt=""
                                />
                            }
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-2'>
                        <div className='text-xs text-white opacity-70'>{post.fullName}</div>
                        <div className='text-xs text-white opacity-70'>
                            <Moment date={post.createdAt} format='D MMM YYYY'/>
                        </div>
                    </div>
                    <div className='text-2xl text-white'> {post.title}</div>
                    <p className='text-base text-white opacity-70 pt-4'>{post.text}</p>
                    <div className='flex gap-3 items-center mt-3 justify-between'>
                        <div className='flex gap-3 mt-4'>
                            <button className='flex items-center justify-center gap-2 text-xm text-white opacity-50'>
                                <AiFillEye/> <span>{post.viewCount}</span>
                            </button>
                            <button className='flex items-center justify-center gap-2 text-xm text-white opacity-50'>
                                <AiOutlineMessage/> <span>{post.comments?.length}</span>
                            </button>
                        </div>

                        {userData?._id === post.user._id && (
                            <div className='flex gap-3 mt-4'>
                                <button
                                    className='flex items-center justify-center gap-2 text-xl text-white opacity-50'
                                >
                                    <AiOutlineEdit/>
                                </button>
                                <button
                                    className='flex items-center justify-center gap-2 text-xl text-white opacity-50'
                                    onClick={removePostHandler}
                                >
                                    <AiOutlineDelete/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-1/3'>
                    comments
                </div>
            </div>
        </div>
    );
};

export default FullPost;
