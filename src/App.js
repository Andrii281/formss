import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import SingInForm from './components/SingInForm';
import SingUpForm from './components/SingUpForm';

export default function App() {
  return (
    <Router>

        <Switch>
          <Route path="/SingInForm">
            <SingInForm />
          </Route>
          <Route path="/SingUpForm">
            <SingUpForm />
          </Route>
          <Route path="/">
          <SingInForm />
          </Route>
        </Switch>
  
    </Router>
  );
}
