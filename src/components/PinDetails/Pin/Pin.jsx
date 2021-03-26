import React from 'react'
import './Pin.scss';
import {Container, Row, Col} from 'react-bootstrap';
import pin from '../../../assets/pin.jpg';
import {Button, Avatar, TextArea} from 'gestalt';
import {BsThreeDots} from 'react-icons/bs';
import {FiUpload} from 'react-icons/fi';

export default function Pin() {
    const [selected, setSelected] = React.useState(false);
    return (
            <Container fluid className="detailCard p-0 m-0 mt-4 mx-5 animate__animated animate__fadeIn">
                <Row>
                    <Col md={6} className="detailCol p-0">
                        <img src={pin} className="detailImg" fluid style={{height: "100%", width: "100%", objectFit:"cover"}}/>
                    </Col>
                    <Col md={6} className="detailCol2 px-5 py-4">
                        <Row className="d-flex justify-content-between w-100">
                            <div className="pl-1">
                            <BsThreeDots className="icons"/>
                            <FiUpload className="icons"/>
                            </div>
                        <Button text="Save" inline color="red"/>
                        </Row>
                        <Row>
                            <p className="postLink">aliexpress.com</p>
                            <p className="text-left postDescription">Lorem Ipsum dolor sit amet, consectetur adipiscing elit olor sit amet, consectetur adipiscing elit Ipsum dolor sit amet, consectetur adipiscing elit olor sit amet, consectetur adipiscing elit...</p>
                        </Row>
                        <Row className="d-flex align-items-center justify-content-between w-100 mt-3">
                            <div className="d-flex align-items-center">
                        <Avatar
                        size="md"
                        src="https://i.ibb.co/ZfCZrY8/keerthi.jpg"
                        name="Keerthi"/>
                        <span className="ml-2 font-weight-bold">Aliexpress</span>
                            </div>
                            <Button
                            accessibilityLabel={selected ? "Unfollow Alberto on Pinterest" : "Follow Alberto on Pinterest"}
                            onClick={() => setSelected(!selected)}
                            inline
                            selected={selected}
                            text={selected ? "Unfollow" : "Follow"}        />
                        </Row>
                 <Row className="w-100 mt-4">
                     <textarea placeholder="Write a comment..." className="w-100 commentInput" rows="3" style={{maxHeight: "100px"}}/>
                     <div className="commentsDiv">

                     <div className="d-flex justify-content-start align-items-center px-3 commentDiv">
                     <Avatar
                        size="sm"
                        src="https://i.ibb.co/ZfCZrY8/keerthi.jpg"
                        name="Keerthi"/>
                        <div className="d-flex ml-2">
                         <span className="text-left font-weight-bold">Simona Cossai</span>
                         <span className="text-left">aaa</span></div>
                        </div>

                        <div className="d-flex justify-content-start align-items-center px-3 commentDiv">
                     <Avatar
                        size="sm"
                        src="https://i.ibb.co/ZfCZrY8/keerthi.jpg"
                        name="Keerthi"/>
                        <div className="d-flex ml-2">
                         <span className="text-left font-weight-bold">Simona Cossai</span>
                         <span className="text-left">aaa</span></div>
                        </div>

                        <div className="d-flex justify-content-start align-items-center px-3 commentDiv">
                     <Avatar
                        size="sm"
                        src="https://i.ibb.co/ZfCZrY8/keerthi.jpg"
                        name="Keerthi"/>
                        <div className="d-flex ml-2">
                         <span className="text-left font-weight-bold">Simona Cossai</span>
                         <span className="text-left">aaa</span></div>
                        </div>

                        </div>
                 </Row>
                    </Col>
                </Row>
            </Container>
    )
}
