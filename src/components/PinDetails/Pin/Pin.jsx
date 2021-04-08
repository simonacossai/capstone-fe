import React, {useState, useEffect} from 'react'
import './Pin.scss';
import {Container, Row, Col} from 'react-bootstrap';
import {Button, Avatar} from 'gestalt';
import {BsThreeDots} from 'react-icons/bs';
import {FiUpload} from 'react-icons/fi';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {fetchPost, publishComment} from '../../../api/request';

const mapStateToProps = (state) => state;

function Pin(props) {
    const [selected, setSelected] = useState(false);
    const [comment, setComment] = useState("")
    const [post, setPost]= useState({})
    
    useEffect(() => {
        fetchPost(props, setPost)
    }, [props.id])
    return (
            <Container fluid className="detailCard p-0 m-0 mt-4 mx-5 animate__animated animate__fadeIn">
                <Row>
                    <Col md={6} className="detailCol p-0">
                        <img src={post.img} className="detailImg" fluid style={{height: "100%", width: "100%", objectFit:"cover"}}/>
                    </Col>
                    <Col md={6} className="detailCol2 px-5 py-4">
                        <Row className="d-flex justify-content-between w-100">
                            <div className="pl-1">
                            <BsThreeDots className="icons"/>
                            <FiUpload className="icons"/>
                            </div>
                        <Button text="Save" inline color="red"/>
                        </Row>
                        <Row className="d-block justify-content-start text-left">
                            <p className="postTitle">{post.title}</p>
                            <p className="text-left postDescription">{post.description}</p>
                        </Row>
                        <Row className="d-flex align-items-center justify-content-between w-100 mt-3">
                            <div className="d-flex align-items-center">
                        <Avatar
                        size="md"
                        src={post?.user?.image}
                        name="Keerthi"/>
                        <Link to={`/profile/${post?.user?._id}`} className="text-dark text-decoration-none"><span className="ml-2 font-weight-bold text-dark text-decoration-none">{post?.user?.username}</span></Link>
                            </div>
                        </Row>
                 <Row className="w-100 mt-3">
                    <form  onSubmit={(e)=>publishComment(e, post._id, props, setPost, comment, setComment)} className="w-100">
                     <textarea placeholder="Write a comment..." className="w-100 commentInput" 
                     value={comment}
                     onChange={e => setComment(e.target.value)}
                     rows="3" style={{maxHeight: "100px"}}/>
                     <Button type="submit" text="submit"/>
                     </form>
                     <div className="commentsDiv">
                   {post.comments?.map((e)=>{
                       return(
                        <div className="d-flex justify-content-start align-items-center px-3 singleCommentDiv animate__animated animate__fadeIn">
                     <Avatar
                        size="sm"
                        src={e.user.image}
                        name="Keerthi"/>
                        <div className="d-flex ml-2">
                        <Link to={`/profile/${e.user?._id}`} className="text-dark text-decoration-none">
                         <span className="text-left font-weight-bold">{e.user.username}</span>
                         </Link>
                         <span className="text-left">{e.text}</span></div>
                        </div>
                       )})}
                        </div>         
                    </Row>
                    </Col>
                </Row>
            </Container>
    )
}

export default connect(mapStateToProps)(Pin);