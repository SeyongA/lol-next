import styled from 'styled-components';

export const HeaderStyled = styled.div`
  position: fixed;
  width: 100%;
  background-color: #0b1463;
  transition: top 0.3s ease;  // 부드러운 위치 변화를 위한 트랜지션 추가
  z-index: 1000;  // 충분히 높은 z-index로 다른 요소들 위에 위치하도록 설정

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;  // 로고, 박스, 로그인 버튼을 균등하게 분배
    padding: 10px;
    height: 64px;  // 헤더의 높이를 고정

    .navLogo {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      cursor: pointer;
      &:hover {
        color: orange;
      }
    }

    .navBox {
      width: 60%;
      display: flex;
      justify-content: space-around;  // 박스 내부의 아이템을 공간을 균등하게 나눠서 정렬
      div {
        margin: 0 20px;
        color: #fff;
        cursor: pointer;
        &:hover {
          color: orange;
        }
      }
    }

    .navLogin {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      cursor: pointer;
      &:hover {
        color: orange;
      }
    }
  }
`;
