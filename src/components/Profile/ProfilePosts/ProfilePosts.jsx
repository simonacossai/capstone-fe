import React from 'react'
import './ProfilePosts.scss';
import {Container, Row, Col} from 'react-bootstrap';

export default function ProfilePosts() {
    return (
      <Container className="ProfilePosts mt-5" fluid>
          <Row className="d-flex justify-content-center ">
              <Col md={2} className="my-2">
                  <img src="https://i.ibb.co/7bQQYkX/stock2.jpg" alt="saved-post" className="savedImage"/>
                  <p className="postDescriptionPreview">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </Col>
              <Col md={2} className="my-2">
                  <img src="https://i.ibb.co/7bQQYkX/stock2.jpg" alt="saved-post" className="savedImage"/>
                  <p className="postDescriptionPreview">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </Col><Col md={2} className="my-2">
                  <img src="https://i.ibb.co/7bQQYkX/stock2.jpg" alt="saved-post" className="savedImage"/>
                  <p className="postDescriptionPreview">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </Col><Col md={2} className="my-2">
                  <img src="https://i.ibb.co/7bQQYkX/stock2.jpg" alt="saved-post" className="savedImage"/>
                  <p className="postDescriptionPreview">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </Col><Col md={2} className="my-2">
                  <img src="https://i.ibb.co/7bQQYkX/stock2.jpg" alt="saved-post" className="savedImage"/>
                  <p className="postDescriptionPreview">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </Col>
              
          </Row>
          
      </Container>
    )
}
