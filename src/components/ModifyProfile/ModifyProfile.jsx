import React,{useState, useEffect} from 'react';
import './ModifyProfile.scss';
import {Container, Row, Col} from 'react-bootstrap';
import {Avatar, Button, Box, TextField} from 'gestalt';
import axios from 'axios';
import { connect } from "react-redux";
import {updateUserInfo} from '../../api/request';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setChanged: () => dispatch({type: "CHANGED"}),
  setUser: (user) => dispatch({type: "LOGIN", payload: user}),
});

function ModifyProfile(props) {
  const [imageUrl, setImageUrl]=useState('');
  const [inputData, setInputData] = useState({
    name:"",
    surname:"",
    username:"",
    email: "",
    image:"",
  });

  
    const inputDataHandler = (event) => {
      setInputData({ ...inputData, [event.event.target.name]: event.event.target.value });
    };

    const HandleFile = (e) => {
      const formData = new FormData();
      formData.append("profilePic", e.target.files[0]);
      setImageUrl(formData);
  };


  useEffect(() => {
        setInputData({
          name: props.user.data.name,
          surname: props.user.data.surname,
          username:props.user.data.username,
          email: props.user.data.email,
          image: props.user.data.image
        })
  }, [props.user.data])
    return (
       <Container className="ModifyProfile mt-5 animate__animated animate__fadeIn">
           <Row className="mt-5 pt-5 animate__animated animate__fadeIn">
                <Col md={6} className="d-flex justify-content-center LeftColModifyProfile">
                    <h2>Edit your profile</h2>
                    <p>People who'll visit your profile will see these information</p>

                    <div className="d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                        <Avatar size="xl" src={inputData?.image} name="Keerthi"/>
                        <div className="mt-3 addImageDiv">
                        <input type="file" onChange={HandleFile} accept="image/*"/><Button size="md" text="Change profile pic" color="red" id="addImageButton" inline wrap/>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                <form onSubmit={(e)=>updateUserInfo(e, inputData, props, imageUrl)} className="w-100">
                <Box display="flex"
                marginEnd={-3}
                marginBottom={-3}
                wrap
                width="100%"
                direction="column"
                maxWidth={800}>
                <Box flex="grow" paddingX={3} paddingY={3}>
                <TextField
                label="Username"
                id="textfield1"
                name="username"
                value={inputData?.username}
                onChange={(event) => inputDataHandler(event)}
                placeholder="Name"/>
                </Box>

  <Box flex="grow" paddingX={3} paddingY={3}>
    <Box
      display="flex"
      wrap
      marginStart={-3}
      marginEnd={-3}
      marginBottom={-3}
      marginTop={-3}
      >
      <Box flex="grow" paddingX={3} paddingY={3}>
        <TextField
          label="Name"
          name="name"
          value={inputData?.name}
          id="textfield2"
          onChange={(event) => inputDataHandler(event)}
          placeholder="Name"
        />
      </Box>
      <Box flex="grow" paddingX={3} paddingY={3}>
        <TextField
          label="Surname"
          name="surname"
          value={inputData?.surname}
          id="textfield3"
          onChange={(event) => inputDataHandler(event)}
          placeholder="Placeholder"
        />
      </Box>
    </Box>
  </Box>
    <Box flex="grow" paddingX={3} paddingY={3}>
                <TextField
                label="Email"
                id="email"
                name="email"
                value={inputData?.email}
                onChange={(event) => inputDataHandler(event)}
                placeholder="Placeholder"/>
                </Box>

  <Box flex="grow" paddingX={3} paddingY={3}>
    <Box
      justifyContent="end"
      marginStart={-1}
      marginEnd={-1}
      marginTop={-1}
      marginBottom={-1}
      display="flex"
      wrap
    >
      <Box paddingX={1} paddingY={1}>
        <Button text="Cancel" size="lg" inline />
      </Box>
      <Box paddingX={1} paddingY={1}>
        <Button text="Submit" color="red" size="lg" type="submit" />
      </Box>
    </Box>
  </Box>
</Box>
      </form>
                </Col>
           </Row>
       </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProfile)