import React from 'react'
import ContentBox from './ContentBox'

const AllOrders = () => {
    const initialState={
        'rent':false,
        'buysell':false
    }

    const tabNames=['Rent','Buy/Sell']
    return (
        <ContentBox initialState={initialState} tabNames={tabNames}/>
    )
}

export default AllOrders
