import React from 'react'
import '../css/BlogCommentCard.css'

const BlogCommentCard = ({ comment }) => {
  return (
    <div id="commentCard">
      <div id="commentCardTop">
        <img src="/ellipse.svg" alt="" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'left',
            flexGrow: 10,
          }}
        >
          <p>
            <b>{comment.commenterName}</b>
          </p>

          <p style={{ fontSize: '9px', color: '#7D7D7D' }}>
            Date commented : {comment.date}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/show.svg" alt="" />
          <img src="/delete.svg" alt="" />
        </div>
      </div>
      <p style={{ fontSize: '10px' }}>{comment.comment}</p>
    </div>
  )
}

export default BlogCommentCard
