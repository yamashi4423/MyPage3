import React from 'react'
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function Blog({blogs, setBlogs}) {
  let params = useParams();
  let title = "";
  let body = "";

  // まず、どのブログか探す
  blogs.map((blog) => {
    if (blog.id == params.id) {
      title = blog.title;
      body = blog.body;
    }
  })


  return (
    <>

      <div className="markdown">
        <Title>{title}</Title>
        
        <ReactMarkdown>
          {body}
        </ReactMarkdown>
      
      </div>  


    </>
  )
}

export default Blog

const Title = styled.div`
  font-size: 1.7rem;
  padding: 1rem 0 1rem 0;
`;