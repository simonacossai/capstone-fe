import React from 'react'
import './AddPinComponent.scss';
import {Container, Row, Col} from 'react-bootstrap';
import {Button} from 'gestalt';
import {FaFileUpload} from 'react-icons/fa';

export default function AddPinComponent() {
    return (
        <Container className="d-flex justify-content-center align-items-center w-100 AddPinComponent">
            <Row className="d-flex justify-content-center align-items-center w-100">
                <Col md={10} className="AddPostDiv mt-4 px-4">
                        <Container fluid>
                            <Row className="d-flex justify-content-end pt-5 mr-2"><Button text="Publish" color="red" inline/></Row>
                            <Row className="mt-1">
                                <Col md={6} className="d-flex justify-content-center align-items-center w-100">
                                    <div className="uploadImage p-3">
                                        <div className="uploadImageInnerDiv d-flex align-items-center justify-content-center">
                                        <FaFileUpload className="uploadIcon"/>
                                        <p>Upload image</p>
                                        <input type="file" className="fileInput"/>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="pr-5">
                                    <input type="text" className="titleInput" placeholder="Enter a title"/>
                                    <textarea type="text" row="3" className="descriptionInput" placeholder="Enter a description.."/>
                                </Col>
                            </Row>
                        </Container>
                </Col>
            </Row>
        </Container>
        
    )
}
