import React, { useState } from "react";
import styles from "./Board.module.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../authentication/auth";
import Logout from "../Logout/Logout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
export function Board() {
  // function LogoutPage() {
  const { logout } = useAuth();
  const { history } = useHistory();
  function handleClick() {
    logout().then((resp) => {
      console.log("some sort of test");
      history.push("/logout");
    });
  }

  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardHeader}>
        Jellow
        <button className={styles.logOutBtn} onClick={handleClick}>
          Log Out
        </button>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.boardContent}>
        <p className={styles.boardTitle}>Test Title</p>
        <div className={styles.boardAddList}>
          <span className={styles.addListSpan}>+</span> Add a List
        </div>
      </div>
    </div>
  );
}
