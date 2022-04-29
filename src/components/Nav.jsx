import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import NavQuit from './NavQuit';
import navData from '../data/navData';

function Nav({showNav, setShowNav}) {



  return (
    <>
			<NavQuitContainer >
				
			</NavQuitContainer>
			<NavList>
				{navData.map((data, key) => {
					return (
						<Item key={key}>
							<Link to={data.link} style={{textDecoration: 'none'}}>
								<ItemContainer>
									<Icon>{data.icon}</Icon>
									<Title>{data.title}</Title>
								</ItemContainer>
							</Link>
						</Item>
					);
				})}
			</NavList>

		</>
  )
}

export default Nav

const NavQuitContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	margin: 2.5rem 1rem 0 0;
	font-size: 1.5rem;
	transition: all .3s;
	color: white;

`;

const NavList = styled.ul`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	list-style: none;
`;

const Item = styled.li``;


const ItemContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem 0 1rem 0;
	cursor: pointer;
	font-size: 1.2rem;
	color: white;
	transition: all 0.3s;
	:hover {
		background-color: whitesmoke;
		color: hsl(200, 100%, 30%);
	}
`;

const Title = styled.div`
	flex: 70%;
`;

const Icon = styled.div`
	flex: 30%;
	display: flex;
	justify-content: center;
	margin: 0 5px 0 0;
`;