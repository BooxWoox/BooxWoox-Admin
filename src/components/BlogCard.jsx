import React, { useContext } from 'react'
import '../css/BlogCard.css'
import { CardType } from '../pages/BlogAdmin'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const type = useContext(CardType)

  return (
    <div className="blogCard" key={blog.BlogName}>
      <div className="blogCardHead">
        <h4>{blog.BlogName}</h4>

        <div
          className="blogCardHeadLeft"
          style={{
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img src="edit.svg" className="icon" alt="" />
          {!blog.published ? (
            <img src="delete.svg" className="icon" alt="" />
          ) : (
            <button
              className="btn"
              style={{
                border: '1px solid #0094FF',
                color: '#0094FF',
                background: '#FFFFFF',
                fontSize: '12px',
              }}
            >
              Published
            </button>
          )}
        </div>
      </div>

      <p>{blog.desc}</p>

      <div
        className="cardBottom"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {blog.comments.length ? (
          <div
            style={{
              fontSize: '12px',
              color: '#0094FF',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src="show.svg" alt="" />
            <u>
              {type === 'normal' ? (
                <Link to={`/blogAdmins/blogAdminComments/normal/${blog._id}`}>
                  <p style={{ color: '#0094FF', fontSize: '12px' }}>
                    load all comments
                  </p>
                </Link>
              ) : type === 'special' ? (
                <Link to={`/blogAdmins/blogAdminComments/special/${blog._id}`}>
                  <p style={{ color: '#0094FF', fontSize: '12px' }}>
                    load all comments
                  </p>
                </Link>
              ) : (
                ''
              )}
            </u>
          </div>
        ) : (
          <div></div>
        )}

        {!blog.published ? (
          <button className="btn" style={{ backgroundColor: '#0094FF' }}>
            Approve
          </button>
        ) : (
          <button style={{ backgroundColor: '#F84A4A' }} className="btn">
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default BlogCard
