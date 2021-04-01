import React from 'react'
import {withRouter, Link} from 'react-router-dom';
import {Icon} from 'gestalt';
import './BackButton.scss'
function BackButton(props) {
    return (
        <div className="BackButton">
            <Link to="/feed">
            <button><Icon icon="directional-arrow-left" color="darkGray"/></button>
            </Link>
        </div>
    )
}
export default withRouter(BackButton);