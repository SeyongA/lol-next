import { useEffect, useState } from 'react';
import { SearchStyled } from './styled';
import { useRouter } from 'next/router';

const Search = () => {
  const [data, setData] = useState('');
  const [Rid, setRid] = useState('');
  const [Rtag, setRtag] = useState('');

  const router = useRouter();

  useEffect(() => {
    const cleanedName = data.split(' ').join('');
    const [a, b] = cleanedName.split('#');
    setRid(a);
    setRtag(b);
  }, [data]);

 

  return (
    <>
      <SearchStyled>
        <div className="inputDiv">
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              router.push(`/search/${Rid} - ${Rtag}`);
            }}
          >
            <input
              type="text"
              placeholder="챔피언 혹은 소환사 검색  ex) 사일러스 or JustLikeThatKR #KR1"
              onChange={(e: any) => {
                setData(e.target.value);
              }}
            />
            <button type="submit">버튼</button>
          </form>
        </div>
      </SearchStyled>
    </>
  );
};

export default Search;
