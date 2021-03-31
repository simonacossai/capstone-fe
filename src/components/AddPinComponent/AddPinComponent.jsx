import React, {useState, useEffect} from 'react'
import './AddPinComponent.scss';
import {Container, Row, Col} from 'react-bootstrap';
import {Button} from 'gestalt';
import {FaFileUpload} from 'react-icons/fa';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";


const mapStateToProps = (state) => state;

function AddPinComponent(props) {
    const [inputData, setInputData] = useState({title:"", description:"", category:"",img: ""});
    const [imageUrl, setImageUrl]=useState('');

   const HandleFile = (e) => {
        const formData = new FormData();
        formData.append("postImage", e.target.files[0]);
        setImageUrl(formData);
    };

    const inputDataHandler = (event) => {
        setInputData({ ...inputData, [event.target.name]: event.target.value });
      };

      const uploadPictureHandler = async (e) => {
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
    

    const publish = async (e)=> {
        try{
            e.preventDefault();
            let userId = localStorage.getItem('id');
            let image= await uploadPictureHandler(e);
            let newPost={
                ...inputData, 
                img: image,
                user: userId
            }
            console.log(newPost);
          const res = await axios("http://localhost:3001/posts", {
            method: 'POST',
            data: {
             newPost
            }, withCredentials: true 
          })
          console.log(res);
          props.history.push('/feed')
        }catch(e){
          console.log(e);
          alert(e);
        }       
    }

    return (
        <Container className="d-flex justify-content-center align-items-center w-100 AddPinComponent animate__animated animate__fadeInBottom">
            <Row className="d-flex justify-content-center align-items-center w-100">
                <Col md={10} className="AddPostDiv mt-4 px-4">
                        <form onSubmit={publish}>
                        <Container fluid>
                            <Row className="d-flex justify-content-end pt-5 mr-2"><Button text="Publish" color="red" inline type="submit"/></Row>
                            <Row className="mt-1">
                                <Col md={6} className="d-flex justify-content-center align-items-center w-100">
                                    <div className="uploadImage p-3">
                                        <div className="uploadImageInnerDiv d-flex align-items-center justify-content-center">
                                        <FaFileUpload className="uploadIcon"/>
                                        <p>Upload image</p>
                                        <input type="file" className="fileInput"  onChange={HandleFile} accept="image/*"/>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="pr-5">
                                    <input type="text" className="titleInput" placeholder="Enter a title" name="title" value={inputData.title}
                                    onChange={(event) => inputDataHandler(event)}/>
                                    <textarea type="text" row="3" className="descriptionInput" name="description" placeholder="Enter a description.."
                                    value={inputData.description}
                                    onChange={(event) => inputDataHandler(event)}/>
                                    <select className="categorySelect w-100 p-2" name="categories" name="category"
                                    value={inputData.category}
                                    onChange={(event) => inputDataHandler(event)}>
                                        <option value="all">category</option>
                                        <option value="art">Art</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="games">Videogames and consoles</option>
                                        <option value="design">Home design</option>
                                        <option value="sports">Sports and workout</option>
                                        <option value="travel">Traveling</option>
                                        <option value="landscape">Landscape</option>
                                    </select>
                                </Col>
                            </Row>
                        </Container>
                                </form>
                </Col>
            </Row>
        </Container>     
    )
}

export default withRouter(connect(mapStateToProps)(AddPinComponent))