import React from 'react'
import './css/BookCards.css'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';

const BookCards = ({ books }) => {
    return (
        books.map((book) => {
            return (
                <div className="bookCard" key={book.title}>
                    <div className="cardHead">
                        <h4>{book.title}</h4>
                        <div className="cardHeadLeft">
                            <EditIcon color='primary' />
                            <DeleteRoundedIcon color='error' />
                        </div>
                    </div>
                    <p>{book.desc}</p>
                    {book.status === 'pending' ? <button className='btn'>Approve</button> :
                        <button className='btn' style={{ background: 'red' }}>dispprove</button>}

                </div>
            )
        })
    )
}

export default BookCards
