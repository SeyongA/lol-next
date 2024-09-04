import React, { useState } from 'react';
import MainContent from '../MainContent';
import MainTitle from '../MainTitle';
import slidesData, { SlideData } from '../../utill/slidesData'; // 슬라이드 데이터

// Main 컴포넌트 (상위 컴포넌트)
const Main: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState<string>('미드'); // 기본값 미드

  const filterSlidesByLine = (line: string): SlideData[] => {
    return slidesData.filter(slide => slide.title.includes(line));
  };

  return (
    <>
      <MainTitle selectedLine={selectedLine} setSelectedLine={setSelectedLine} />
      <MainContent slides={filterSlidesByLine(selectedLine)} />
    </>
  );
};

export default Main;
