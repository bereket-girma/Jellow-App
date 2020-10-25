import React from "react"
import logo from "./logo.svg"
import { useState } from 'react'

import { Column } from "./features/column/Column"
import { Logout } from "./features/Logout/Logout"
import { Board } from "./features/board/Board"
import  LoginPage  from "./features/login-page/LoginPage"
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



function Dashboard() {
  return <Board />
}
function Topics() {
  return <h1>topics</h1>
}
function Home() {
  return <h1>home</h1>
}

function Login() {
const [inputUserText, setInputUserText] = useState('')
const [inputPasswordText, setInputPasswordText] = useState('')

  const history = useHistory()
  const { login } = useAuth()
  function handle(e) {
    e.preventDefault()
    login(inputUserText, inputPasswordText)
      .then((resp) => {
        history.push("/dashboard")
      })
      .catch((err) => {
        console.log(err)
        alert(err.data.message)
      })
  }
  return (
    <form onSubmit={handle}>
      <input type={"text"}
            onChange={(e) => setInputUserText(e.target.value)} />
      <input type="password"
              onChange={(e) => setInputPasswordText(e.target.value)}/>
      <button type="submit">submit</button>
    </form>
  )
}



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <AuthRoute path="/dashboard">
            <Dashboard />
          </AuthRoute>
          <Route path="/">
            <LoginPage />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
