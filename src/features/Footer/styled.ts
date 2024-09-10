import styled from 'styled-components';

export const EyeStyled = styled.div`
  .footer {
    position: relative;
  }

  .eyeContainer {
    display: flex;
    justify-content: center; /* 가로로 가운데 정렬 */
    align-items: center; /* 수직으로 가운데 정렬 */
  }

  .eyes {
    display: flex;
    gap: 1px; /* 눈 사이의 간격 */
  }

  .eye {
    position: relative;
    width: 100px; /* 눈의 크기 설정 */
    height: 100px; /* 눈의 크기 설정 */
  }

  .icon {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .eyeBall {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform-origin: center;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
`;
