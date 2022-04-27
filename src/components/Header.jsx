import React from 'react'
import styled from 'styled-components';
import Menu from './Menu';

function Header() {    

  return (
    <>
        <Container>
            <TitleContainer>
                <div>やかんのページ</div>
            </TitleContainer>
        </Container>
    </>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
    
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 0 0.5rem;
    font-size: 1.2rem;
`;

