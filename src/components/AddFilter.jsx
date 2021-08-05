import React from 'react'
import './css/AddFilter.css'

const AddFilter = ({ openStatus, close }) => {

    return (
        <div className='Filter' id={openStatus ? 'FilterOpen' : ''}>
            <div className="filterheader">
                <h4>+ AddFilter</h4>
                <h4 id='closebtn' onClick={close}>close x</h4>
            </div>
        </div>
    )
}

export default AddFilter
