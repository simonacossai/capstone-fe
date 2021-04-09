import React from 'react'
import {Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Avatar} from 'gestalt';

export default function RelatedPost(props) {
    return (
        <Container className="m-0 p-0 Feed mt-5" fluid >
            {props.posts.length!==0 && <h3 className="font-weight-bold">Related posts</h3>}
        <Row className="d-flex justify-content-center mt-3">
            {props.posts.map((e)=>{
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
