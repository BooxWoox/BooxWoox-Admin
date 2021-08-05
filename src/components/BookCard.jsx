import React from 'react'
import './css/BookCard.css'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';


const BookCard = ({ book }) => {
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
            <div className="cardBottom">
                <button className='btn'>Approve</button>
            </div>


        </div>
    )
}

export default BookCard
