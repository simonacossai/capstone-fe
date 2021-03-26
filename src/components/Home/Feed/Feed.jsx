import React from 'react';
import './Feed.scss';
import {Container, Row} from 'react-bootstrap';
import {Avatar} from 'gestalt';

export default function Feed() {
    return (
       <Container className="m-0 p-0 Feed" fluid>
           <Row className="d-flex justify-content-center">
                <div className="postDiv">
                <button className="postButton">Save</button>
                <img src="https://i.ibb.co/7bQQYkX/stock2.jpg" className="postImage"/>
                <div className="d-flex text-center align-items-center justify-content-center">
                <Avatar size="xs" src="https://i.ibb.co/ZfCZrY8/keerthi.jpg" name="Keerthi"/>
                <span className="m-0 p-0 d-flex justify-content-center align-items-center ml-2">Simona Cossai</span>
                </div>
                </div>

                <div className="postDiv">
                <button className="postButton">Save</button>
                <img src="https://i.ibb.co/7bQQYkX/stock2.jpg" className="postImage"/>
                <div className="d-flex text-center align-items-center justify-content-center">
                <Avatar size="xs" src="https://i.ibb.co/ZfCZrY8/keerthi.jpg" name="Keerthi"/>
                <span className="m-0 p-0 d-flex justify-content-center align-items-center ml-2">Simona Cossai</span>
                </div>
                </div>

             
                <div className="postDiv">
                <button className="postButton">Save</button>
                <img src="https://i.ibb.co/7bQQYkX/stock2.jpg" className="postImage"/>
                <div className="d-flex text-center align-items-center justify-content-center">
                <Avatar size="xs" src="https://i.ibb.co/ZfCZrY8/keerthi.jpg" name="Keerthi"/>
                <span className="m-0 p-0 d-flex justify-content-center align-items-center ml-2">Simona Cossai</span>
                </div>
                </div>


           </Row>
       </Container>
    )
}
