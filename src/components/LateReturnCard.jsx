import React, { useContext } from 'react'
import './css/LateReturnCard.css'
import { CardType } from './LateReturn'

const LateReturnCard = ({ borrower }) => {
    const type = useContext(CardType);
    

    return (
        <div className="LateReturnCard" key={borrower.contactNo}>
            <div className="cardLeft">
                <p style={{ fontSize: '18px' }}>{borrower.name}</p>
                <p style={{ fontSize: '14px' }}>Contact No. : {borrower.contactNo}</p>
            </div>
            <div className="date">
                <p style={{ fontSize: '14px' }}>Rent End Date : <b>{borrower.endDate}</b></p>
            </div>

            <div className="date">
                {type === 'inTransaction' ?
                    <p style={{ fontSize: '14px' }}>Day Remaining : <b>{borrower.dayRemaining}</b></p>
                    :
                    <p style={{ fontSize: '14px' }}>Return Delayed By : <b>{borrower.delayBy}</b></p>
                }
            </div>
        </div>
    )
}

export default LateReturnCard
