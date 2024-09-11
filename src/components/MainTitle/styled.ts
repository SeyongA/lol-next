import styled from 'styled-components';

export const MainTitleStyled = styled.div`
  .titleDiv {
    width: 100%;
    margin-top: 10px;

    h2 {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 800px; /* 최대 너비를 설정하여 큰 화면에서 제한 */
      margin: 0 auto;
      padding: 0 20px; /* 작은 화면에서 좌우 여백 추가 */

      /* 태블릿 크기 */
      @media (max-width: 768px) {
        max-width: 600px; /* 최대 너비를 줄임 */
      }

      /* 모바일 크기 */
      @media (max-width: 480px) {
        max-width: 100%; /* 너비를 100%로 설정하여 가득 채우도록 */
        padding: 0 10px; /* 모바일에서 좌우 여백 축소 */
        font-size: 1.2rem; /* 글자 크기를 조정하여 가독성 향상 */
      }
    }
  }
`;