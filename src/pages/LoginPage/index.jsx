import React, {useState} from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import './index.scss';
import Button from '../../components/Button';

const ErrorMessage = () => (
    <p className="form__errorMessage">Имя пользователя или пароль введены не верно</p>
);

const LoginPage = ({credentials, onAuthorize, authed}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const onClickHandler = () => {
        if(userName === credentials.username && password === credentials.password){
            onAuthorize();
            localStorage.setItem("authed",true);
        } else{
           setErrorMessage(true);
        }
    }

    return (
        <>
            {authed ? <Redirect to="/profile"/> :   
                <div>
                    <form className="form">
                        <input type="text" className="form__input" name="userName" placeholder="userName" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                        <input type="password" className="form__input" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        {!authed && errorMessage && <ErrorMessage/>}
                        <Button buttonName="Sign in" onClick={onClickHandler}/>
                    </form>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        credentials : state.credentials,
        authed: state.authed
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuthorize: () => dispatch({type:'LOGIN_USER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);