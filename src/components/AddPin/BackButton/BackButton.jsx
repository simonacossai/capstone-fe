import React, {useEffect} from 'react'
import {withRouter, Link} from 'react-router-dom';
import {Icon} from 'gestalt';
import './BackButton.scss'
function BackButton(props) {

    return (
        <div className="BackButton" onClick={()=>props.history.goBack()}>      
            <button><Icon icon="directional-arrow-left" color="darkGray"/></button>
        </div>
    )
}
export default withRouter(BackButton);