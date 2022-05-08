import { async } from '@firebase/util';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components'
import db from '../firebase'

function BlogEdit({blogs, setBlogs}) {
  const blogsCollection = collection(db, "blogs");

  const handleDelete = (id) => {
    // blogs配列から消去
    setBlogs(
      blogs.filter((blog) => {
        if (blog.id === id) {
          // 何もしない
        } else {
          return blog;
        }
      })
    )
    console.log("@handleDelete", blogs);

    // データベースから削除
    // async () => {
      deleteDoc(doc(db, "blogs", `${id}`))
    // } 
  }


  return (
    <>
      <Container>
        {console.log("(@BlogEdit): blogs", blogs)}
        {blogs.map((blog, key) => {
          return (
            <Blog key={key}>
              {blog.title}
              <Buttons>
                <DeleteButton onClick={() => handleDelete(blog.id)}>Delete</DeleteButton>
                <Link to={blog.id} style={{textDecoration: "none"}}>
                  <EditButton>Edit</EditButton>
                </Link>
              </Buttons>
            </Blog>
          );
        })}
        
        {/* BlogEditFormを表示 */}
        <Outlet/> 
      </Container>


    </>
  )
}

export default BlogEdit


const Container = styled.div``;

const Blog = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1.5rem 1rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 1.5rem;
  margin: 0 5px;
  background-color: crimson;
  color: whitesmoke;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
`;

const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 1.5rem;
  background-color: cadetblue;
  color: whitesmoke;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
`;