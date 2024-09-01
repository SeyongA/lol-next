import styled from 'styled-components';

export const HeaderStyled = styled.div`
  .noneHead {
    display: none !important;
  }
  .nav {
    display: flex;
    width: 100%;
    height: 64px;
    padding: 10px;
    
    background-color: #0b1463;
    position: fixed;
    top: 0;
    .navLogo {
      display: flex;
      width: 20%;
      justify-content: center;
      align-items: center;
      margin: 0 20px;
      color: #fff;
      cursor: pointer;
    }
    .navLogo:hover {
      color: orange;
    }
    .navBox {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        margin: 0 40px;
        color: #fff;
        cursor: pointer;
      }
      div:hover {
        color: orange;
      }
    }
    .navLogin {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 20px;
      color: #fff;
      cursor: pointer;
    }
    .navLogin:hover {
      color: orange;
    }
  }
`;
