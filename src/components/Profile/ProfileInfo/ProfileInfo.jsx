import React from 'react';
import './ProfileInfo.scss';
import {Container, Row} from 'react-bootstrap';
import {Box, Avatar, Button} from 'gestalt';

export default function ProfileInfo() {
    const [selected, setSelected] = React.useState(false);

    return (
       <Container className="d-flex justify-content-center w-100 mt-4 ProfileInfoContainer">
           <Row className="d-flex justify-content-center align-items-center w-100 text-center ProfileInfoRow">
           <Box column={2} >
                <Avatar name="Keerthi" src="https://i.ibb.co/ZfCZrY8/keerthi.jpg" />
           </Box>
                <h2 className="font-weight-bold text-black p-0">Tinker bell</h2>
                <div className="d-flex text-secondary p-0">@thao1990 · Welcome to my little world</div>
                <div className="d-flex p-0">
                    <p className="p-0 m-0 text-black font-weight-bold mr-1">1,7mila follower </p> ·
                    <p className="p-0 m-0 text-black font-weight-bold ml-1"> 20 following </p> 
                </div>
                <div className="d-flex p-0 mt-2 w-100 justify-content-center">
                    <div className="mr-1">
                    <Button color="grey" text="Text" inline size="md" />
                    </div>
                    <div className="ml-1">
                    <Button color="red"
                    onClick={() => setSelected(!selected)} inline selected={selected} text={selected ? "Unfollow" : "Follow"} />
                    </div>
                </div>
           </Row>
       </Container>
    )
}
