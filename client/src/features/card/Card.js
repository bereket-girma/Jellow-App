import React, { useState } from "react"
import styles from "./Card.module.css"

export function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardDeleteBtn}>x</div>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Test Card</h3>
        <span className={styles.cardIcon}><i class="fas fa-credit-card"></i></span>
        <div className={styles.cardHeaderInList}>
          <p>in list
            <a href="#">To-Do</a>
          </p>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardMembers}>
          <div>
            <p>Members</p>
            <div className={styles.cardAddMembers}><span>+</span></div>
          </div>
        </div>
      <div className={styles.cardSidebar}></div>
      </div>
      </div>
    
  )
}
