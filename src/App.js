import {useState} from "react";

import './App.css';
import {Posts, UserInfo, Users} from "./components";

export function App() {
    const [user, setUser] = useState(null)
    const [userIdForPosts, setUserIdForPosts] = useState(null)


    return (
        <div>
            <div>
                <div>
                    <Users setUser={setUser}/>
                    {user && <UserInfo user={user} setUserIdForPosts={setUserIdForPosts}/>}
                </div>
                {userIdForPosts && <Posts userIdForPosts={userIdForPosts}/>}
            </div>
        </div>
    );
}

