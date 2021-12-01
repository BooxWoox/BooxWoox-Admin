import React, { useState, useEffect } from 'react'
import '../css/BlogAdminComments.css'
import Pagignation from '../components/Pagignation'
import { Link, useParams } from 'react-router-dom'
import NormalBlogs from '../apis/NormalBlogs.json'
import SpecialBlogs from '../apis/SpecialBlogs.json'

const BlogAdminComments = () => {
  const { type, blogID } = useParams()

  const [comments, setComments] = useState([])

  useEffect(() => {
    let blog
    switch (type) {
      case 'normal':
        blog = NormalBlogs.filter((b) => blogID === b._id.toString())
        break
      case 'special':
        blog = SpecialBlogs.filter((b) => blogID === b._id.toString())
        break
      default:
        blog = NormalBlogs.filter((b) => blogID === b._id.toString())
    }
    setComments(blog[0].comments)
  }, [blogID, type])

  return (
    <>
      <div className="Container">
        <div id="backArrow">
          <Link to="/blogAdmins">
            <img src="/backArrow.svg" alt="" />
          </Link>
        </div>
        <Pagignation
          data={comments}
          pageLimit={5}
          dataLimit={3}
          type={'blogComments'}
        />
      </div>
    </>
  )
}

export default BlogAdminComments
