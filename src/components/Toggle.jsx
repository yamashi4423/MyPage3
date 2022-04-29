import React from 'react'
import styled from 'styled-components';

function Toggle({showNav, setShowNav}) {

    const handleClick = () => {
        setShowNav(!showNav);
    }

  return (
    <>
        <Container>
            <Styled onClick={handleClick} >
                {showNav ? 
                <XBox><i className="fa-solid fa-xmark"></i></XBox>  
                : <BarBox><i className="fa-solid fa-bars"></i></BarBox>  }
                
            </Styled>
        </Container>

    </>
  )
}

export default Toggle

const Container = styled.div`
    position: fixed;
    bottom: 10vh;
    right: 3vw;
    z-index: 99999;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: whitesmoke;
    font-size: 1.5rem;
    border-radius: 50%;
    background-color: hsl(190, 100%, 30%);
    box-shadow: 0 0 8px gray;
    border: solid 1px azure;
    transition: all .3s;
    :hover {
        border: solid 1px white;
        box-shadow: 0 0 2px gray;
        /* background-color: whitesmoke;
        color: hsl(190, 100%, 30%); */
    }

    @media (min-width: 580px) {
        bottom: 11vh;
        right: 3vw;
    }
    @media (min-width: 980px) {
        bottom: 11vh;
        right: 5vw;
    }
`;

const Styled = styled.div`


`;

const XBox = styled.div`
    padding: 4px 10px;

`;

const BarBox = styled.div`
    /* border: solid 2px white;
    border-radius: 3px; */
    padding: 2px 7px;
`;