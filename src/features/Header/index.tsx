// features/Header.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { HeaderStyled } from './styled';

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleScroll = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > scrollTop) {
      // 스크롤을 아래로 내렸을 때, 헤더 숨김
      setIsVisible(false);
    } else if (currentScroll < scrollTop) {
      // 스크롤을 위로 올렸을 때, 특히 스크롤 위치가 100 이하일 때 헤더 표시
      setIsVisible(true);
    }
    if (currentScroll <= 100) {
      setIsVisible(true);
    }
    setScrollTop(currentScroll); // 이전 스크롤 위치 업데이트

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTop]);


  // 소환사 랭킹 클릭 시 라우팅
  const handleRankingClick = () => {
    router.push('/rank'); // 라우터의 push 메서드로 /rank로 이동

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]); // handleScroll 대신 scrollTop으로 수정하여 오류 방지

  // 홈으로 이동하는 함수
  const goHome = () => {
    router.push('/');

  };

  return (
    <HeaderStyled style={{ top: isVisible ? '0' : '-100px', transition: 'top 0.3s' }}>
      <div className="nav">
        <div className="navLogo" onClick={goHome} style={{ cursor: 'pointer' }}>
          LOL.NEXT
        </div>
        <div className="navBox">
          <div>챔피언 티어</div>
          <div onClick={handleRankingClick}>소환사 랭킹</div> 
          <div>프로 관전</div>
          <div>커뮤니티</div>
          <div>Next 멤버쉽</div>
        </div>
        <div className="navLogin">로그인</div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
