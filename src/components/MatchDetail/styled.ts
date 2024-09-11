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
      width: 150px;
      height: 178px;
      position: absolute;
      left: 0;
      padding: 20px;
      line-height: 2;
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
        position: absolute;
        top: 110px;
      }
      .d3 {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 64px;
        top: 110px;
      }
      .d4 {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 108px;
        top: 110px;
      }
      .d5 {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 152px;
        top: 110px;
      }
      .d6 {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 196px;
        top: 110px;
      }
      .d7 {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 240px;
        top: 110px;
      }
      .d8 {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 284px;
        top: 110px;
      }
      .d9 {
        width: 38px;
        height: 38px;
        position: absolute;
        left: 108px;
        top: 62px;
      }
      .d10 {
        width: 38px;
        height: 38px;
        position: absolute;
        left: 108px;
        top: 20px;
      }
      .d11 {
        width: 38px;
        height: 38px;
        position: absolute;
        left: 150px;
        top: 20px;
        border-radius: 19px;
        background-color: #333;
      }
      .d12 {
        width: 38px;
        height: 38px;
        position: absolute;
        left: 150px;
        top: 62px;
        border-radius: 19px;
        padding: 1%;
        img {
          box-sizing: border-box;
          width: 100;
          margin: 0 auto;
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
      left: 480px;
      p {
        text-align: center;
        position: relative;
        top: 30px;
      }
    }
    .teamInfo {
      width: 340px;
      height: 178px;
      position: absolute;
      right: 0px;
      .team1 {
        width: 168px;
        height: 150px;
        position: absolute;
        left: 0;
        top: 14px;
        div {
          width: 156px;
          height: 26px;
          margin-bottom: 4px;
          position: relative;
          img {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 2px;
            left: 2px;
            border-radius: 5px;
          }
          p {
            width: 120px;
            height: 20px;
            padding-left: 4px;
            position: absolute;
            justify-content: end;
            font-size: 14px;
            top: 0px;
            font-weight: 400;
            right: 0;
            text-align: start;
            line-height: 1.6;
            padding-right: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p:hover {
            color: #4171d6;
            cursor: pointer;
          }
        }
      }
      .team2 {
        width: 168px;
        height: 150px;
        position: absolute;
        right: 0;
        top: 14px;
        div {
          width: 156px;
          height: 26px;
          margin-bottom: 4px;
          position: relative;
          img {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 2px;
            left: 2px;
            border-radius: 5px;
          }
          p {
            width: 120px;
            height: 20px;
            padding-left: 4px;
            position: absolute;
            justify-content: end;
            font-size: 14px;
            top: 0px;
            font-weight: 400;
            right: 0;
            text-align: start;
            line-height: 1.6;
            padding-right: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p:hover {
            color: #4171d6;
            cursor: pointer;
          }
        }
      }
    }
  }
  #win {
    background-color: #ecf2ff;
    border: 1px solid #4171d6;
    .result {
      color: #4171d6;
      font-size: 18px;
      font-weight: 700;
    }
    .champInfo {
      div {
        background-color: #b3cdff;
      }
    }
  }
  #losses {
    background-color: #fff1f3;
    border: 1px solid #d31a45;
    .result {
      color: #d31a45;
      font-size: 18px;
      font-weight: 700;
    }
    .champInfo {
      div {
        background-color: #ffbac3;
      }
    }
  }
`;
