import React, {useCallback, useEffect, useState} from 'react';
import axios from "../utils/axios";
import PostItem from "../components/PostItem";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchMyPosts = useCallback(async () => {
        try {
            const {data} = await axios.get('/posts/user/me')
            setPosts(data)
        } catch (e) {
            console.log(e)
        }
    },[]);

    useEffect(() => {
        fetchMyPosts()
    }, [fetchMyPosts])



    return (
        <div className='w-1/2 flex flex-col gap-10 mx-auto py-10'>
            {posts?.map((post, index) => <PostItem post={post} key={index}/>)}
        </div>
    );
};

export default Posts;
