import React from 'react'
import './Details.scss';
import {Container, Row} from 'react-bootstrap';
import Pin from '../Pin/Pin';
import AddPin from '../../AddPin/AddPin';

export default function Details() {
    return (
       <Container>
           <Row className="d-flex justify-content-center align-items-center text-center">
                <Pin/> 
                <AddPin/>
           </Row>
       </Container>
    )
}
