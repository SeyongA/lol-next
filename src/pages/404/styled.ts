import styled from 'styled-components';

// 페이지 전체 컨테이너
export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0d0d2b;
  padding: 20px;
`;

// 검색 영역을 위한 컨테이너
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 70px;
`;

// 제목 스타일
export const Title = styled.h1`
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

// 부제목 스타일
export const Subtitle = styled.p`
  font-size: 18px;
  color: #cccccc;
  margin-bottom: 30px;
`;

// 푸터 텍스트 스타일
export const FooterText = styled.p`
  font-size: 16px;
  color: #888888;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 30px;
`;

// 검색 버튼 스타일
export const SearchButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 123, 255, 0.4);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  outline: none; /* 클릭 시 윤곽선 제거 */
  display: inline-block; /* 다른 요소로 인한 움직임 방지 */
  position: relative; /* 위치 고정 */
  width: auto; /* 너비 고정 */
  min-width: 150px; /* 최소 너비 고정 */
  text-align: center; /* 텍스트 가운데 정렬 */

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 6px rgba(0, 123, 255, 0.4); /* hover 시 box-shadow 크기 유지 */
  }

  &:active {
    background-color: #003f7f; /* 클릭 시 색상만 변화 */
    box-shadow: none; /* active 상태에서 box-shadow 제거 */
    transform: translate(0, 0); /* 클릭 시 움직임 방지 */
  }

  &:focus {
    outline: none; /* focus 시 outline 제거 */
    box-shadow: none; /* focus 시에도 box-shadow 제거 */
  }
`;


// 라이엇 ID 확인 버튼 스타일
// export const RiotIDButton = styled.button`
//   background-color: #d9534f;
//   color: white;
//   border: none;
//   padding: 12px 24px;
//   border-radius: 6px;
//   font-size: 16px;
//   cursor: pointer;
//   box-shadow: 0 4px 6px rgba(217, 83, 79, 0.4);
//   transition: background-color 0.3s ease, box-shadow 0.3s ease;
//   outline: none; /* 버튼 클릭 시 생기는 윤곽선을 제거 */

//   &:hover {
//     background-color: #c9302c;
//     /* 기존 그림자의 변화가 크지 않도록 조정 */
//     box-shadow: 0 4px 6px rgba(217, 83, 79, 0.4); /* hover에서도 box-shadow 유지 */
//   }
// `;
