import { collection, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';

function BlogEditForm({blogs, setBlogs}) {
    const [inputTitle, setInputTitle] = useState("");
    const [inputBody, setInputBody] = useState("");
    const blogsCollection = collection(db, "blogs");
    const newId = `${Math.random().toString(32).substring(2)}`;
    
    // input を監視する関数
    const handleChangeTitle = (e) => {
        setInputTitle(e.target.value);
        console.log(inputTitle);
    }
    const handleChangeBody = (e) => {
        setInputBody(e.target.value);
        console.log(inputBody);
    }

    // Submit時に行う関数
    const handleSubmit = (e) => {
        e.preventDefault(); // 忘れずに！！

        // blogs配列を更新

        setBlogs([ // splite構文復習しろカス！！！
            ...blogs,
            { 
                id: newId,
                title: inputTitle,
                body: inputBody
            }
        ]);
        // setInputTitle("");
        // setInputBody("");

        // データベースを更新
        // async () => {
            setDoc(doc(blogsCollection, newId), {
                id: newId,
                title: inputTitle,
                body: inputBody
            })
        // }
    }
  return (
    <div>
        <Container>
            <Title>ブログの編集</Title>
            <Form onSubmit={handleSubmit}>
                <InputContainer>
                    <div style={{color: "white", margin: "0 1rem", fontSize: "1.2rem"}}>Title</div>
                    <InputTitle onChange={handleChangeTitle} value={inputTitle}></InputTitle>
                    <div style={{color: "white", margin: "0 1rem", fontSize: "1.2rem"}}>Body</div>
                    <InputBody onChange={handleChangeBody} value={inputBody}></InputBody>
                </InputContainer>
                <ButtonContainer>
                    <Link to='/blog/edit'>
                        <Button>+</Button>
                    </Link>
                </ButtonContainer>
            </Form>
        </Container>
    </div>
  )
}

export default BlogEditForm


const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500vh;
    z-index: 99999999;
    background-color: rgba(0,0,0, 0.5);
    /* background-color: crimson; */
`;

const Title = styled.div`
    margin: 3rem 1rem 0 1rem;
    color: white;
    font-size: 1.5rem;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: 2rem 1rem ;
`;
const Form = styled.form`

`;

const InputTitle = styled.input`
    margin: 10px;
    padding: .3rem .5rem;
    font-size: 1.3rem;
`;

const InputBody = styled.textarea`
    margin: 10px;
    padding: .5rem .5rem;
    height: 70vh;
    font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

`;
const Button = styled.button`
    /* flex: 70%; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 1.4rem;
    margin: 0 2rem;
    font-size: 1.5rem;
`;