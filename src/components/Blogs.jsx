import React from 'react'
import { Link } from 'react-router-dom'

function Blogs({blogs, setBlogs}) {
  return (
    <>
        {blogs.map((blog, key) => {
            return (
                <Link to={blog.id} key={key}>
                    <p>{blog.title}</p>
                </Link>
            )
        })}
    </>
  )
}

export default Blogs