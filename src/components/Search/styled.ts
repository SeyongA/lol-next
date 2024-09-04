import styled from 'styled-components';

export const SearchStyled = styled.div`
  .inputDiv {
    width: 800px;
    height: 80px;
    margin: 0 auto;
    margin-top: 120px;

    input {
      display: flex;
      margin: 0 auto;
      width: 680px;
      height: 60px;
      border-radius: 30px;
      padding-left: 30px;
      font-size: 20px;
    }
  }
  .smallDiv {
    width: 460px;
    height: 50px;
    top: 30px;
    left: 80px;
    position: absolute;
    input {
      width: 450px;
      height: 40px;
      margin-top: 80px;

      border-radius: 30px;
      padding-left: 30px;
      font-size: 13px;
    }
    button{
      display: none;
    }
  }
`;
