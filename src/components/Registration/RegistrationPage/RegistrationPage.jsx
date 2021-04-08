import React, {useState} from 'react'
import NavBar from '../Navbar/NavBar';
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from '../Carousel/Carousel.jsx'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import './RegistrationPage.scss';
import {Link} from 'react-scroll';
import loginImage from '../../../assets/loginImage.jpg';
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import LoginForm from '../LoginForm/LoginForm';

export default function RegistrationPage() {
    const [login, setLogin] = useState(true);
    return (
        <>
        <div className="RegistrationPage" id="welcome">
            <NavBar/>
                <Carousel/>
                <Container fluid>
                <Row>
                    <div className="ImageContainer d-flex justify-content-center align-items-center text-center w-100 ">
                        <img className="animate__animated animate__fadeInUp animate__delay-0.7s" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                        <img className="animate__animated animate__fadeInUp animate__delay-0.5s" src="https://aforisticamente.com/wp-content/uploads/Frasi-Tumblr-Vita.jpg?v=1599293758"/>
                        <img className="animate__animated animate__fadeInUp" src="https://i.pinimg.com/originals/b4/3d/d8/b43dd87fedd813356a650561d572daef.jpg"/>
                        <img className="animate__animated animate__fadeInUp animate__delay-0.5s" src="https://i.pinimg.com/originals/17/cf/3e/17cf3e9f9bab7684e7036475b0b75107.jpg"/>
                        <img className="animate__animated animate__fadeInUp animate__delay-0.7s" src="https://i.pinimg.com/originals/1c/e1/c4/1ce1c4fa38c5c344295ee790e40d5daf.jpg"/>
                    </div>
                    <Link to="login" smooth={true} duration={900} className="text-dark text-decoration-none">
                    <button className="ArrowButton animate__animated animate__pulse animate__infinite"><MdKeyboardArrowDown/></button>
                    </Link>
                </Row> 
                </Container>
        </div>
        <Container  className="LoginContainer" id="login" fluid>
        <Link to="welcome" smooth={true} duration={900} className="text-dark text-decoration-none">
        <button className="ArrowButtonTop"><MdKeyboardArrowUp/></button>
        </Link>
            <Row className="d-flex justify-content-center align-items-center text-center m-0 LoginRow">
               <Col lg={6} className="m-0 p-0 d-flex justify-content-center align-items-center text-center w-100">
                   {login ? <LoginForm login={login} setLogin={setLogin}/> : <RegistrationForm login={login} setLogin={setLogin}/>}
               </Col>
               <Col lg={6} className="m-0 p-0 d-flex justify-content-center align-items-center text-center">
                <img src={loginImage} className="rightColImg" alt="loginPageImage" />
               </Col>
            </Row>
        </Container>
        </>
    )
}


