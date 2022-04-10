import React from 'react';

export const PostInfo = ({userIdForPosts}) => {
    return (
        <div>
            <div>id: {userIdForPosts.id}</div>
            <div>title: {userIdForPosts.title}</div>
            <div>body: {userIdForPosts.body}</div>
        </div>
    );
};

