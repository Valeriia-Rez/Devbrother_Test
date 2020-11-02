import React, {useState} from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';

const ErrorMessage = () => (
    <p>Имя пользователя или пароль введены не верно</p>
);

const LoginPage = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const onClickHandler = () => {
        if(userName === props.credentials.username && password === props.credentials.password){
            props.onAuthorize();
            localStorage.setItem("authed",true);
        } else{
           setErrorMessage(true);
        }
    }

    return(
        <>
        {!props.authed && errorMessage && <ErrorMessage/>}
        {props.authed ? <Redirect to="/profile"/> : 
        <div>
            <form>
                <input type="text" name="userName" placeholder="userName" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="button" onClick={onClickHandler}>Sign in</button>
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