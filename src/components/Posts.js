import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../redux/actions.creators";

export const Posts = () => {
    const postsDefaultState = useSelector(state => state.postsState);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                dispatch(loadPosts(posts))
            });
    }, [])

    return (
        <div>
            {postsDefaultState.map(post=> <div key={post.id}>{post.id} - {post.title}</div>)}
        </div>
    );
};

