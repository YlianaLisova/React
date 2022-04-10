import React from 'react';

export const Post = ({post}) => {
    return (
        <div>
            <div>UserId: {post.userId}</div>
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
        <hr/>
        </div>
    );
};

