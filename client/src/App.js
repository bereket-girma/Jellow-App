import React from "react"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import { Column } from './features/column/Column';
import { Board } from './features/board/Board';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom"
import AuthRoute from "./features/authentication/AuthRoute"
import { useHistory } from "react-router-dom"
import { useAuth } from "./features/authentication/auth"
import api from "./utils/request"

function About() {
  return <h1>about</h1>
}
function Topics() {
  return <h1>topics</h1>
}
function Home() {
  return <h1>home</h1>
}

function Login() {
  const history = useHistory()
  const { login } = useAuth()
  function handle(e) {
    e.preventDefault()
    login("testuser", "testpassword").then((resp) => {
      history.push("/about ")
    })
  }
  return (
    <form onSubmit={handle}>
      <input type="text" />
      <input type="password" />
      <button type="submit">submit</button>
    </form>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <AuthRoute path="/about">
            <About />
          </AuthRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
