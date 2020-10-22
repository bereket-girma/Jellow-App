import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./LoginPage.module.css"
export default function LoginPage() {
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.logo}>Jellow</div>
      <div className={styles.loginContainer}>
        <h4>Login to Jellow</h4>
        <div className={styles.formContainer}>
          <form className={styles.loginForm}>
            <input
              placeholder="Enter email"
              className={styles.loginInput}
            ></input>

            <input
              placeholder="Enter password"
              className={styles.loginInput}
            ></input>

            <button className={styles.loginBtn}>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}
