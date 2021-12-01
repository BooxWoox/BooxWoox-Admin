import React, { useState, createContext } from 'react'
import '../css/Content.css'
import RefundedBooks from '../apis/RefundedBooks.json'
import RefundPendingBooks from '../apis/RefundPendingBooks.json'
import Pagignation from '../components/Pagignation'
import FilterListIcon from '@material-ui/icons/FilterList'
import AddFilter from '../components/AddFilter'

const CardType = createContext()

const Transactions = () => {
  const tabNames = ['Refunded', 'Pending']
  const [activeTab, setActiveTab] = useState(0)
  const [books, setBooks] = useState(RefundedBooks)
  const [filterOpen, setFilterOpen] = useState(false)
  const [card, setCard] = useState('refunded')

  const setRefundedBooks = () => {
    setBooks(RefundedBooks)
    setActiveTab(0)
    setCard('refunded')
  }

  const setRefundPendingBooks = () => {
    setBooks(RefundPendingBooks)
    setActiveTab(1)
    setCard('pending')
  }

  return (
    <>
      <AddFilter
        openStatus={filterOpen}
        close={() => {
          setFilterOpen(false)
        }}
      />
      <CardType.Provider value={card}>
        <div className="Container">
          <div className="Tabs">
            <p
              id={activeTab === 0 ? 'activeTab' : ''}
              onClick={setRefundedBooks}
            >
              {tabNames[0]}
            </p>
            <p
              id={activeTab === 1 ? 'activeTab' : ''}
              onClick={setRefundPendingBooks}
            >
              {tabNames[1]}
            </p>
          </div>

          <div className="form">
            <button
              className="filterbtn"
              onClick={(e) => {
                setFilterOpen(true)
              }}
            >
              <FilterListIcon fontSize="small" color="primary" /> Filter
            </button>
            <input type="text" placeholder="Search" className="searchbox" />
          </div>

          <div className="line" />

          <Pagignation
            data={books}
            pageLimit={5}
            dataLimit={3}
            type={'refundTransactions'}
          />
        </div>
      </CardType.Provider>
    </>
  )
}

export default Transactions
export { CardType }
