import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet, useParams, useSearchParams} from "react-router-dom";


export const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {userId} = useParams();
    const [query, setQuery] = useSearchParams({page:'1'});


    useEffect(()=> {
        if(userId){
            postService.getUserById(userId).then(({data})=> setPosts(data))
        } else {
        postService.getAll(query.get('page'), 10).then(({data})=> setPosts(data))
        }
    },[userId,query])

    const nextPage = () => {
      // let page = query.get('page');
      // page = +page +1
      // setQuery({page:page.toString()})

        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++
        setQuery(queryObj)

    }

    return (
        <div style={{display:"flex"}}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}
                <button onClick={()=> nextPage()}>next</button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

