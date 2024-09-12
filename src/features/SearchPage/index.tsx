import React, { useState, useEffect } from "react";
import UserInfo from "@/components/UserInfo";
import styled from 'styled-components';
import Image from 'next/image'; // next/image import
import fist from "../../assets/image/fists.gif"; // GIF 파일 import

// 전체 페이지를 덮는 GIF 레이어 스타일
const GifOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8); /* 배경 색상을 어둡게 */
  z-index: 9999; /* 다른 요소 위에 표시되도록 z-index 설정 */
`;

const GifImage = styled.div`
  width: 50%; /* GIF 크기 설정 */
`;

interface DataProps {
  name: any;
}

const SearchPage = ({ name }: DataProps) => {  
  const [showGif, setShowGif] = useState(true);
  
  useEffect(() => {
    // name이 바뀔 때마다 GIF를 다시 보여주도록 설정
    setShowGif(true);

    const timer = setTimeout(() => {
      setShowGif(false);
    }, 5000); // 5초 후에 GIF 숨김

    return () => clearTimeout(timer);
  }, [name]); // name을 의존 배열에 추가

  return (
    <>
      {/* GIF 오버레이 */}
      <GifOverlay visible={showGif}>
        <GifImage>
          <Image src={fist} alt="Loading" layout="intrinsic" /> {/* next/image 사용 */}
        </GifImage>
      </GifOverlay>

      {/* 실제 페이지 콘텐츠 */}
      <UserInfo name={name} />
    </>
  );
};

export default SearchPage;
