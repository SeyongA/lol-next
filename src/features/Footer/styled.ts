import styled from 'styled-components';

export const EyeStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40vh;

  .footer {
    background-color: #1e1e2f; /* 어두운 배경 */
    color: #ffffff;
    padding: 30px;
    width: 100%;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
  }

  .left-column, .right-column {
    display: flex;
    flex-direction: column;
    color: #00e676; /* 네온 초록색 */
  }

  .left-column h2, .right-column h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #ff4081; /* 네온 핑크색 */
  }

  .left-column ul, .right-column ul {
    list-style: none;
    padding: 0;
  }

  .left-column li, .right-column li {
    margin: 5px 0;
    cursor: pointer;
    transition: color 0.3s;
  }

  .left-column li:hover, .right-column li:hover {
    color: #ffffff; /* 아이템 호버 시 흰색 강조 */
  }

  .eyeContainer {
    position: relative;
    width: 200px;
    height: 200px;
  }

  .eyeBall {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    transform-origin: center;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out;
  }
`;
