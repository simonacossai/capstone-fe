import React, {useState, useEffect} from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import AddPin from '../AddPin/AddPin';
import { withRouter } from 'react-router-dom';
import {getCurrentUser, getUserPosts} from '../../api/request';

function Profile(props) {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(async() => {
        getUserPosts(props, setPosts);
        await getCurrentUser(props.match.params.id, setUser);
        
    }, [props.match.params.id])

    return (
        <div className="animate__animated animate__fadeIn">
            <ProfileInfo currentUser={user} getUser={getCurrentUser} setUser={setUser}/>
            <ProfilePosts posts={posts}/>
            <AddPin/>
        </div>
    )
}

export default withRouter(Profile)
