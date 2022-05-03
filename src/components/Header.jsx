import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';
import navData from '../data/navData';
import {useMediaQuery} from 'react-responsive';
import MediaQuery from 'react-responsive';

function Header() {   
    const isTablet = useMediaQuery({query: '(min-width: 580px)'});

  return (
    <>
        <HeaderContainer>
            <TitleContainer>
                <Link to='/' style={{color: 'white', textDecoration: 'none'}}>やかんのページ</Link>
            </TitleContainer>

            { isTablet ? 
                <MenuContainer>
                    {
                    navData.map((data, key) => {
                        return (
                            // <ItemContainer >
                                <Link to={data.link} style={{color: 'white', textDecoration: 'none'}}>
                                    <Item>
                                        <Icon>{data.icon}</Icon>
                                        <Title>{data.title}</Title>
                                    </Item>
                                </Link>
                            // </ItemContainer>
                        );
                    })}

                </MenuContainer>
             : false} 
        </HeaderContainer>
        <AboutmeContainer>
            <div>
                やすみやすみの備忘録
            </div>
        </AboutmeContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 8vh;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 0 .5rem;
    font-size: 1.2rem;
    @media (min-width: 580px) {
        margin: 0 auto 0 2rem;
    }
`;

const MenuContainer = styled.div`
    @media (min-width: 580px) {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 100%;

    }
`;

const ItemContainer = styled.div``;

const Item = styled.div`
    @media (min-width: 580px) {
        width: 8rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        /* padding: 0 1rem; */
        transition: all .3s;
        :hover {
            background-color: white;
            color: var(--header-back);
        }
        :last-child{
            margin: 0 4px 0 0;
        }
    }
    @media (min-width: 980px) {
        width: 10rem;
    }
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AboutmeContainer = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: hsl(190, 100%, 30%); */
    background-color: var(--header-back);

    font-size: 1.3rem;
    letter-spacing: .2rem;
    background-image: url(".../public/back1.JPG");
`;