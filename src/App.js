import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';


const App = (props) => {
  useEffect(() => {
    const isUserAuthed = JSON.parse(localStorage.getItem("authed"));
    props.onAppLoad(isUserAuthed);
  },[]);

return(
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage}  />
          <Route path="/news" component={NewsPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Layout>
)
}

const mapDispatchToProps = dispatch => {
  return {
    onAppLoad: (authed) => dispatch({type:'APP_LOAD', payload: {isAuth: authed} })
  };
};
export default connect(null,mapDispatchToProps)(App);
