import React, { useEffect, useState } from 'react'
import styles from './Column.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../card/Card'
import { updateColumns,
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
  updateCard } from '../board/boardSlice'
import Axios from 'axios';



export function Column(props) {
  const [columnTitle, setColumnTitle] = useState('')
  const cards = useSelector(selectCards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBoard)
    dispatch(getCards())
  }, [])

  function handleDelete(item) {
    dispatch(removeCard(item.id))
  }

  function handleSubmit(e) {
    e.preventDefault()
    addCard("test", 1)
  }

  const [activeCard, setActiveCard] = useState(null)
  console.log(activeCard)

  return (
    <div>
    {activeCard ? (
      <div onClick={() => setActiveCard(null)}
           className={styles.cardModal}>
        <Card />
      </div>
    ) : null}
    <div className={styles.columnContainer}>
      <div className={styles.columnHeader}>
        <textarea 
        value={props.title}
        onChange={(e) => setColumnTitle(e.target.value)}
        onSubmit={() => dispatch(updateColumns(columnTitle))}
        className={styles.columnTitle}>{props.title}</textarea>
        <div className={styles.columnDots}>...</div>
      </div>
      <div className={styles.mappedCard}>
        {cards.map((card) => (
          <div onClick={() => setActiveCard(card)}
               className={styles.mappedCardContainer}>
          <div className={styles.cardTitleDiv}>{card.title}</div>
          <button 
          onClick={() => handleDelete(card)}
          className={styles.mappedCardBtn}>x</button>
          </div>
        ))}
      </div>
      <div className={styles.columnFooter}>
        <div
        onClick={(e) => dispatch(addCard(e.target.value))}
        className={styles.columnAddCard}>
          <span>+</span> Add a card</div>
        {/* <div className={styles.columnAddTemplate}> */}
        {/* <span><i class="fas fa-credit-card fa-sm"></i></span> */}
        {/* </div> */}
      </div>
    </div>
  </div>

  )


}
