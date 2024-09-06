import styled from 'styled-components';

export const SoloStyled = styled.div`
  .content{
    width: 400px;
    height: 195px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 10px;
    box-sizing: border-box;
    .title {
      color : #6D6B6B;
      margin : 10px 15px;
      text-align: start;
    }
    .mainContent{
      width: 100%;
      height: 200px;
      position: relative;
      padding: 20px;
      .imgDiv{
        width: 100px;
        height: 100px;
        padding: 15px 5px;
        background-color: #F5F5F5;
        position: absolute;
        border-radius: 50px;
        img{
          width: 90px;
          height: 90px;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
        }
      }
      .tier{
        width: 164px;
        font-size: 22px;
        position: absolute;
        left: 140px;
        top: 30px;
        font-weight: 600;
      }
      .point{
        width: 200px;
        font-size: 14px;
        position: absolute;
        color: #6D6B6B;
        left: 140px;
        top: 60px;
        font-weight: 600;
      }
      .win{
        width: 100px;
        font-size: 14px;
        text-align: end;
        top: 60px;
        right: 10px;
        position: absolute;
        color: #6D6B6B;
        font-weight: 600;
      }
      .winP{
        width: 100px;
        font-size: 14px;
        text-align: end;
        top: 80px;
        right: 10px;
        position: absolute;
        color: #6D6B6B;
        font-weight: 600;
      }

    }
  }
`;
