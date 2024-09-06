import styled from 'styled-components';

export const BkDivStyled = styled.div`
  .fullBox {
    width: 1440px;
    z-index: -3;
    position: relative;
    margin: 0 auto;
    .bg-crop {
      position: absolute;
      width: 1440px;
      height: 400px;
      background-color: #fff;
      z-index: -1;
      overflow: hidden; 

      .bg-img {
        position: relative;
        width: 100%;
        height: auto;
        z-index: -2;
      }
    }
  }
`;
