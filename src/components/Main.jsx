import React from 'react'
import styled from 'styled-components';

function Main() {
  return (
    <>
      <MainContainer>
        <ArticleContainer>
          <Title>やかんのページへようこそ</Title>

          <SubTitle>About me</SubTitle>
          <p>大学3年生をしています。新学期早々大学行きたくないです。</p>
          <p>趣味は漫画、ラジオ、ときどき音楽。</p>
          
          <SubTitle>すき</SubTitle>
          <List>
            <I>浅野いにお</I>
            <I>押見修三</I>
            <I>古谷実</I>
            <I>沈黙の金曜日</I>
            <I>Nirvana</I>
            <I>神聖かまってちゃん</I>
          </List>
          <p>とかです</p>
          
          <SubTitle>近況</SubTitle>
          <p>メイドインアビスがめちゃくちゃ熱いです。さいこうです。（2022/09/02）</p>
        </ArticleContainer>
        <SideContainer>
          
        </SideContainer>
      </MainContainer>


    </>
  )
}

export default Main

const MainContainer = styled.div`
  display: grid;
  @media (min-width: 1024px) {
    grid-template-columns: [left] 1fr [center] auto [right];
  }
`;
const ArticleContainer = styled.div`
  margin:  0;
`;
const SideContainer = styled.div`
  margin: 10px 0;


`;

const Title = styled.div`
  font-size: 1.5rem;
  padding: 1rem 0 1.5rem 0;
`;
const SubTitle = styled.div`
  font-size: 1.2rem;
  padding: .5rem 1rem;
  margin: 1rem 0 1rem 0;
  border-left: 4px solid #000;
`;

const List = styled.ul`
  padding: 0 5rem;
`;

const I = styled.li`
  padding: 0 0 .5rem 0;
`;