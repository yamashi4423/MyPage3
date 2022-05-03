import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function BlogAdd({blogs, setBlogs}) {
    const [inputTitle, setInputTitle] = useState("");
    const [inputBody, setInputBody] = useState("");
    
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
        setBlogs([ // splite構文復習しろカス！！！
            ...blogs,
            { 
                id: `${Math.random().toString(32).substring(2)}`,
                title: inputTitle,
                body: inputBody
            }
        ]);
        // setInputTitle("");
        // setInputBody("");
    }

  return (
    <div>
        <Container>
            <h2>ブログの追加</h2>
            <Form onSubmit={handleSubmit}>
                <InputContainer>
                    <div>title</div>
                    <InputTitle onChange={handleChangeTitle} value={inputTitle}></InputTitle>
                    <div>body</div>
                    <InputBody onChange={handleChangeBody} value={inputBody}></InputBody>
                </InputContainer>
                <ButtonContainer>
                    <Button >+</Button>
                </ButtonContainer>
            </Form>
        </Container>

    </div>
  )
}

export default BlogAdd

const Container = styled.div`
    width: 100%;
    height: calc(100vh );


`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: 2rem 0 ;

`;
const Form = styled.form`

`;

const InputTitle = styled.input`
    margin: 10px;
    font-size: 1.3rem;


`;

const InputBody = styled.textarea`
    margin: 10px;
    height: 70vh;
    font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 1.4rem;
    font-size: 1.5rem;
`;