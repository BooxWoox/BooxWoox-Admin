import React, { useContext } from 'react'
import '../css/BookCard.css'
import { CardType } from '../pages/BookApprovalSys'

const BookCard = ({ book }) => {
  const type = useContext(CardType)

  return (
    <div className="bookCard" key={book.title}>
      <div className="cardHead">
        <h4>{book.title}</h4>
        <div className="cardHeadLeft">
          <img src="edit.svg" style={{ paddingRight: '10px' }} alt="" />
          <img src="delete.svg" style={{ paddingleft: '10px' }} alt="" />
        </div>
      </div>

      <p>{book.desc}</p>
      <div className="cardBottom">
        {type === 'pending' ? (
          <button className="btn" style={{ backgroundColor: '#0094FF' }}>
            Approve
          </button>
        ) : (
          <button className="btn">Disapprove</button>
        )}
      </div>
    </div>
  )
}

export default BookCard
