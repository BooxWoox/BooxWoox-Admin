import React, { useState, useEffect } from 'react'
import './css/BookApprovalSys.css'
import BookCards from './BookCards'
import FilterListIcon from '@material-ui/icons/FilterList';
import AllBooks from './apis/Books.json'
import AddFilter from './AddFilter';
import Pagignation from './Pagignation';

const BookApprovalSys = () => {
    const [Books, setBooks] = useState(AllBooks);
    const [filterOpen, setFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [active, setActive] = useState({
        'pending': false,
        'approved': false
    })

    function filterBooks(status) {
        const filteredBooks = AllBooks.filter((book) => {
            return book.status === status;
        })

        setBooks(filteredBooks);

        if (status === 'pending') {
            setActive({
                'pending': true,
                'approved': false
            });
        }
        else {
            setActive({
                'pending': false,
                'approved': true
            });
        }
    }

    useEffect(() => {
        filterBooks('pending');
    }, [])

    // Get current posts
    const indexOfLastBook = currentPage * 3;
    const indexOfFirstBook = indexOfLastBook - 3;
    const currentBooks = Books.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <AddFilter openStatus={filterOpen} close={() => { setFilterOpen(false) }}/>
            <div className='bookContainer'>
                <div className="bookContainerNav">
                    <p id={active.pending ? 'activeTab' : ''} onClick={() => { filterBooks('pending') }}>Pending books</p>
                    <p id={active.approved ? 'activeTab' : ''} onClick={() => { filterBooks('approved') }}>Approved books</p>
                </div>


                <div className="form">
                    <button className='filterbtn' onClick={(e) => { setFilterOpen(true) }}><FilterListIcon fontSize='small' color="primary" /> Filter</button>
                    <input type="text" placeholder='Search' className='searchbox' />
                </div>


                <div className='line' />
                <BookCards books={currentBooks} />
                <Pagignation totalBooks={Books.length}
                    paginate={paginate} currentPage={currentPage}/>
            </div>

        </>
    )
}

export default BookApprovalSys
