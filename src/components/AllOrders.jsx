import React, { useState, useEffect } from 'react'
import './css/AllOrders.css'
import BookOrderCards from './BookOrderCards'
import FilterListIcon from '@material-ui/icons/FilterList';
import OrdersList from './apis/Orders.json'
import AddFilter from './AddFilter';
import Pagignation from './Pagignation';

const AllOrders = () => {
    const [Orders, setOrders] = useState(OrdersList);
    const [filterOpen, setFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [active, setActive] = useState({
        'rent': false,
        'buysell': false
    })

    function filterOrders(status) {
        const filteredOrders = OrdersList.filter((book) => {
            return book.status === status;
        })
        setOrders(filteredOrders);

        if (status === "rent") {
            setActive({
                "rent": true,
                "buysell": false
            });
        }
        else {
            setActive({
                "rent": false,
                "buysell": true
            });
        }
    }

    useEffect(() => {
        filterOrders("rent");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Get current posts
    const indexOfLastBook = currentPage * 3;
    const indexOfFirstBook = indexOfLastBook - 3;
    const currentBooks = Orders.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <AddFilter openStatus={filterOpen} close={() => { setFilterOpen(false) }}/>
            <div className='bookContainer'>
                <div className="bookContainerNav">
                    <p id={active.rent ? 'activeTab' : ''} onClick={() => { filterOrders("rent") }}>Rent</p>
                    <p id={active.buysell ? 'activeTab' : ''} onClick={() => { filterOrders("buysell") }}>Buy/Sell</p>
                </div>


                <div className="form">
                    <button className='filterbtn' onClick={(e) => { setFilterOpen(!filterOpen) }}><FilterListIcon fontSize='small' color="primary" /> Filter</button>
                    <input type="text" placeholder='Search' className='searchbox' />
                </div>


                <div className='line' />
                <BookOrderCards books={currentBooks} />
                <Pagignation totalBooks={Orders.length}
                    paginate={paginate} currentPage={currentPage}/>
            </div>

        </>
    )
}

export default AllOrders
