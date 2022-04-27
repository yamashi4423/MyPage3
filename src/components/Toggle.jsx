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
                <XBox><i class="fa-solid fa-xmark"></i></XBox>  
                : <BarBox><i className="fa-solid fa-bars"></i></BarBox>  }
                
            </Styled>
        </Container>

    </>
  )
}

export default Toggle

const Container = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 99999;
    cursor: pointer;
    font-size: 1.3rem;
`;

const Styled = styled.div`
    color: white;  
`;

const XBox = styled.div`
    padding: 4px 10px;

`;

const BarBox = styled.div`
    /* border: solid 2px white;
    border-radius: 3px; */
    padding: 2px 7px;
`;