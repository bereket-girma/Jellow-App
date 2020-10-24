import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./LoginPage.module.css"
import { useHistory } from "react-router-dom"
import { useAuth } from "../authentication/auth"



export default function LoginPage() {
  const dispatch = useDispatch()

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
    <div>
      <div className={styles.logo}>Jellow</div>
      <div className={styles.loginContainer}>
        <h4>Login to Jellow</h4>
        <div className={styles.formContainer}>
          <form className={styles.loginForm}
                onSubmit={handle}>
            <input
              placeholder="Enter email"
              className={styles.loginInput}
              onChange={(e) => setInputUserText(e.target.value)}
            ></input>

            <input
              placeholder="Enter password"
              className={styles.loginInput}
              onChange={(e) => setInputPasswordText(e.target.value)}
            ></input>

            <button className={styles.loginBtn}>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}
