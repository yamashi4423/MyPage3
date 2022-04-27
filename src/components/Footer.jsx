import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <>
      <FooterContainer>
        <CopyRightContainer>
          &copy; 2022 やかん
        </CopyRightContainer>
      </FooterContainer>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`
  widows: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyRightContainer = styled.div``;