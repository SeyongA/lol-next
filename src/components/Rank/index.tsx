// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import rankBack from "../../assets/image/2222.jpg";

// interface Summoner {
//   summonerId: string;
//   summonerName: string;
//   rank: string;
//   leaguePoints: number;
// }

// const RankPage = () => {
//   const [rankingData, setRankingData] = useState<Summoner[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1); // 페이지 번호 상태 추가
//   const entriesPerPage = 30; // 페이지당 항목 수
//   const maxPageButtons = 5; // 한번에 보여줄 페이지 버튼 수

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log('Fetching ranking data from the server...');
//         const res = await fetch('http://localhost:4000/userRank');
//         console.log('Response status:', res.status);

//         if (res.ok) {
//           const json = await res.json();
//           console.log('Server response:', json);

//           if (json.result) {
//             const sortedData = json.data.sort((a: Summoner, b: Summoner) => b.leaguePoints - a.leaguePoints); // 내림차순 정렬
//             setRankingData(sortedData);
//           } else {
//             console.error('Failed to fetch data:', json.message);
//           }
//         } else {
//           console.error('Failed to fetch data, status code:', res.status);
//         }
//       } catch (error) {
//         console.error('Error while fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // 현재 페이지에 맞는 소환사 데이터 슬라이스
//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentEntries = rankingData.slice(indexOfFirstEntry, indexOfLastEntry);

//   // 총 페이지 수 계산
//   const totalPages = Math.ceil(rankingData.length / entriesPerPage);

//   // 페이지 변경 함수
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   // 페이지네이션 관련 함수들
//   const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
//   const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
//   const goToFirstPage = () => setCurrentPage(1);
//   const goToLastPage = () => setCurrentPage(totalPages);

//   const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
//   const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div style={{ marginTop: "-278px" }}>
//         <Image src={rankBack} alt="Ranking background" style={{ width: "1640px", height: "600px" }} />
//         <h1 style={{ marginTop: "-100px", marginLeft: "30px", color: "white", fontWeight: "600" }}>소환사 랭킹</h1>
//       </div>
//       <div style={{ backgroundColor: "white", zIndex: "9999", width: "100vw", margin: "100px auto" }}>
//         <div style={{ padding: "20px", margin: "auto", textAlign: "center" }}>
//           <h1>랭킹 리스트</h1>
//           <table style={{ width: "80%", borderCollapse: "collapse", justifyContent: "center", borderRadius: "30px", margin: "30px auto" }}>
//             <thead>
//               <tr style={{ backgroundColor: "#D1DBFF", textAlign: "center", margin: "30px 0px auto" }}>
//                 <th style={{ padding: "10px", textAlign: "center" }}>순위</th>
//                 <th style={{ padding: "10px", textAlign: "center" }}>소환사</th>
//                 <th style={{ padding: "10px", textAlign: "center" }}>이건 점수</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentEntries.length > 0 ? (
//                 currentEntries.map((entry, index) => (
//                   <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
//                     <td style={{ padding: "10px", textAlign: "center" }}>{indexOfFirstEntry + index + 1}</td>
//                     <td style={{ padding: "10px" }}>소환사 이름</td>
//                     <td style={{ padding: "10px", textAlign: "center" }}>{entry.rank} {entry.leaguePoints} LP</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={3} style={{ padding: "10px", textAlign: "center" }}>
//                     No ranking data available.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* 페이지네이션 */}
//           <div style={{ marginTop: "20px" }}>
//             <button onClick={goToFirstPage} style={paginationButtonStyle}>{'<<'}</button>
//             <button onClick={handlePrevPage} style={paginationButtonStyle}>{'<'}</button>
//             {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
//               <button
//                 key={startPage + i}
//                 onClick={() => paginate(startPage + i)}
//                 style={{
//                   ...paginationButtonStyle,
//                   backgroundColor: currentPage === startPage + i ? "#4CAF50" : "#D1DBFF",
//                 }}
//               >
//                 {startPage + i}
//               </button>
//             ))}
//             <button onClick={handleNextPage} style={paginationButtonStyle}>{'>'}</button>
//             <button onClick={goToLastPage} style={paginationButtonStyle}>{'>>'}</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // 페이지 버튼 스타일
// const paginationButtonStyle = {
//   margin: "0 5px",
//   padding: "10px 15px",
//   backgroundColor: "#D1DBFF",
//   color: "#fff",
//   borderRadius: "5px",
//   cursor: "pointer",
//   border: "none",
// };

// export default RankPage;
