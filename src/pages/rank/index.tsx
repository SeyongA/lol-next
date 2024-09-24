import { useEffect, useState } from 'react';
import Image from 'next/image';
import rankBack from '../../assets/image/2222.jpg';
import axios from 'axios';


interface Summoner {
  summonerId: string;
  summonerName: string;
  rank: string;
  leaguePoints: number;
  puuid: string; // 추가된 필드
}

const RankPage = () => {
  const [rankingData, setRankingData] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1); // 페이지 번호 상태 추가
  const [summonerIds, setSummonerIds] = useState<string[]>([]); // summonerIds는 배열로 정의
  const [name, setName] = useState<any>();
  const entriesPerPage = 20; // 페이지당 항목 수
  const maxPageButtons = 5; // 한번에 보여줄 페이지 버튼 수

  // summonerIds에 따라 데이터를 가져오는 함수
  const getdata = async (start: number, end: number) => {
    try {
      // const idsToFetch = summonerIds.data.data.summonerId.slice(start, end); // 현재 페이지에 맞는 summonerIds의 범위를 선택
      const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/top100',
        params: {
          // summonerIds: idsToFetch,
        },
      });
      console.log(data, `11111111111111111111111`);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSummonerIds = async () => {
    try {
      const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/userRank',
      });

      console.log(data.data.data, '1431241421');

      if (data.data && Array.isArray(data.data.data)) {
        // 소환사 정보 배열을 사용
        // 소환사 정보를 리그 포인트(leaguePoints) 기준으로 내림차순 정렬
        const sortedData = data.data.data.sort((a: Summoner, b: Summoner) => b.leaguePoints - a.leaguePoints);

        // 상위 100명의 정보를 rankingData에 저장
        setRankingData(sortedData.slice(0, 100));
        // // 소환사 ID들만 추출하여 summonerIds에 저장
        // setSummonerIds(sortedData.slice(0, 100).map((summoner: Summoner) => summoner.summonerId));
      } else {
        console.error('Invalid data format');
      }
    } catch (error) {
      console.error('Error while fetching summoner IDs:', error);
    }
  };
  const delay = (ms:any) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    const fetchData = async () => {
      if (rankingData !== undefined) {
        for (let i = 0; i < rankingData.length; i++) {
          const x = rankingData[i];
  
          const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/top100',
            params: {
              data: x.summonerId,
            },
          });
          console.log(response.data, '=bbbbbb=');
  
          await delay(100); // 각 요청 사이에 50ms 딜레이 적용
        }
      }
    };
  
    fetchData(); // 비동기 함수 호출
  }, [rankingData]);

  useEffect(() => {
    if (rankingData !== undefined && rankingData.length > 0) {
      console.log(rankingData, `===`);
    }
  });

  useEffect(() => {
    console.log(summonerIds);
  }, [summonerIds]);

  useEffect(() => {
    fetchSummonerIds();
  }, []);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(summonerIds.length / entriesPerPage);

  // 페이지 변경 함수
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // 페이지네이션 관련 함수들
  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  return (
    <>
      {/* <div style={{ marginTop: '-278px' }}>
        <Image src={rankBack} alt="Ranking background" style={{ width: '1640px', height: '600px' }} />
        <h1 style={{ marginTop: '-100px', marginLeft: '30px', color: 'white', fontWeight: '600' }}>소환사 랭킹</h1>
      </div>
      <div style={{ backgroundColor: 'white', zIndex: '9999', width: '100vw', margin: '100px auto' }}>
        <div style={{ padding: '20px', margin: 'auto', textAlign: 'center' }}>
          <h1>랭킹 리스트</h1>
          <table
            style={{
              width: '80%',
              borderCollapse: 'collapse',
              justifyContent: 'center',
              borderRadius: '30px',
              margin: '30px auto',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#D1DBFF', textAlign: 'center', margin: '30px 0px auto' }}>
                <th style={{ padding: '10px', textAlign: 'center' }}>순위</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>소환사 이름</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>랭크</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>이건 점수</th>
              </tr>
            </thead>
            <tbody>
              {rankingData?.length > 0 ? (
                rankingData?.map((x:any, i:number) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                      {(currentPage - 1) * entriesPerPage + i + 1}
                    </td>
                    <td style={{ padding: '10px' }}>{x?.summonerName}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{x?.rank}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{x?.leaguePoints} LP</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} style={{ padding: '10px', textAlign: 'center' }}>
                    No ranking data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div style={{ marginTop: '20px' }}>
            <button onClick={goToFirstPage} style={paginationButtonStyle}>
              {'<<'}
            </button>
            <button onClick={handlePrevPage} style={paginationButtonStyle}>
              {'<'}
            </button>
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
              <button
                key={startPage + i}
                onClick={() => paginate(startPage + i)}
                style={{
                  ...paginationButtonStyle,
                  backgroundColor: currentPage === startPage + i ? '#4CAF50' : '#D1DBFF',
                }}
              >
                {startPage + i}
              </button>
            ))}
            <button onClick={handleNextPage} style={paginationButtonStyle}>
              {'>'}
            </button>
            <button onClick={goToLastPage} style={paginationButtonStyle}>
              {'>>'}
            </button>
          </div>
        </div>
      </div> */}

    </>
  );
};

// 페이지 버튼 스타일
const paginationButtonStyle = {
  margin: '0 5px',
  padding: '10px 15px',
  backgroundColor: '#D1DBFF',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  border: 'none',
};

export default RankPage;
