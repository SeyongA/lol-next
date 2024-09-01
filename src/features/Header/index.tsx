import { useRouter } from 'next/router';
import { HeaderStyled } from './styled';

const Header = () => {
  const router = useRouter();
  const path = router.asPath;

  //router 함수 재정의

  return (
    <HeaderStyled>
      <div className="nav">
        <div className="navLogo">LOL.NEXT</div>
        <div className="navBox">
          <div>챔피언 티어</div>
          <div>소환사 랭킹</div>
          <div>프로 관전</div>
          <div>커뮤니티</div>
          <div>Next 맴버쉽</div>
        </div>
        <div className="navLogin">로그인</div>
      </div>
    </HeaderStyled>
  );
};
export default Header;
