import React from 'react'
import './css/BookOrderCard.css'
import './css/BookCard.css'

const BookOrderCard = ({book}) => {
    return (
        <div className="bookCard" key={book.title}>
            <div className="cardHead">
                <h4>{book.title}</h4>
                <button className='pickupbtn'>Pick Up</button> 
            </div>
            <p >{book.desc}</p>
        </div>
    )
}

export default BookOrderCard
