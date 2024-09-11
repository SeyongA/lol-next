import styled from 'styled-components';

export const SearchStyled = styled.div`
  .inputDiv {
    width: 100%;
    max-width: 800px;
    height: 80px;
    margin: 0 auto;
    margin-top: 120px;
    padding: 0 20px;

    input {
      display: flex;
      margin: 0 auto;
      width: 100%;
      max-width: 680px;
      height: 60px;
      border-radius: 30px;
      padding-left: 30px;
      font-size: 20px;
    }

    button {
      display: none;
    }

    /* 태블릿 크기 */
    @media (max-width: 768px) {
      max-width: 600px;

      input {
        max-width: 580px;
        height: 50px;
        font-size: 18px;
      }
    }

    /* 모바일 크기 */
    @media (max-width: 480px) {
      max-width: 100%;

      input {
        max-width: 100%;
        height: 45px;
        font-size: 10px;
        padding-left: 20px;
      }
    }
  }

  .smallDiv {
    width: 100%;
    max-width: 460px;
    height: 50px;
    top: 30px;
    left: 80px;
    position: absolute;

    input {
      width: 100%;
      max-width: 450px;
      height: 40px;
      margin-top: 80px;
      border-radius: 30px;
      padding-left: 30px;
      font-size: 13px;
    }

    button {
      display: none;
    }

    /* 태블릿 크기 */
    @media (max-width: 768px) {
      max-width: 360px;

      input {
        max-width: 350px;
        height: 35px;
        font-size: 12px;
      }
    }

    /* 모바일 크기 */
    @media (max-width: 480px) {
      max-width: 100%;
      left: 10px;
      top: 20px;

      input {
        max-width: 100%;
        height: 30px;
        font-size: 8px;
        padding-left: 15px;
      }
    }
  }
`;
