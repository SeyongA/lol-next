import Main from '@/components/Main';
import Search from '@/components/Search';
import Footer from '../Footer';
import styled from 'styled-components';

// const MainPageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 200vh; /* 전체 페이지의 높이를 채우도록 */
// `;

// const ContentWrapper = styled.div`
//   flex: 1; /* 메인 콘텐츠가 가능한 많은 공간을 차지하도록 */
//   padding-bottom: 40px;
// `;

const MainPage = () => {
  return (
    <>
      <Search />
      <Main />
      <Footer />
    </>
  );
};

export default MainPage;
