import React, {useEffect} from 'react';
import PostItem from "../components/PostItem";
import PopularPost from "../components/PopularPost";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/slices/post";


const Main = () => {
    const dispatch = useDispatch();
    const {posts, popularPosts, loading} = useSelector(state => state.post);
    const isPostLoading = loading === 'true';


    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    if(!posts) {
        return (
            <div className='text-xl text-white text-center py-10'>
                Загрузка публикаций...
            </div>
        )
    }

    return (
        <div className='max-w-[900px] mx-auto py-10'>
            <div className='flex justify-between gap-8'>
                <div className="flex flex-col gap-10 basis-4/5">

                    {/*{(isPostLoading ? <PostItem/> : posts).map((post, index) =>
                        isPostLoading
                            ? ( <div key={index} className='text-xl text-white text-center py-10'>Загрузка публикаций...</div>)
                            : (<PostItem post={post}/>)
                    )}*/}
                    { posts?.map((post, index) => <PostItem key={index} post={post}/>)}
                </div>
                <div className='basis-1/5'>
                    <div className='text-xs text-white uppercase'>
                        Популярные:
                    </div>
                    {popularPosts?.map((post, index) => <PopularPost key={index} post={post}/>)}
                </div>
            </div>
        </div>
    );
};

export default Main;
