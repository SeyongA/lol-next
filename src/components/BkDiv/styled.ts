import styled from 'styled-components';

export const BkDivStyled = styled.div`
  .fullBox {
    width: 100%;
    z-index: -3;
    position: absolute;

    .bg-crop {
      position: absolute;
      width: 100%;
      height: 360px;
      background-color: #fff;
      z-index: -1;
      overflow: hidden; /* 넘치는 이미지 부분을 숨김 */

      .bg-img {
        position: relative;
        width: 100%;
        height: auto; /* 필요에 따라 비율 유지 */
        z-index: -2;
      }
    }
  }
`;
