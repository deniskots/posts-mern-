import React from 'react';


const CommentItem = ({cmt}) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center rounded-full w-10 h-10 text-sm bg-blue-300'>
                Avatar
            </div>
            <div className='flex text-gray-300 text-sm'>{cmt.comment}</div>
        </div>
    );
};

export default CommentItem;
