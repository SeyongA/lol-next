import React, { useRef, useEffect } from 'react';
import { EyeStyled } from './styled';
import blackcircle from '../../assets/image/black-circle.png';

const Footer = () => {
  const eyeRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const eyeBallRefs = [useRef<SVGSVGElement>(null), useRef<SVGSVGElement>(null)];

  const handleMouseMove = (e: MouseEvent) => {
    eyeRefs.forEach((eyeRef, index) => {
      if (!eyeRef.current || !eyeBallRefs[index].current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const centerX = eye.left + eye.width / 2;
      const centerY = eye.top + eye.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angle = Math.atan2(mouseY - centerY, mouseX - centerX);

      const maxDistance = eye.width / 4;
      const eyeBall = eyeBallRefs[index].current;

      const newX = Math.cos(angle) * maxDistance;
      const newY = Math.sin(angle) * maxDistance;

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
        <div className="eyeContainer">
          <div className="eyes">
            <div className="eye" ref={eyeRefs[0]}>
              {/* <img src={blackcircle} className="icon" alt="Icon" /> */}
              <svg className="eyeBall" ref={eyeBallRefs[0]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8" fill="red" />
                <circle cx="12" cy="12" r="4" fill="black" />
              </svg>
            </div>
            <div className="eye" ref={eyeRefs[1]}>
              <svg className="eyeBall" ref={eyeBallRefs[1]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8" fill="blue" />
                <circle cx="12" cy="12" r="4" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </EyeStyled>
  );
};

export default Footer;
