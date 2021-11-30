import React, { useState, createContext } from 'react'
import './css/Content.css'
import RentBooks from './apis/Rent.json'
import BuySellBooks from './apis/BuySell.json'
import Pagignation from './Pagignation'
import FilterListIcon from '@material-ui/icons/FilterList';
import AddFilter from './AddFilter';

const CardType = createContext();

const AllOrders = () => {
    const tabNames = ['Rent', 'Buy/Sell']
    const [activeTab, setActiveTab] = useState(0)
    const [books, setBooks] = useState(RentBooks)
    const [filterOpen, setFilterOpen] = useState(false)
    const [card, setCard] = useState('rent');

    const setRentBooks = () => {
        setActiveTab(0);
        setBooks(RentBooks);
        setCard('rent');
    }

    const setBuySellBooks = () => {
        setActiveTab(1);
        setBooks(BuySellBooks);
        setCard('buysell');
    }

    return (
        <>
            <AddFilter openStatus={filterOpen} close={() => { setFilterOpen(false) }} />
            <CardType.Provider value={card}>
                <div className="Container">
                    <div className="Tabs">
                        <p id={activeTab === 0 ? 'activeTab' : ''} onClick={setRentBooks}>{tabNames[0]}</p>
                        <p id={activeTab === 1 ? 'activeTab' : ''} onClick={setBuySellBooks}>{tabNames[1]}</p>
                    </div>

                    <div className="form">
                        <button className='filterbtn' onClick={(e) => { setFilterOpen(true) }}><FilterListIcon fontSize='small' color="primary" /> Filter</button>
                        <input type="text" placeholder='Search' className='searchbox' />
                    </div>

                    <div className='line' />

                    <Pagignation data={books} pageLimit={5} dataLimit={3} type={'allOrders'} />
                </div>
            </CardType.Provider>
        </>

    )
}

export default AllOrders
export {CardType}
