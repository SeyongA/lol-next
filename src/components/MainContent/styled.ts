import styled from 'styled-components';

export const ChampionSliderStyled = styled.div`
  .champion-slider {
    margin-top: 80px;
    z-index: 1;
  }

  .swiper-scrollbar {
    display: none; /* 스크롤바 자체를 숨김 */
  }

  /* 기본 슬라이드 박스 스타일 (비활성화된 슬라이드는 투명 배경) */
  .swiper-slide {
    background-color: transparent;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-top: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 800px;
    height: 300px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 1;
  }

  /* 슬라이드 안의 내용 정렬 */
  .slide-content {
    display: flex;
    flex-direction: row; /* 이미지와 텍스트를 나란히 배치 */
    align-items: center;
    justify-content: space-between;
    width: 100%; /* 컨테이너 크기 채우기 */
  }

  /* 활성화된 슬라이드 (배경색 적용) */
  .swiper-slide-active {
    background-color: #2c3255; /* 활성화된 슬라이드에서만 배경색 */
    transform: scale(1.05);
    z-index: 2;
  }

  /* 이미지 스타일 - 비활성화된 슬라이드의 이미지를 크게 */
  .swiper-slide .slide-image {
    width: 180px; /* 비활성화된 슬라이드에서 더 큰 이미지 */
    height: 300px; /* 비활성화된 슬라이드에서 더 큰 이미지 */
    border-radius: 10px;
    object-fit: cover; /* 이미지 비율을 유지하며 박스를 채움 */
    transition: width 0.3s ease, height 0.3s ease;
  }

  /* 활성화된 슬라이드의 이미지 크기 유지 */
  .swiper-slide-active .slide-image {
    width: 150px; /* 활성화된 슬라이드 이미지 크기 */
    height: 250px;
    object-fit: cover;
    transition: width 0.3s ease, height 0.3s ease;
  }

  /* 기본적으로 텍스트를 숨김 */
  .info-section {
    display: none; /* 비활성화된 슬라이드의 기본 상태로 텍스트 숨김 */
    padding-left: 20px;
    color: white;
    flex: 1;
  }

  /* 활성화된 슬라이드에서 텍스트를 보이게 설정 */
  .swiper-slide-active .info-section {
    display: flex;
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

  .swiper-pagination {
    display: none;
  }

  .swiper-slide-active {
    background-color: #505E6F;
    transform: translateX(0); /* 활성화된 슬라이드를 중앙에 위치 */
    z-index: 2;
    scale: 1.05;
  }

  .swiper-slide-prev {
    transform: translateX(-10%); /* 이전 슬라이드를 왼쪽으로 이동 */
  }

  .swiper-slide-next {
    transform: translateX(10%); /* 다음 슬라이드를 오른쪽으로 이동 */
  }
`;
