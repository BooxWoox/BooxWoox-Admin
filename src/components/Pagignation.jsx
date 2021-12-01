import '../css/Pagignation.css'
import { useState } from 'react'
import BookCard from './BookCard'
import BookOrderCard from './BookOrderCard'
import RefundCard from './RefundCard'
import LateReturnCard from './LateReturnCard'
import BlogCard from './BlogCard'
import BlogCommentCard from './BlogCommentCard'

const Pagignation = ({ data, pageLimit, dataLimit, type }) => {
  const [pages] = useState(Math.round(data.length / dataLimit))
  const [currentPage, setCurrentPage] = useState(1)

  function goToNextPage() {
    setCurrentPage((page) => page + 1)
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1)
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }

  function renderCard(d, idx) {
    switch (type) {
      case 'bookApprovalSys':
        return <BookCard key={idx} book={d} />
      case 'allOrders':
        return <BookOrderCard key={idx} book={d} />
      case 'refundTransactions':
        return <RefundCard key={idx} book={d} />
      case 'lateReturn':
        return <LateReturnCard key={idx} borrower={d} />
      case 'blogAdmin':
        return <BlogCard key={idx} blog={d} />
      case 'blogComments':
        return <BlogCommentCard key={idx} comment={d} />
      default:
        return <BookCard key={idx} book={d} />
    }
  }

  return (
    <div>
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => renderCard(d, idx))}
      </div>

      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`paginationItem ${currentPage === 1 ? 'disabled' : ''}`}
        >
          &lt;
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? 'active' : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`paginationItem ${
            currentPage === pages ? 'disabled' : null
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Pagignation
