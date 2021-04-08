import React, {useState, useEffect} from 'react';
import './Feed.scss';
import {Container, Row} from 'react-bootstrap';
import {Avatar} from 'gestalt';
import { connect } from "react-redux";
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
import {getPosts} from '../../../api/request';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (posts) => dispatch({type: "STORE_ALL_POSTS", payload: posts}),
  });

function Feed(props) {
      useEffect(() => {
        getPosts(props);
    }, [])

    
    return (
       <Container className="m-0 p-0 Feed" fluid >
           <Row className="d-flex justify-content-center">
               {props.posts.allPosts.map((e)=>{
                   return(
                <Link to={`/details/${e._id}`} className="text-dark text-decoration-none">
                <div className="postDiv">
                <button className="postButton">Save</button>
                <img src={e.img} className="postImage"/>
                <div className="d-flex text-center align-items-center justify-content-center">
                <Avatar size="xs" src={e.user.image} name="Keerthi"/>
                <span className="m-0 p-0 d-flex justify-content-center align-items-center ml-2 text-dark">{e.user.username}</span>
                </div>
                </div>
                </Link>
                   )
               })}
           </Row>
       </Container>
    )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed))