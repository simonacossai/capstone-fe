import React,  {useEffect, useState} from 'react'
import './Details.scss';
import {Container, Row} from 'react-bootstrap';
import Pin from '../Pin/Pin';
import AddPin from '../../AddPin/AddPin';
import {withRouter} from 'react-router-dom';
import BackButton from '../../AddPin/BackButton/BackButton';
import { connect } from "react-redux";
import RelatedPost from '../RelatedPost/RelatedPost';

const mapStateToProps = (state) => state;

function Details(props) {
    const [related, setRelated]= useState([])

    useEffect(() => {
     let {category}=  props?.posts?.allPosts?.find(post => post._id ===props.match.params.id);
    const relatedPosts =  props?.posts?.allPosts?.filter(post => post.category ===category && post._id!==props.match.params.id );
    setRelated(relatedPosts);
    }, [])
    return (
       <Container>
      <Row className="d-flex justify-content-center align-items-center text-center">
                <BackButton/>
    <Pin id={props.match.params.id}/> 
                <AddPin/>
                <RelatedPost posts={related}/>
           </Row>
       </Container>
    )
}

export default withRouter(connect(mapStateToProps)(Details));