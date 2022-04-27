import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Edit from './components/Edit';
import Blog from './components/Blog';
import BlogEdit from './components/BlogEdit';
import Side from './components/Side';
import Nav from './components/Nav';
import { useState } from 'react';
import Toggle from './components/Toggle';


function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Wrapper>

          {/* Header */}
          <HeaderContainer>
            <Header showNav={showNav} setShowNav={setShowNav}/>
          </HeaderContainer>
          
          <Toggle showNav={showNav} setShowNav={setShowNav}/>

          {/* Nav */}
          <NavContainer showNav={showNav}>
            <Nav showNav={showNav} setShowNav={setShowNav}/>
          </NavContainer>

          {/* Main */}
          <MainWrapper>
            <MainContainer>
              <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/blog/edit' element={<BlogEdit/>}></Route>
              </Routes>
            </MainContainer>
          </MainWrapper>


          {/* Footer */}
          <FooterContainer>
            <Footer/>
          </FooterContainer>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  /* max-width: 1024px; */
  margin: 0 auto;
  width: 100%;
  /* height: 100%; */
  /* padding: 0 1rem; */
  background-color: #EEE;

`;



const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  color: var(--header-color);
  background-color: var(--header-back);
  font-family: var(--header-font);
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.showNav ? '0vw' : '-50vw' }; // styled-componentsはコンポーネントとして捉える。クラスを付与するのではなく、値をコンポーネントを操作するように変更する
  width: 40vw;
  height: 100%;
  z-index: 9999;
  background-color: var(--nav-back);
  transition: all .5s;
`;

const MainWrapper = styled.div`
  margin: calc(3rem  ) auto 10px auto; // position: fixed; でヘッダーを固定しているので、ヘッダー分（2rem）のマージンをとっている
  padding: 1rem 2px 5px 2px;
  max-width: 980px;
  @media (min-width: 580px) {
    padding: 5px 3rem;
  }
  @media (min-width: 980px) {
    padding: 5px 3rem;
    
  }

  
  /* width: 100%; */
  /* height: 100%; */
`;

const MainContainer = styled.div`
  background-color: white;
  margin: 1rem 4px;
  padding: 1rem 1rem;
  border-radius: 5px;
  @media (min-width: 980px) {
    padding: 1rem 2rem;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: var(--footer-back);
  color: var(--footer-color);
`;