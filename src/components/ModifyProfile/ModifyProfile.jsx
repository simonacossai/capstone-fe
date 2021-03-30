import React from 'react';
import './ModifyProfile.scss';
import {Container, Row, Col} from 'react-bootstrap';
import {Avatar, Button, Box, TextField, SelectList} from 'gestalt';

export default function ModifyProfile() {
    return (
       <Container className="ModifyProfile mt-5">
           <Row className="mt-5 pt-5">
                <Col md={6} className="d-flex justify-content-center LeftColModifyProfile">
                    <h2>Edit your profile</h2>
                    <p>People who'll visit your profile will see these information</p>
                    <div className="d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                        <Avatar size="xl" src="https://i.ibb.co/ZfCZrY8/keerthi.jpg" name="Keerthi"/>
                        <div className="mt-3" >
                        <Button size="md" text="Change profile pic" color="red" inline wrap/>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                <Box display="flex"
                marginEnd={-3}
                marginBottom={-3}
                wrap
                width="100%"
                direction="column"
                maxWidth={800}>
                <Box flex="grow" paddingX={3} paddingY={3}>
                <TextField
                label="TextField 1"
                id="textfield1"
                onChange={() => {}}
                placeholder="Placeholder"/>
                </Box>

  <Box flex="grow" paddingX={3} paddingY={3}>
    <Box
      display="flex"
      wrap
      marginStart={-3}
      marginEnd={-3}
      marginBottom={-3}
      marginTop={-3}
    >
      <Box flex="grow" paddingX={3} paddingY={3}>
        <TextField
          label="TextField 2"
          id="textfield2"
          onChange={() => {}}
          placeholder="Placeholder"
        />
      </Box>
      <Box flex="grow" paddingX={3} paddingY={3}>
        <TextField
          label="TextField 3"
          id="textfield3"
          onChange={() => {}}
          placeholder="Placeholder"
        />
      </Box>
    </Box>
  </Box>
    <Box flex="grow" paddingX={3} paddingY={3}>
                <TextField
                label="TextField 1"
                id="textfield1"
                onChange={() => {}}
                placeholder="Placeholder"/>
                </Box>

  <Box flex="grow" paddingX={3} paddingY={3}>
    <Box
      justifyContent="end"
      marginStart={-1}
      marginEnd={-1}
      marginTop={-1}
      marginBottom={-1}
      display="flex"
      wrap
    >
      <Box paddingX={1} paddingY={1}>
        <Button text="Cancel" size="lg" inline />
      </Box>
      <Box paddingX={1} paddingY={1}>
        <Button text="Submit" color="red" size="lg" type="submit" />
      </Box>
    </Box>
  </Box>
</Box>
                </Col>
           </Row>
       </Container>
    )
}
