import React from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';

const ProfilePage = (props) => {
    return (
    <div>
      {props.authed ? <p>Profile</p> : <Redirect to="/login"/>}
    </div>
    )
}

const mapStateToProps = state => {
    return {
        authed: state.authed
    };
};

export default connect(mapStateToProps)(ProfilePage);