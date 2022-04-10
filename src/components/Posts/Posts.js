import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../Post/Post";

export const Posts = ({userIdForPosts}) => {
    const [posts, setPosts] = useState(null)

    useEffect(()=> {
        postsService.getAllPostsForUserId(userIdForPosts).then(({data})=>setPosts(data))
    },[userIdForPosts])
    return (
        <div>
            {
                posts && posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};



