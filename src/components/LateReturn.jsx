import React, { useState, createContext } from 'react'
import Pagignation from './Pagignation'
import DelayedBorrowers from '../components/apis/LateReturnDelayed.json'
import Borrowers from '../components/apis/InTransaction.json'
import './css/Content.css'

const CardType = createContext();

const LateReturn = () => {
  const tabNames = ["Delayed", "In Transaction"]
  const [borrowers, setBorrowers] = useState(DelayedBorrowers)
  const [activeTab, setActiveTab] = useState(0)
  const [card, setCard] = useState('delayed')

  const setDelayedBorrowers = () => {
    setActiveTab(0);
    setBorrowers(DelayedBorrowers);
    setCard('delayed')
  }

  const setInTransactionBorrowers = () => {
    setActiveTab(1);
    setBorrowers(Borrowers)
    setCard('inTransaction')
  }

  return (
    <CardType.Provider value={card}>
      <div className="Container">
        <div className="Tabs">
          <p id={activeTab === 0 ? 'activeTab' : ''} onClick={() => setDelayedBorrowers()}>{tabNames[0]}</p>
          <p id={activeTab === 1 ? 'activeTab' : ''} onClick={() => setInTransactionBorrowers()}>{tabNames[1]}</p>
        </div>

        <div className='line' />

        <Pagignation data={borrowers} pageLimit={5} dataLimit={5} type={'lateReturn'} />
      </div>
    </CardType.Provider>
  )
}

export default LateReturn
export { CardType }
