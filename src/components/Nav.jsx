import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import NavQuit from './NavQuit';

function Nav({showNav, setShowNav}) {
  const navData = [
		{
			title: "HOME",
			icon: <i class="fa-solid fa-house"></i>,
			link: "/",
		},
		{
			title: "BLOG",
			icon: <i class="fa-solid fa-clipboard"></i>,
			link: "/blog",
		},
		{
			title: "PORTFOLIO",
			icon: <i class="fa-solid fa-laptop"></i>,
			link: "/portfolio",
		}
	]

	const handleQuit = () => {
		setShowNav(!showNav);
	}


  return (
    <>
			<NavQuitContainer onClick={handleQuit}>
				
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
	cursor: pointer;
	:hover {
		color: crimson;
	}
`;

const NavList = styled.ul`
	margin: 1rem;
	display: flex;
	flex-direction: column;
	list-style: none;
`;

const Item = styled.li``;


const ItemContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 0 2rem 0;
	cursor: pointer;
	font-size: 1.2rem;
	color: white;
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