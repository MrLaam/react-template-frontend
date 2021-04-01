import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import LoginPage from "./app/pages/LoginPage";
import SignUpPage from "./app/pages/SignUpPage";
import SignUpSuccessPage from "./app/pages/SignUpSuccessPage";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/sign-up-successful">
            <SignUpSuccessPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
