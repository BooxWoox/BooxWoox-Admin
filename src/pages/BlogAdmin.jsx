import React, { useState, createContext } from 'react'
import '../css/Content.css'
import NormalBlogs from '../apis/NormalBlogs.json'
import SpecialBlogs from '../apis/SpecialBlogs.json'
import Pagignation from '../components/Pagignation'
import FilterListIcon from '@material-ui/icons/FilterList'
import AddFilter from '../components/AddFilter'

const CardType = createContext()

const BlogAdmin = () => {
  const tabNames = ['Special Blogs', 'Normal Blogs']
  const [activeTab, setActiveTab] = useState(0)
  const [blogs, setBlogs] = useState(SpecialBlogs)
  const [filterOpen, setFilterOpen] = useState(false)

  const [card, setCard] = useState('special')

  const setSpecialBlogs = () => {
    setBlogs(SpecialBlogs)
    setActiveTab(0)
    setCard('special')
  }

  const setNormalBlogs = () => {
    setBlogs(NormalBlogs)
    setActiveTab(1)
    setCard('normal')
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
              onClick={setSpecialBlogs}
            >
              {tabNames[0]}
            </p>
            <p id={activeTab === 1 ? 'activeTab' : ''} onClick={setNormalBlogs}>
              {tabNames[1]}
            </p>
          </div>

          <>
            <div className="form">
              <button
                className="filterbtn"
                onClick={(e) => {
                  setFilterOpen(true)
                }}
              >
                <FilterListIcon fontSize="small" color="primary" /> Filter
              </button>
              <input
                type="text"
                placeholder="Search by UPI ID"
                className="searchbox"
              />
            </div>

            <div className="line" />

            <Pagignation
              data={blogs}
              pageLimit={5}
              dataLimit={3}
              type={'blogAdmin'}
            />
          </>
        </div>
      </CardType.Provider>
    </>
  )
}

export default BlogAdmin
export { CardType }
