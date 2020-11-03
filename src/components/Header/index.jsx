import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '../../components/Button';
import './index.scss';

const Header = ({onLogOut, authed}) => {
    const onSignOutHandler = () => {
        onLogOut();
        localStorage.setItem("authed", false);
    }

    return (
        <div className="header">
            <nav className="header__nav">
                <ul className="header__menu">
                    <li className="header__menu-item"><Link to="/" className="header__link">Home</Link></li>
                    <li className="header__menu-item"><Link to="/news" className="header__link">News</Link></li>
                    <li className="header__menu-item"><Link to="/profile" className="header__link">Profile</Link></li>
                </ul>
            </nav>
            {authed &&
                <Button buttonName="Sign out"  onClick={onSignOutHandler}/>
            }
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