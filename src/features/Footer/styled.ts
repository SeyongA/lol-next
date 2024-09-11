import styled from 'styled-components';

export const EyeStyled = styled.div`
  .footer {
    background-color: #1e1e2f;
    color: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;

    ul {
      display: flex;
      gap: 15px;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      cursor: pointer;
      transition: color 0.3s;
    }

    li:hover {
      color: #ff4081;
    }

    .social-links {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #00e676;
    }
  }

  .footer-description {
    max-width: 800px;
    margin: 0 auto;
    font-size: 0.8em;
    color: #aaaaaa;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .eyeContainer {
    position: relative;
    width: 225px;
    height: 225px;
    margin: 0 auto;
  }

  .eyeBall {
    position: absolute;
    width: 30px;
    height: 30px;
    transform-origin: center;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease-out;
  }
`;
