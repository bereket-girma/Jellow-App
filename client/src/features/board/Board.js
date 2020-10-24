import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './Board.module.css';
import { Column } from '../column/Column'
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
  updateCard
} from './boardSlice'


export function Board() {
  const board = useSelector(selectBoard)
  const cards = useSelector(selectCards)
  const columns = useSelector(selectColumns)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getColumns())
  }, [dispatch])
  console.log(columns)

  return (

    <div className={styles.boardContainer}>
      <div className={styles.boardHeader}>Jellow
        <button className={styles.logOutBtn}>Log Out</button>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.boardContent}>
        <p className={styles.boardTitle}>Test Title</p>
        <div 
        className={styles.boardAddList}
        onClick={() => dispatch(addColumn())}><span className={styles.addListSpan}>+</span> Add a List</div>
      </div>
      <div className={styles.boardColumns}>
      {columns.map((column) => (
        <Column title={column.title}/>
      ))}
      </div>
    </div>

  )
}