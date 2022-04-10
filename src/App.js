import {useState} from "react";


import {Posts, UserInfo, Users} from "./components";
import styles from './App.module.css'

export function App() {
    const [user, setUser] = useState(null)
    const [userIdForPosts, setUserIdForPosts] = useState(null)


    return (
        <div>
            <div>
                <div className={styles.usersAndInfo}>
                    <div className={styles.users}><Users setUser={setUser} setUserIdForPosts={setUserIdForPosts}/></div>
                    {user && <div className={styles.userInfo}><UserInfo user={user} setUserIdForPosts={setUserIdForPosts}/></div>}
                </div>
                {userIdForPosts && <div className={styles.posts}><Posts userIdForPosts={userIdForPosts}/></div>}
            </div>
        </div>
    );
}

