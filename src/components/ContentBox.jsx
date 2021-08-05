import React, { useState, useEffect } from 'react'
import './css/ContentBox.css'
import FilterListIcon from '@material-ui/icons/FilterList';
import AllBooks from './apis/Books.json'
import AddFilter from './AddFilter';
import Pagignation from './Pagignation';

const ContentBox = ({ tabNames, initialState }) => {
    const [Books, setBooks] = useState([]);
    const [filterOpen, setFilterOpen] = useState(false);

    const [active, setActive] = useState(initialState);

    const fetchBooks = async (searchArgs) => {
        try {
            //api call
            setBooks(AllBooks);

            const newState = { ...initialState };
            newState[searchArgs] = true;
            setActive(newState);
        } catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {
        fetchBooks(Object.keys(initialState)[0]);
    }, [])



    return (
        <>
            <AddFilter openStatus={filterOpen} close={() => { setFilterOpen(false) }} />
            <div className='bookContainer'>
                <div className="bookContainerNav">
                    {Object.keys(active).map((searchArgs, index) => {
                        return (
                            <p id={active[searchArgs] ? 'activeTab' : ''} key={searchArgs} onClick={() => { fetchBooks(searchArgs) }}>{tabNames[index]}</p>
                        )
                    })}
                </div>


                <div className="form">
                    <button className='filterbtn' onClick={(e) => { setFilterOpen(true) }}><FilterListIcon fontSize='small' color="primary" /> Filter</button>
                    <input type="text" placeholder='Search' className='searchbox' />
                </div>


                <div className='line' />
                <Pagignation data={Books} pageLimit={4}
                    dataLimit={3} cardSelector={Object.keys(initialState)[0]}/>
            </div>

        </>
    )
}

export default ContentBox
