import React, {useEffect, useState} from 'react'
import {Box, Heading, Sheet, Layer} from 'gestalt';
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

function ChatSheet(props) {
    const [users, setUser]= useState()

    return (
      <React.Fragment>
      {props.shouldShow && (
        <Layer >
          <Sheet
            accessibilityDismissButtonLabel="Close"
            accessibilitySheetLabel="Example sheet to demonstrate default padding and styling"
            heading="Sheet default styling"
            onDismiss={() => props.setShouldShow(false)}
            footer={
              <Box color="lightGray">
                <Heading size="md">Footer</Heading>
              </Box>
            }
            size="md">
           <ul>
            {props?.user?.data?.following?.map(e=> <li key={e._id}>{e.username}</li>)}
           </ul>
          </Sheet>
        </Layer>
      )}
    </React.Fragment>
    )
}

export default connect(mapStateToProps)(ChatSheet);
