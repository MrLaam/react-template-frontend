import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import LoginPage from "./app/pages/LoginPage";
import SignUpPage from "./app/pages/SignUpPage";
import SignUpSuccessPage from "./app/pages/SignUpSuccessPage";
import { getJwt, logout } from "./app/services/authService";
import { Button } from "react-bootstrap";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getAuthInfo = async () => {
      const thisAuthJwt = await getJwt();

      if (thisAuthJwt) setIsLoggedIn(true);
    };
    getAuthInfo();
  }, [isLoggedIn]);

  const onSignOut = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
    } catch (e) {
      //Do nothing
    }
  };

  return (
    <Router>
      <div>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Button
                  variant="danger"
                  onClick={() => {
                    onSignOut();
                  }}
                >
                  Sign Out
                </Button>
              </li>
            </>
          ) : (
            <>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}

              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>

        <Switch>
          <Route exact path="/">
            {!isLoggedIn ? <Redirect to="/login" /> : <HomePage />}
          </Route>
          <Route exact path="/login">
            <LoginPage setIsLoggedIn={setIsLoggedIn} />
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
