import React from 'react'
import './Details.scss';
import {Container, Row} from 'react-bootstrap';
import Pin from '../Pin/Pin';
import AddPin from '../../AddPin/AddPin';
import {withRouter} from 'react-router-dom';
import BackButton from '../../AddPin/BackButton/BackButton';

function Details(props) {
    return (
       <Container>
           <Row className="d-flex justify-content-center align-items-center text-center">
                <BackButton/>
                <Pin id={props.match.params.id}/> 
                <AddPin/>
           </Row>
       </Container>
    )
}

export default withRouter(Details)