import React from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import profileImage from '../../assets/images/profileImg.jpeg';

const ProfilePage = ({authed}) => (
    <div>
      {authed ? <div><img style={{width:500, height:400}} src={profileImage} alt="profileImage"/></div> : <Redirect to="/login"/>}
    </div>
)

const mapStateToProps = state => {
    return {
        authed: state.authed
    };
};

export default connect(mapStateToProps)(ProfilePage);