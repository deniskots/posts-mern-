import React from 'react';
import {AiFillEye, AiOutlineDelete, AiOutlineMessage} from "react-icons/ai";
import Moment from "react-moment";
import {Link} from "react-router-dom";



const PostItem = ({post}) => {
    if(!post) {
        return (
            <div className='text-xl text-white text-center py-10'>
                Загрузка...
            </div>
        )
    }
    return (
        <Link to={`/${post._id}`}>
            <div className='flex flex-col basis-1/4 flex-grow'>
                <div>
                    {post.imageUrl &&
                        <img
                            className='object-cover w-full'
                            src={`http://localhost:3003/${post.imageUrl}`}
                            alt=""
                        />
                    }
                </div>
                <div className='flex justify-between items-center pt-2'>
                    <div className='text-xs text-white opacity-70'>{post.fullName}</div>
                    <div className='text-xs text-white opacity-70'>
                        <Moment date={post.createdAt} format='D MMM YYYY'/>
                    </div>
                </div>
                <div className='text-xl text-white'> {post.title}</div>
                <p className='text-xs text-white opacity-70 pt-4 line-clamp-3'>{post.text}</p>
                <div className='flex gap-3 items-center mt-3'>
                    <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                        <AiFillEye/> <span>{post.viewCount}</span>
                    </button>
                    <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                        <AiOutlineMessage/> <span>{post.comments?.length}</span>
                    </button>
                </div>
            </div>
        </Link>

    );
};

export default PostItem;
