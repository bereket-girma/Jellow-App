import React, { useState } from 'react'
import styles from './Column.module.css';



export function Column() {



  return (
    <div className={styles.columnContainer}>
      <div className={styles.columnHeader}>
        <textarea className={styles.columnTitle}></textarea>
        <div className={styles.columnDots}>...</div>
      </div>
      <div className={styles.columnFooter}>
        <div className={styles.columnAddCard}>
          <span>+</span> Add a card</div>
        <div className={styles.columnAddTemplate}></div>
      </div>
    </div>


  )


}
