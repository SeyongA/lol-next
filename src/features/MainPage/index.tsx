
import React, { useState, useEffect } from "react";
import Main from '@/components/Main';
import Search from '@/components/Search';
import Footer from '../Footer';

import styled from 'styled-components';
import Image from 'next/image';
import fist from "../../assets/image/fists.gif";

const GifOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  z-index: 9999;
`;

const WelcomeText = styled.h1`
  color: white;
  font-size: 3rem;
  margin-top: -100px;
  text-align: center;
`;

const GifImage = styled.div`
  width: 50%;
`;


const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-bottom: 40px;
`;


const MainPage = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const handleUserInteraction = () => {
      const audio = new Audio('/audio/audio.mp3');
      audio.play();
      document.removeEventListener('click', handleUserInteraction); // 상호작용 후 이벤트 제거

      const timer = setTimeout(() => {
        setShowGif(false);
      }, 4000);

      return () => {
        clearTimeout(timer);
        audio.pause();
        audio.src = '';
      };
    };

    document.addEventListener('click', handleUserInteraction); // 사용자 클릭을 기다림

    return () => document.removeEventListener('click', handleUserInteraction);
  }, []);

  return ( <MainPageWrapper>
      <GifOverlay visible={showGif}>
        <GifImage>
          <Image src={fist} alt="Loading" layout="intrinsic" />
        </GifImage>
        <WelcomeText>Welcome to LOL.NEXT</WelcomeText>
      </GifOverlay>

      <Search />
      <ContentWrapper>
        <Main />
      </ContentWrapper>
      <Footer />
    </MainPageWrapper>

  );
};

export default MainPage;
