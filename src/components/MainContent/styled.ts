import styled from 'styled-components';

export const ChampionSliderStyled = styled.div`
  .champion-slider {
    margin-top: 80px;
    z-index: 1;
  }

  /* 슬라이드 박스 스타일 */
  .swiper-slide {
    background-color: #1f2331;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start; /* 왼쪽 정렬 */
    box-sizing: border-box;
    margin-top: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 600px;
    height: 160px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 1;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  /* 활성화된 슬라이드 */
  .swiper-slide-active {
    background-color: #2c3255;
    transform: scale(1.05);
    z-index: 2;
  }

  /* 이미지 스타일 */
  .slide-image {
    width: 100px; /* 이미지 크기를 줄임 */
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
  }

  /* 텍스트 영역 */
  .info-section {
    padding-left: 20px;
    color: white;
    flex: 1;
    display: none; /* 기본적으로 텍스트는 숨김 */
  }

  /* 활성화된 슬라이드에서만 텍스트 표시 */
  .swiper-slide-active .info-section {
    display: flex; /* 활성화된 슬라이드에서 텍스트 표시 */
    flex-direction: column;
  }

  /* 텍스트 스타일 */
  .info-section h2 {
    font-size: 18px;
    margin: 0;
    color: #ffffff;
    font-weight: 600;
  }

  .info-section .stats {
    margin-top: 10px;
    font-size: 14px;
    color: #b0b0b0;
  }

  .info-section .stats p {
    margin: 5px 0;
  }

  .info-section .points {
    margin-top: 10px;
    font-size: 12px;
    color: lightblue;
  }

  .info-section .points h4 {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .info-section .points p {
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
  }
`;
