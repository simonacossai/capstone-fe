import React, {useState, useEffect} from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import AddPin from '../AddPin/AddPin';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Profile(props) {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
//get user se non c'è un id nella  barra di ricerca uso quello del localstorage( quindi vedo il mio profilo), altrimenti uso quello nella barra
    const getPosts=async()=>{
        let userId = localStorage.getItem('id');
        try{
            const response = await axios(`http://localhost:3001/posts/user/${props.match.params.id}`, {withCredentials: true});
            const fetchedPosts = await response.data;
              if (fetchedPosts) {
                setPosts(fetchedPosts)
            }
        }catch(error){
            console.log(error)
        }
    }

    const getUser=async()=>{
        try{
            const response = await axios(`http://localhost:3001/users/${props.match.params.id}`, {withCredentials: true});
            const fetchedUser = await response.data;
              if (fetchedUser) {
                setUser(fetchedUser)
            }
        }catch(error){
            console.log(error)
        }
    }
    
    useEffect(() => {
        getPosts();
        getUser();
    }, [props.match.params.id])

    return (
        <div className="animate__animated animate__fadeIn">
            <ProfileInfo currentUser={user} getUser={getUser}/>
            <ProfilePosts posts={posts}/>
            <AddPin/>
        </div>
    )
}

export default withRouter(Profile)
