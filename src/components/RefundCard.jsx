import React, { useContext } from 'react'
import '../css/RefundCard.css'
import { CardType } from '../pages/Transactions'

const RefundCard = ({ book }) => {
  const type = useContext(CardType)

  return (
    <div className="bookCard" key={book.title}>
      <div className="cardHead">
        <h4>{book.title}</h4>
      </div>

      <p>{book.desc}</p>
      <div className="cardBottom">
        {type === 'refunded' ? (
          <button className="btn">Revoke</button>
        ) : (
          <button className="btn" style={{ backgroundColor: '#0094FF' }}>
            Confirm Refund
          </button>
        )}
      </div>
    </div>
  )
}

export default RefundCard
