import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Edit() {
  return (
    <>
      <EditContainer>
        <Link to='/blog/add'>ブログを追加します</Link>
        <Link to='/blog/edit'>ブログを修正します</Link>
      </EditContainer>

    </>
  )
}

export default Edit

const EditContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

`;