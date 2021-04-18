import { messaging } from "../init-fcm";
import axios from 'axios';


export const getCurrentUser=async(id, setUser)=>{
  try{
    if(id){
      const response = await axios(`http://localhost:3001/users/${id}`, {withCredentials: true});
      const fetchedUser = await response.data;
      console.log(fetchedUser)
        if(setUser){
          setUser(fetchedUser);
        }else if(fetchedUser) {
          return fetchedUser
        }
    }
  }catch(error){
      console.log(error)
  }
}


export const login = async (email, password, props)=> {
  try{
    const res = await axios("http://localhost:3001/users/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email, password
      }, withCredentials: true // use cookies
    })
    props.setUser(res.data)
    localStorage.setItem('id', res.data._id);
    props.history.push('/feed')
    return res.data
    }catch(e){
    console.log(e);
    alert(e);
  }
  }


export const registrationHandler = async (e, inputData, props, setLoading) => {
  try {
    e.preventDefault();
    setLoading(true);
    const newUser = {
      email: inputData.email,
      name: inputData.name,
      surname: inputData.surname,
      username: inputData.username,
      password: inputData.password,
    };
    const response = await axios.post("http://localhost:3001/users/register", {
      headers: {
        "Content-Type": "application/json",
      },
      data: newUser,
    });
     props.setLogin(true);
    if (!response.errors) {
     console.log("registered")
    }else{
      alert(response.errors)
    }
  } catch (error) {
    console.log(error);
  }
};

export const getInfo=async(value, setValue, setUsers, setPosts)=>{
  setValue(value)
  if(value.length>=3){
    try{
      const userRes = await axios(`http://localhost:3001/users?name=${value}`, {withCredentials: true});
      const postRes = await axios(`http://localhost:3001/posts?name=${value}`, {withCredentials: true});
        if (userRes.data && postRes.data) {
          setUsers(userRes.data)
          setPosts(postRes.data);
        }
  }catch(error){
      console.log(error)
  }
  }else{
    setUsers([])
    setPosts([])
  }
}

export const getPosts=async(props)=>{
  try{
    const response = await axios(`http://localhost:3001/posts/`, {withCredentials: true});
    const posts = await response.data;
    props.fetchPosts(posts)
    }catch(error){
    console.log(error)
    }
}

export const fetchPost=async(props, setPost)=>{
  const response = await axios(`http://localhost:3001/posts/${props.id}`, {withCredentials: true});
  let infos = await response.data;
    if (infos) {
      infos = {...infos, comments: infos.comments.reverse()}
      setPost(infos)
    }
}


export const publishComment =async(e, postId, props, setPost, comment, setComment)=>{
  e.preventDefault();
  let userId = localStorage.getItem('id');
  let newComment={
      text: comment,
      user: userId
  }
  try{
      const res = await axios(`http://localhost:3001/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          newComment
        }, withCredentials: true // use cookies
      })
      if(res.status===201){
          fetchPost(props, setPost)
          setComment('')
      }
      }catch(e){
      console.log(e);
      alert(e);
    }
}


export const uploadPostPictureHandler = async (e, imageUrl) => {
  e.preventDefault();
  try {
    const response = await axios(`http://localhost:3001/posts/picture`, {
      method: "POST",
      data:imageUrl,
    });
    if (response.data.path) {
      return response.data.path
  }   
  } catch (er) {
    console.log(er);
  }
};

export const publishPost = async (e, imageUrl, inputData, props)=> {
  try{
      e.preventDefault();
      let userId = localStorage.getItem('id');
      let image= await uploadPostPictureHandler(e, imageUrl);
      let newPost={
          ...inputData, 
          img: image,
          user: userId
      }
    const res = await axios("http://localhost:3001/posts", {
      method: 'POST',
      data: {
       newPost
      }, withCredentials: true 
    })
    props.history.push('/feed')
  }catch(e){
    alert(e);
  }       
}


export const getUserPosts=async(props, setPosts)=>{
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

export const follow=async(props, currentId, localId)=>{
  try{
      let res = axios(`http://localhost:3001/users/follow/${currentId}/${localId}`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          }, withCredentials: true 
      })
      props.getUser(currentId, props.setUser);
      props.getUser(currentId, props.setUser);
  }catch(e){
      console.log(e);
  }
}


export const updateUserInfo = async (e, inputData, props, imageUrl)=> {
  e.preventDefault();
    try{
      let userId = localStorage.getItem('id');
       let newImage= await uploadPictureHandler(e, props, imageUrl);
          const res = await axios(`http://localhost:3001/users/${userId}`, {
            method: 'PUT',
            data: {
              ...inputData, 
              image: newImage,
              user: userId
            }, withCredentials: true 
          })
          getCurrentUser(userId)
          props.setUser(res.data)
          props.history.goBack()
        }catch(e){
      console.log(e);
      alert(e);
    }       
}

export  const uploadPictureHandler = async (e, props, imageUrl) => {
  e.preventDefault();
  try {
    const response = await axios(`http://localhost:3001/users/picture`, {
      method: "POST",
      data: imageUrl,
    });
    if (response.data.path) {
      props.setChanged()
     return response.data.path
    }   
  } catch (er) {
    console.log(er);
  }
};


export const savePost=async(props, id, myId)=>{
  try{
    const response = await axios(`http://localhost:3001/posts/save/${id}/${myId}`, {
      method: "POST",  
      withCredentials: true});
    getCurrentUser(myId, props.setUser);
  }catch(error){
    console.log(error)
    }
}


export const connectToFirebase =()=> {
   messaging.requestPermission()
     .then(async function() {
       const token = await messaging.getToken();
       console.log(token);
     })
     .catch(function(err) {
       console.log("Unable to get permission to notify.", err);
     });
 navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
 }