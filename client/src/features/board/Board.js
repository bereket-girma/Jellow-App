import React, { useState } from "react"
import styles from "./Board.module.css"
import { Column } from "../column/Column"

export function Board() {
  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardHeader}>
        Jellow
        <button className={styles.logOutBtn}>Log Out</button>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.boardContent}>
        <p className={styles.boardTitle}>Test Title</p>
        <div className={styles.boardAddList}>
          <span className={styles.addListSpan}>+</span> Add a List
        </div>
        <Column />
      </div>
    </div>
  )
}
