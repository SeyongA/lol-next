import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { EyeStyled } from './styled';
import blackcircle from '../../assets/image/Teemo.png';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const eyeContainerRef = useRef<HTMLDivElement>(null);
  const eyeBallRefs = [useRef<SVGSVGElement>(null), useRef<SVGSVGElement>(null)];

  const handleMouseMove = (e: MouseEvent) => {
    if (!eyeContainerRef.current) return;

    const eyeContainer = eyeContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centers = [
      { x: 60, y: 130, maxMove: 10 }, // 왼쪽 눈
      { x: 120, y: 93, maxMove: 8 }, // 오른쪽 눈
    ];

    eyeBallRefs.forEach((eyeBallRef, index) => {
      if (!eyeBallRef.current) return;

      const center = centers[index];
      const eyeBall = eyeBallRef.current;
      const angle = Math.atan2(mouseY - (eyeContainer.top + center.y), mouseX - (eyeContainer.left + center.x));

      const newX = Math.cos(angle) * center.maxMove;
      const newY = Math.sin(angle) * center.maxMove;

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
        <div className="eyeContainer" ref={eyeContainerRef}>
          <Image src={blackcircle} alt="Icon" layout="fill" objectFit="contain" />

          {/* 왼쪽 눈동자 */}
          <svg
            className="eyeBall"
            ref={eyeBallRefs[0]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{
              position: 'absolute',
              top: '92px',
              left: '52px',
              width: '30px',
              height: '30px',
              transition: 'transform 0.1s',
            }}
          >
            <circle cx="12" cy="12" r="7" fill="white" />
            <circle cx="12" cy="12" r="4" fill="black" />
          </svg>

          {/* 오른쪽 눈동자 */}
          <svg
            className="eyeBall"
            ref={eyeBallRefs[1]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{
              position: 'absolute',
              top: '84px',
              left: '110px',
              width: '30px',
              height: '30px',
              transition: 'transform 0.1s',
            }}
          >
            <circle cx="12" cy="12" r="7" fill="white" />
            <circle cx="12" cy="12" r="4" fill="black" />
          </svg>
        </div>
      <div className="footer">
        <div className="footer-links">
          <ul>
            <li>공지사항</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>파트너 신청</li>
            <li>버그리포팅</li>
            <li>광고·제휴 문의</li>
          </ul>
          <div className="social-links">
            <FaDiscord size={24} />
            <span>LOL.Next 디스코드</span>
          </div>
        </div>

        <div className="footer-description">
          <p>
            LoL.Next is hosted by PS Analytics, Inc. lol.ps isn’t endorsed by Riot Games and doesn’t reflect the views
            or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League
            of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends ©
            Riot Games, Inc.
          </p>
          <p>PS Analytics, Inc. © 2020</p>
        </div>
      </div>
    </EyeStyled>
  );
};

export default Footer;
