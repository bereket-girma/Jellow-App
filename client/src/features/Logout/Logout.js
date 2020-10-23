import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Logout.module.css";

export function Logout() {
  return (
    <div className={styles.container}>
      <div className={styles.logoutContainer}>
        <div>
          <h1>Thanks for using Jellow.</h1>
         <div className={styles.form}>
             <h3>Log in to Jellow</h3>
          <form>
            <input className={styles.textInput} type="text" placeholder="Enter email" />
            <input className={styles.textInput} type="text" placeholder="Enter password" />
            <input className={styles.submit} type="submit" value="Login" />
          </form>
          </div>
        </div>
      </div>

      <div className={styles.svgContainer}>

      </div>
    </div>
  );
}
