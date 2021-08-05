import React from 'react'
import ContentBox from './ContentBox'

const Transactions = () => {
    const initialState={
        'refunded':false,
        'pending':false
    }

    const tabNames=["Refunded","Pending"];
    return (
        <ContentBox initialState={initialState} tabNames={tabNames}/>
    )
}

export default Transactions
