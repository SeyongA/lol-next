import styled from 'styled-components';

export const UserProfileStyled = styled.div`
  .profileDiv {
    box-sizing: border-box;
    float: left;
    position: relative;
    margin-top: 180px;
    margin-left: 70px;
    padding: 15px;
    width: 550px;
    height: 150px;
    .imgDiv {
      width: 120px;
      height: 120px;
      img {
        width: 120px;
        height: 120px;
        z-index: 1;
        border-radius: 15px;
        position: absolute;
      }
      .levelDiv {
        z-index: 2;
        position: absolute;
        width: 40px;
        background-color: #000;
        color: #fff;
        top: 126px;
        left: 55px; 
        border-radius: 10px;
        text-align: center;
        border: 0.2px solid #fff;
      }
    }
    .gameName{
      position: absolute;
      left: 160px;
      top: 20px;
      font-size: 24px;
      color: #fff; 
      span{
        font-weight: 600;
      }
    }
  }
`;
