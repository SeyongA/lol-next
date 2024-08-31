import { useRouter } from 'next/router';
// import { HeaderStyled } from './styled';

const Header = () => {
  const router = useRouter();
  const path = router.asPath;

  //router 함수 재정의
  const routingPage = (type: string) => {
    const number = type === '상품1' ? 1 : type === '상품2' ? 2 : 3;
    if (type === 'home') {
      router.push('/');
    } else {
      router.push(`/shopping/${number}`);
    }
  };

  return (
      <div>Header</div>
  );
};
export default Header;
