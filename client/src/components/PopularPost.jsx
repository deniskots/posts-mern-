import React from 'react';
import {Link} from "react-router-dom";

const PopularPost = ({post}) => {
    return (
        <div className='bg-grey-600 my-1'>
            <Link to={`${post._id}`} className='flex p-1 text-xs text-white text-grey-400  hover:bg-amber-50 hover:text-black'>
                {post.title}
            </Link>
        </div>
    );
};

export default PopularPost;
