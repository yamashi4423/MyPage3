import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Blogs({blogs, setBlogs}) {
  return (
    <>
      <Container>
        {blogs.map((blog, key) => {
              return (
                <Block>
                  <Link to={blog.id} key={key} style={{color: "black", textDecoration: "none"}}>
                    <Styled>
                      <p>{blog.title}</p>
                    </Styled>
                  </Link>
                </Block>

              )
          })}
      </Container>

    </>
  )
}


export default Blogs

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Block = styled.div`
  margin: 1.5rem 1rem;
`;

const Styled = styled.div`
  padding: .7rem 1rem;
  color: #fff;
  font-size: 1.3rem;
  background: hsl(150, 100%, 35%);
  -webkit-box-shadow: 5px 5px 0 hsl(200, 100%, 20%);
  box-shadow: 5px 5px 0 hsl(200, 100%, 20%);
`;