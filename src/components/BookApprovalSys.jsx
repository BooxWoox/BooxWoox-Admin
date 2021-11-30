import React, { useState, createContext } from 'react'
import './css/Content.css'
import PendingBooks from './apis/PendingBooks.json'
import ApprovedBooks from './apis/ApprovedBooks.json'
import Pagignation from './Pagignation'
import FilterListIcon from '@material-ui/icons/FilterList';
import AddFilter from './AddFilter';
import axios from 'axios'


const CardType = createContext();

const BookApprovalSys = () => {
    const tabNames = ['Pending Books', 'Approved Books']
    const [activeTab, setActiveTab] = useState(0)
    const [books, setBooks] = useState(PendingBooks)
    const [filterOpen, setFilterOpen] = useState(false)

    const [card, setCard] = useState('pending')

    const setPendingBooks = () => {
        setBooks(PendingBooks);
        setActiveTab(0)
        setCard('pending')
    }

    const setApprovedBooks = async () => {
        setActiveTab(1);
        const token = sessionStorage.getItem('token');
        
        const res = await axios.post("https://u197kgf4xb.execute-api.ap-south-1.amazonaws.com/Prod/getApproved", {
            headers: {
                'authtoken':token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        console.log(res);
        setBooks(ApprovedBooks);
        
        setCard('approved')
    }

    return (
        <>
            <AddFilter openStatus={filterOpen} close={() => { setFilterOpen(false) }} />
            <CardType.Provider value={card}>
                <div className="Container">
                    <div className="Tabs">
                        <p id={activeTab === 0 ? 'activeTab' : ''} onClick={setPendingBooks}>{tabNames[0]}</p>
                        <p id={activeTab === 1 ? 'activeTab' : ''} onClick={setApprovedBooks}>{tabNames[1]}</p>
                    </div>

                    <div className="form">
                        <button className='filterbtn' onClick={(e) => { setFilterOpen(true) }}><FilterListIcon fontSize='small' color="primary" /> Filter</button>
                        <input type="text" placeholder='Search' className='searchbox' />
                    </div>

                    <div className='line' />

                    <Pagignation data={books} pageLimit={5} dataLimit={3} type={'bookApprovalSys'} />
                </div>
            </CardType.Provider>
        </>
    )
}

export default BookApprovalSys
export { CardType }
