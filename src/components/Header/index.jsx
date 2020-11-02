import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';




const Header = (props) => {
    const onSignOutHandler = () => {
        props.onLogOut();
        localStorage.setItem("authed", false);
    }
    return(
    <div>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
            {props.authed &&
            <button type="button" onClick={onSignOutHandler}>Sign out</button>
    }
        </header>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        authed: state.authed
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch({type:'LOGOUT_USER'})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);