import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Post} from "../Post/Post";
import {loadPosts} from "../../redux/actions.creators";

export const Posts = () => {
    const postRootState = useSelector(state => state.postState);
    const dispatch = useDispatch();

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                dispatch(loadPosts(posts))
            })
    },[dispatch])

    return (
        <div>
            {
                postRootState.map(post=> <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

