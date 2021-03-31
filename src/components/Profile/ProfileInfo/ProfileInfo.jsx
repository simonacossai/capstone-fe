import React, {useState, useEffect} from 'react';
import './ProfileInfo.scss';
import {Container, Row} from 'react-bootstrap';
import {Box, Avatar, Button} from 'gestalt';
import {withRouter, Link} from 'react-router-dom';

function ProfileInfo(props) {
    const [selected, setSelected] = useState(false);
    const currentId = props.match.params.id
    const localId= localStorage.getItem('id');
    
    return (
       <Container className="d-flex justify-content-center w-100 mt-4 ProfileInfoContainer">
           <Row className="d-flex justify-content-center align-items-center w-100 text-center ProfileInfoRow">
           <Box column={2} >
                <Avatar name="Keerthi" src={props.user?.image} />
           </Box>
                <h2 className="font-weight-bold text-black p-0">{props.user?.name ?? 'Lorem'} {props.user?.surname ?? 'Ipsum'}</h2>
                <div className="d-flex text-secondary p-0">{'@'+props.user?.username + ' '} · {props.user?.description ?? 'Welcome to my profile!'} </div>
                <div className="d-flex p-0">
                    <p className="p-0 m-0 text-black font-weight-bold mr-1">1,7mila follower </p> ·
                    <p className="p-0 m-0 text-black font-weight-bold ml-1"> 20 following </p> 
                </div>
                <div className="d-flex p-0 mt-2 w-100 justify-content-center">
                    {currentId!== localId ?
                    <>
                    <div className="mr-1">
                    <Button color="grey" text="Text" inline size="md" />
                    </div>
                    <div className="ml-1">
                    <Button color="red"
                    onClick={() => setSelected(!selected)} inline selected={selected} text={selected ? "Unfollow" : "Follow"} />
                    </div>
                    </>
                    : 
                    <div className="mr-1">
                    <Link to="/modify">
                        <Button color="grey" text="Modify Profile" inline size="md" />
                    </Link>
                    </div>
                    }
                </div>
           </Row>
       </Container>
    )
}


export default withRouter(ProfileInfo)