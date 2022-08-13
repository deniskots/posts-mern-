import React from 'react';

const PopularPost = ({post}) => {
    return (
        <div className='bg-grey-600 my-1'>
            <div className='flex p-1 text-xs text-grey-400 bg-gray-600 hover:bg-gray-800 hover:text-white'>
                {post.title}
            </div>
        </div>
    );
};

export default PopularPost;
