import React, {useState, useEffect} from 'react';
import './ProfileInfo.scss';
import {Container, Row} from 'react-bootstrap';
import {Box, Avatar, Button} from 'gestalt';
import {withRouter, Link} from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';

const mapStateToProps = (state) => state;
function ProfileInfo(props) {
    const currentId = props.match.params.id
    const localId= localStorage.getItem('id');
    const follow=async()=>{
        try{
            let res = axios(`http://localhost:3001/users/follow/${currentId}/${localId}`, {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                }, withCredentials: true 
            })
            props.getUser();
            props.getUser();
        }catch(e){
            console.log(e);
        }
    }
    return (
       <Container className="d-flex justify-content-center w-100 mt-4 ProfileInfoContainer">
           <Row className="d-flex justify-content-center align-items-center w-100 text-center ProfileInfoRow">
           <Box column={2} >
                <Avatar name="Keerthi" src={props.currentUser?.image} />
           </Box>
                <h2 className="font-weight-bold text-black p-0">{props.currentUser?.name ?? 'Lorem'} {props.currentUser?.surname ?? 'Ipsum'}</h2>
                <div className="d-flex text-secondary p-0">{'@'+props.currentUser?.username + ' '} · {props.currentUser?.description ?? 'Welcome to my profile!'} </div>
                <div className="d-flex p-0">
                    <p className="p-0 m-0 text-black font-weight-bold mr-1">{props.currentUser?.followers?.length} follower </p> ·
                    <p className="p-0 m-0 text-black font-weight-bold ml-1">{props.currentUser?.following?.length} following </p> 
                </div>
                <div className="d-flex p-0 mt-2 w-100 justify-content-center">
                    {currentId!== localId ?
                    <>
                    <div className="mr-1">
                    <Button color="grey" text="Text" inline size="md" />
                    </div>
                    <div className="ml-1">
               
                    {props.currentUser?.followers?.find((e)=> e === localId) ?  <Button selected={true}
                    onClick={() => follow()} inline  text="Unfollow" /> :  <Button color="red"
                    onClick={() => follow()} inline  text="follow"/>}
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

export default withRouter(connect(mapStateToProps)(ProfileInfo));
