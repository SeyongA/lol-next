import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';

// Swiper의 스타일을 가져옵니다.
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import './styled'; // 사용자 정의 스타일
import slidesData, { SlideData } from '../../utill/slidesData'; 

const MainContent: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      centeredSlides={true}
    >
      {slidesData.map((slide: SlideData) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-content">
            <div className="image-section">
              <img src={slide.imageUrl} alt={slide.title} className="slide-image" />
            </div>
            <div className="info-section">
              <h2>{slide.title}</h2>
              <div className="stats">
                <p>승률: {slide.winRate}</p>
                <p>픽률: {slide.pickRate}</p>
                <p>밴률: {slide.banRate}</p>
              </div>
              <div className="points">
                <h4>주목해야 할 포인트</h4>
                <p>{slide.points}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainContent;
