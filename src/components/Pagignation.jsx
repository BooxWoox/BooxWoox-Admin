import React from 'react'
import './css/Pagignation.css'

const Pagignation = ({ totalBooks, paginate, currentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBooks / 3); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="nextPage">
            {pageNumbers.map((number) => (
                <button key={number} className='pageBtn' id={number === currentPage ? 'activenextbtn' : ""} onClick={() => paginate(number)}>{number}</button>
            ))}
            <button className='pageBtn' id='activenextbtn'>&gt;</button>
        </div>
    )
}

export default Pagignation