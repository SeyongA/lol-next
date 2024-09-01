import { SearchStyled } from './styled';

const Search = () => {
  return (
    <>
      <SearchStyled>
        <div className='inputDiv'>
          <input type="text" placeholder='챔피언 혹은 소환사 검색  ex) 사일러스 or JustLikeThatKR #KR1' />
        </div>
      </SearchStyled>
    </>
  );
};

export default Search;
