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
        <div className={styles.cardDescription}>
          <p className={styles.cardDescriptionHeader}>
            <span classname={styles.cardDescriptionIcon}><i class="fas fa-bars"></i></span>
            Description
          </p>
          
          <textarea placeholder="Add a more detailed description..." className={styles.cardDescriptionText}></textarea>
        </div>
        
        <div className={styles.cardFooter}>
          <button>Save</button>
          <div className={styles.cardFooterDelete}>x</div>
        </div>
        
      <div  className={styles.cardSidebar}>
        <p className={styles.cardSidebarHeader}>Add to card</p>
        <div className={styles.cardSidebarMembers}>
          <span className={styles.cardSidebarIcon}><i class="far fa-user fa-sm"></i></span> Members</div>
      </div>
      </div>
      </div>
    
  )
}
