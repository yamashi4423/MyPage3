import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Arts() {
  return (
    <div>
        <ArtsComtainer>
            <h2>つくったもの</h2>
            <ul>
                <li>ニキシー管時計</li>
                <li><Link to='/arts/mnist' style={{ textDecoration: 'none'}}>MNISTTEST</Link></li>
            </ul>
        </ArtsComtainer>
    </div>
  )
}

export default Arts


const ArtsComtainer = styled.div`
    padding: 2rem;
`;