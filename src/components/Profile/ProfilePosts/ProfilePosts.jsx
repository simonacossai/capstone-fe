import React from 'react'
import './ProfilePosts.scss';
import {Container, Row, Col} from 'react-bootstrap';

export default function ProfilePosts({posts}) {
    
    return (
      <Container className="ProfilePosts mt-5" fluid>
          <Row className="d-flex justify-content-center ">
            {posts?.map((e)=>{
                return(
                    <Col md={2} className="my-2">
                        <img src={e.img} alt="saved-post" className="savedImage"/>
                        <p className="postDescriptionPreview">{e.description}</p>
                    </Col>
                )
            })}
          </Row>
          
      </Container>
    )
}
