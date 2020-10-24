import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Column } from "./features/column/Column";
import { Logout } from "./features/Logout/Logout";
import { Board } from "./features/board/Board";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import AuthRoute from "./features/authentication/AuthRoute";
import { useHistory } from "react-router-dom";
import { useAuth } from "./features/authentication/auth";
import api from "./utils/request";

function About() {
  return <Board />;
}
function Topics() {
  return <h1>topics</h1>;
}
function Home() {
  return <h1>home</h1>;
}

function Login() {
  const [textInput, setTextInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const history = useHistory();
  const { login } = useAuth();
  function handle(e) {
    e.preventDefault();
    login(textInput, passwordInput).then((resp) => {
      history.push("/about");
    });
  }
  return (
    //
    <form onSubmit={handle}>
      <input type="text" onChange={(e) => setTextInput(e.target.value)} />
      <input
        type="password"
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <AuthRoute path="/about">
            <About />
          </AuthRoute>
          <Route path="/">
            <Login />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
