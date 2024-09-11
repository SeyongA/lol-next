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
    setIsVisible(currentScroll <= scrollTop || currentScroll <= 100);
    setScrollTop(currentScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTop]);

  // 소환사 랭킹 클릭 시 라우팅
  const handleRankingClick = () => {
    router.push('/rank'); // 라우터의 push 메서드로 /rank로 이동
  };

  return (
    <HeaderStyled style={{ top: isVisible ? '0' : '-100px', transition: 'top 0.3s' }}>
      <div className="nav">
        <div className="navLogo">LOL.NEXT</div>
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
