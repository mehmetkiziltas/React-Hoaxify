import React from 'react'
import "../bootstrap-override.scss";
import UserSingupPage from '../pages/UserSignupPages';
import LoginPage from '../pages/LoginPage';
import LanguageSelector from '../components/LanguageSelector'
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { useSelector } from 'react-redux';

const App = () => {

  const { isLoggedIn } = useSelector(store => ({
    isLoggedIn: store.isLoggedIn
  }))

  return (
    <div>
      <Router>
        <TopBar ></TopBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          <Route path="/signup" component={UserSingupPage} />
          <Route path="/user/:username" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <LanguageSelector />
    </div>
  )
}

export default App;

