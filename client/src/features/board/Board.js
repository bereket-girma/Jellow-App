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
    dispatch(getBoard())
    dispatch(getColumns())
  }, [])
  
  function handleDelete(item) {
    dispatch(removeColumn(item.id))
  }

  return (

    <div className={styles.boardContainer}>
      <div className={styles.boardHeader}>Jellow
        <button className={styles.logOutBtn}>Log Out</button>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.boardContent}>
        {board.map((project) => (
          <p className={styles.boardTitle}>{project.title}</p>
        ))}
        
        <button
        className={styles.boardAddList}
        onClick={(e) => dispatch(addColumn(e.target.value))}><span className={styles.addListSpan}>+</span> Add a List</button>
      </div>
      <div className={styles.boardColumns}>
      {columns.map((column) => (
        <div className={styles.mappedColumnDiv}>
        <Column title={column.title}/>
        <button className={styles.mappedColumnDivButton} onClick={() => handleDelete(column)}>x</button>
        </div>
      ))}
      </div>
    </div>

  )
}