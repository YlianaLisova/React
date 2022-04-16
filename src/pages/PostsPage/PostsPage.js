import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet} from "react-router-dom";


export const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        postService.getAll().then(({data})=> setPosts(data))
    },[])
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

