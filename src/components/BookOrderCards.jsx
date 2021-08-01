import React from 'react'
import './css/BookOrderCards.css'

const BookOrderCards = ({ books }) => {
    return (
        books.map((book) => {
            return (
                <div className="bookCard" key={book.title}>
                    <div className="cardHead">
                        <h4>{book.title}</h4>
                    </div>
                    <p >{book.desc}</p>
                    {book.medium === 'pickup' ? <button className='bbtn' >Pick Up</button> :
                        <button className='bbtn' style={{ border:`2px solid #FFAE00`, color: '#FFAE00'}}>Delivery</button>}

                </div>
            )
        })
    )
}

export default BookOrderCards
