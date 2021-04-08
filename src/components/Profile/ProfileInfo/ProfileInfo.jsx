import React, {useState, useEffect} from 'react';
import './ProfileInfo.scss';
import {Container, Row} from 'react-bootstrap';
import {Box, Avatar, Button} from 'gestalt';
import {withRouter, Link} from 'react-router-dom';
import { connect } from "react-redux";
import {follow} from '../../../api/request';
const mapStateToProps = (state) => state;

function ProfileInfo(props) {
    const currentId = props.match.params.id
    const localId= localStorage.getItem('id');
    

    return (
       <Container className="d-flex justify-content-center w-100 mt-4 ProfileInfoContainer">
           <Row className="d-flex justify-content-center align-items-center w-100 text-center ProfileInfoRow">
           <Box column={2} >
                <Avatar name="Keerthi" src={props.currentUser?.image} />
           </Box>
                <h2 className="font-weight-bold text-dark p-0">{props.currentUser?.name ?? 'Lorem'} {props.currentUser?.surname ?? 'Ipsum'}</h2>
                <div className="d-flex text-secondary p-0">{'@'+props.currentUser?.username + ' '} · {props.currentUser?.description ?? 'Welcome to my profile!'} </div>
                <div className="d-flex p-0">
                    <p className="p-0 m-0 text-dark font-weight-bold mr-1">{props.currentUser?.followers?.length} follower </p> ·
                    <p className="p-0 m-0 text-dark font-weight-bold ml-1">{props.currentUser?.following?.length} following </p> 
                </div>
                <div className="d-flex p-0 mt-2 w-100 justify-content-center">
                    {currentId!== localId ?
                    <>
                    <div className="mr-1">
                    <Button color="grey" text="Text" inline size="md" />
                    </div>
                    <div className="ml-1">
               
                    {props.currentUser?.followers?.find((e)=> e === props.user.data._id) ?  <Button selected={true}
                    onClick={() => follow(props, currentId, localId)} inline  text="Unfollow" /> :  <Button color="red"
                    onClick={() => follow(props, currentId, localId)} inline  text="follow"/>}
                    </div>
                    </>
                    : 
                    <div className="mr-1">
                    <Link to="/modify" className="text-dark text-decoration-none">
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
