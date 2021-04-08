import { messaging } from "../init-fcm";
import axios from 'axios';

export const getCurrentUser=async()=>{
  let currentUserId = localStorage.getItem('id');
    try{
      if(currentUserId){
        const response = await axios(`http://localhost:3001/users/${currentUserId}`, {withCredentials: true});
        const fetchedUser = await response.data;
          if (fetchedUser) {return fetchedUser}
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