import React from 'react';


const CommentItem = ({cmt}) => {
    const avatarLetters = cmt.comment.trim().toUpperCase().split('').slice(0, 2)

    return (
        <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center rounded-full w-10 h-10 text-sm bg-blue-300'>
                {avatarLetters}
            </div>
            <div className='flex text-gray-300 text-sm'>{cmt.comment}</div>
        </div>
    );
};

export default CommentItem;
