import React, { useState, useEffect } from "react";
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

import { useSelector, useDispatch } from "react-redux";

import { Column } from "../column/Column";
import {
  selectColumns,
  selectCards,
  selectBoard,
  getBoard,
  getColumns,
  getCards,
  addColumn,
  addCard,
  removeColumn,
  removeCard,
  updateColumn,
  updateCard,
} from "./boardSlice";

export function Board() {
  const board = useSelector(selectBoard);
  const cards = useSelector(selectCards);
  const columns = useSelector(selectColumns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoard());
    dispatch(getColumns());
  }, []);

  function handleDelete(item) {
    dispatch(removeColumn(item.id));
  }

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
        {board.map((project) => (
          <p className={styles.boardTitle}>{project.title}</p>
        ))}

        <button
          className={styles.boardAddList}
          onClick={(e) => dispatch(addColumn(e.target.value))}
        >
          <span className={styles.addListSpan}>+</span> Add a List
        </button>
      </div>
      <div className={styles.boardColumns}>
        {columns.map((column) => (
          <div className={styles.mappedColumnDiv}>
            <Column title={column.title} />
            <button
              className={styles.mappedColumnDivButton}
              onClick={() => handleDelete(column)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
