import React, { useState } from 'react';
import Search from "@/components/Search";
import { ErrorPageContainer, Title, Subtitle, FooterText, SearchButton, SearchContainer } from './styled';
import Footer from '@/features/Footer';

const NotFound = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <ErrorPageContainer>
      <Title>소환사를 찾을 수 없습니다</Title>
      <Subtitle>죄송합니다, 해당 소환사를 찾지 못했습니다.</Subtitle>
      <FooterText>
        라이엇 ID 시스템 변경으로 인해 검색이 되지 않을 수도 있습니다.
        <br />
        게임 이름과 태그를 다시 한번 확인하시고 재시도 해주세요.
      </FooterText>
      <SearchContainer>
        {showSearch && <Search />} {/* showSearch가 true일 때만 Search 컴포넌트 표시 */}
        <SearchButton onClick={() => setShowSearch(!showSearch)}>다시 검색하기</SearchButton>
        {/* <RiotIDButton>라이엇 ID 확인</RiotIDButton> */}
      </SearchContainer>
      {/* <div><Footer /></div> */}
    </ErrorPageContainer>
  );
};

export default NotFound;
