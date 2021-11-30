import React, { useContext } from 'react'
import './css/BookOrderCard.css'
import './css/BookCard.css'
import { CardType } from './AllOrders'

const BookOrderCard = ({ book }) => {
  const type = useContext(CardType)
  return (
    <div className="bookCard" key={book.title}>
      <div className="cardHead">
        <h4>{book.title}</h4>
        {book.pickUp ? (
          <button className="pickupbtn">Pick Up</button>
        ) : (
          <button className="deliverbtn">Delivery</button>
        )}
      </div>
      <p>{book.desc}</p>
    </div>
  )
}

export default BookOrderCard
