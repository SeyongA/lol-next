import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { EyeStyled } from './styled';
import blackcircle from '../../assets/image/Teemo.jpg';

const Footer = () => {
  const eyeContainerRef = useRef<HTMLDivElement>(null);
  const eyeBallRefs = [useRef<SVGSVGElement>(null), useRef<SVGSVGElement>(null)];

  const handleMouseMove = (e: MouseEvent) => {
    if (!eyeContainerRef.current) return;

    const eyeContainer = eyeContainerRef.current.getBoundingClientRect();
    const centerX = eyeContainer.left + eyeContainer.width / 2;
    const centerY = eyeContainer.top + eyeContainer.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    eyeBallRefs.forEach((eyeBallRef, index) => {
      if (!eyeBallRef.current) return;

      // 각 눈동자의 기본 위치를 조정
      const offsetX = (index === 0 ? -eyeContainer.width / 6 : eyeContainer.width / 6); // 눈동자 간 간격 조절
      const offsetY = 0;

      const angle = Math.atan2(mouseY - (centerY + offsetY), mouseX - (centerX + offsetX));
      const maxDistance = eyeContainer.width / 8; // 이동 가능한 최대 거리 조정
      const eyeBall = eyeBallRef.current;

      // 눈동자가 이미지 밖으로 나가지 않도록 제한
      const newX = Math.cos(angle) * Math.min(maxDistance, eyeContainer.width / 4 - 24); // 눈동자 크기 고려
      const newY = Math.sin(angle) * Math.min(maxDistance, eyeContainer.height / 4 - 24);

      eyeBall.style.transform = `translate(${newX}px, ${newY}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <EyeStyled>
      <footer className="footer">
        <div className="footer-content">
          <div className="left-column">
            <h2>게임 정보</h2>
            <ul>
              <li>챔피언 통계</li>
              <li>아이템 빌드</li>
              <li>소환사 주문</li>
            </ul>
          </div>
          
          <div className="eyeContainer" ref={eyeContainerRef}>
            <Image src={blackcircle} alt="Icon" layout="fill" objectFit="contain" />
            
            <svg
              className="eyeBall"
              ref={eyeBallRefs[0]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '30px',
                height: '68px',
                transition: 'transform 0.1s',
              }}
            >
              <circle cx="12" cy="12" r="10" fill="skyblue" />
              <circle cx="12" cy="12" r="5" fill="black" />
            </svg>

            <svg
              className="eyeBall"
              ref={eyeBallRefs[1]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{
                position: 'absolute',
                top: '20%',
                left: '55%',
                width: '30px',
                height: '68px',
                transition: 'transform 0.1s',
              }}
            >
              <circle cx="12" cy="12" r="10" fill="skyblue" />
              <circle cx="12" cy="12" r="5" fill="black" />
            </svg>
          </div>

          <div className="right-column">
            <h2>팔로우</h2>
            <ul>
              <li>트위터</li>
              <li>유튜브</li>
              <li>디스코드</li>
            </ul>
          </div>
        </div>
      </footer>
    </EyeStyled>
  );
};

export default Footer;
