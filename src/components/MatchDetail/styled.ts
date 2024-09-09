import styled from 'styled-components';

export const MatchDetailStyled = styled.div`
  .detailDiv {
    width: 1000px;
    height: 180px;
    border: 1px solid #333;
    margin: 0 0 20px 0;
    border-radius: 8px;
    position: relative;
    .winInfo {
      width: 130px;
      height: 178px;
      position: absolute;
      left: 0;
      padding: 20px;
      line-height: 1.7;
    }
    .champInfo {
      width: 400px;
      height: 178px;
      position: absolute;
      left: 140px;
      padding-left: 20px;
      div {
        border-radius: 10px;
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .d1 {
        width: 80px;
        height: 80px;
        position: relative;
        top: 20px;
      }
      .d2 {
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        position: absolute;
        top: 110px;
      }
      .d3 {
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        position: absolute;
        left: 64px;
        top: 110px;
      }
      .d4 {
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        position: absolute;
        left: 108px;
        top: 110px;
      }
      .d5 {
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        position: absolute;
        left: 152px;
        top: 110px;
      }
      .d6 {
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        position: absolute;
        left: 196px;
        top: 110px;
      }
      .d7 {
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        position: absolute;
        left: 240px;
        top: 110px;
      }
      .d8 {
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        position: absolute;
        left: 284px;
        top: 110px;
      }
      .d9 {
        width: 38px;
        height: 38px;
        border: 1px solid #333;
        position: absolute;
        left: 108px;
        top: 62px;
      }
      .d10 {
        width: 38px;
        height: 38px;
        border: 1px solid #333;
        position: absolute;
        left: 108px;
        top: 20px;
      }
      .d11 {
        width: 38px;
        height: 38px;
        border: 1px solid #333;
        position: absolute;
        left: 150px;
        top: 20px;
        border-radius: 19px;
        background-color: #333;

      }
      .d12 {
        width: 38px;
        height: 38px;
        border: 1px solid #333;
        position: absolute;
        left: 150px;
        top: 62px;
        border-radius: 19px;
        background-color: #333;
        padding: 1%;
        img{
          box-sizing: border-box;
          width: 100;
          margin : 0 auto;
          text-align: center;

        }
      }
      .kd {
        width: 100px;
        position: absolute;
        left: 200px;
        top: 30px;
        font-weight: 700;
        text-align: center;
      }
      .kda {
        width: 100px;
        position: absolute;
        left: 200px;
        top: 60px;
        font-weight: 700;
        text-align: center;
      }
    }
    .lineInfo {
      width: 130px;
      height: 178px;
      position: absolute;
      left: 510px;
      p {
        text-align: center;
        position: relative;
        top: 30px;
      }
    }
    .teamInfo {
      width: 300px;
      height: 178px;
      position: absolute;
      right: 20px;
      .team1 {
        width: 148px;
        height: 150px;
        position: absolute;
        left: 0;
        top: 14px;
        div {
          width: 146px;
          height: 26px;
          margin-bottom: 4px;
          border: 1px solid #333;
          position: relative;
          img {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 2px;
            left: 2px;
            border-radius: 5px;
          }
          p {
            width: 120px;
            height: 20px;
            position: absolute;
            justify-content: end;
            font-size: 12px;
            top: 0px;
            right: 0;
            text-align: end;
            line-height: 2;
            padding-right: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .team2 {
        width: 148px;
        height: 150px;
        position: absolute;
        right: 0;
        top: 14px;
        div {
          width: 146px;
          height: 26px;
          margin-bottom: 4px;
          border: 1px solid #333;
          position: relative;
          img {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 2px;
            left: 2px;
            border-radius: 5px;
          }
          p {
            width: 120px;
            height: 20px;
            position: absolute;
            justify-content: end;
            font-size: 12px;
            top: 0px;
            right: 0;
            text-align: end;
            line-height: 2;
            padding-right: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  #win {
    background-color: #ecf2ff;
    .result {
      color: #4171d6;
      font-size: 18px;
      font-weight: 700;
    }
  }
  #losses {
    background-color: #fff1f3;
    .result {
      color: #d31a45;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
