import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MatchInfoStyled } from './styled';
import { PieChart, Pie, Cell, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';
import axios from 'axios';

// 챔피언 이름 매핑 데이터
const championNameMapping: { [key: string]: string } = {
  'Aatrox': '아트록스',
  'Ahri': '아리',
  'Akali': '아칼리',
  'Alistar': '알리스타',
  'Amumu': '아무무',
  'Anivia': '애니비아',
  'Annie': '애니',
  'Aphelios': '아펠리오스',
  'Ashe': '애쉬',
  'AurelionSol': '오렐리온 솔',
  'Azir': '아지르',
  'Bard': '바드',
  'Blitzcrank': '블리츠크랭크',
  'Brand': '브랜드',
  'Braum': '브라움',
  'Caitlyn': '케이틀린',
  'Camille': '카밀',
  'Cassiopeia': '카시오페아',
  'ChoGath': '초가스',
  'Corki': '코르키',
  'Darius': '다리우스',
  'Diana': '다이애나',
  'DrMundo': '문도 박사',
  'Draven': '드레이븐',
  'Ekko': '에코',
  'Elise': '엘리스',
  'Evelynn': '이블린',
  'Ezreal': '이즈리얼',
  'Fiddlesticks': '피들스틱',
  'Fiora': '피오라',
  'Fizz': '피즈',
  'Galio': '갈리오',
  'Gangplank': '갱플랭크',
  'Garen': '가렌',
  'Gnar': '나르',
  'Gragas': '그라가스',
  'Graves': '그레이브즈',
  'Hecarim': '헤카림',
  'Heimerdinger': '하이머딩거',
  'Illaoi': '일라오이',
  'Irelia': '이렐리아',
  'Ivern': '아이번',
  'Janna': '잔나',
  'JarvanIV': '자르반 4세',
  'Jax': '잭스',
  'Jayce': '제이스',
  'Jhin': '진',
  'Jinx': '징크스',
  'KaiSa': '카이사',
  'Kalista': '칼리스타',
  'Karma': '카르마',
  'Karthus': '카르서스',
  'Kassadin': '카사딘',
  'Katarina': '카타리나',
  'Kayle': '케일',
  'Kayn': '케인',
  'Kennen': '케넨',
  'KhaZix': '카서스',
  'Kindred': '킨드레드',
  'Kled': '클레드',
  'KogMaw': '코그모',
  'Leblanc': '리블랑',
  'LeeSin': '리 신',
  'Leona': '레오나',
  'Lillia': '릴리아',
  'Lissandra': '리산드라',
  'Lucian': '루시안',
  'Lulu': '룰루',
  'Lux': '럭스',
  'Malphite': '말파이트',
  'Malzahar': '말자하',
  'Maokai': '마오카이',
  'MasterYi': '마스터 이',
  'MissFortune': '미스 포츈',
  'Mordekaiser': '모데카이저',
  'Morgana': '모르가나',
  'Nami': '나미',
  'Nasus': '나서스',
  'Nautilus': '노틸러스',
  'Neeko': '니코',
  'Nidalee': '니달리',
  'Nocturne': '녹턴',
  'Nunu': '누누',
  'Olaf': '올라프',
  'Orianna': '오리아나',
  'Ornn': '오른',
  'Pantheon': '판테온',
  'Poppy': '포비',
  'Pyke': '파이크',
  'Qiyana': '키아나',
  'Quinn': '퀸',
  'Rakan': '라칸',
  'Rammus': '람머스',
  'RekSai': '렉사이',
  'Rell': '렐',
  'Renekton': '레넥톤',
  'Rengar': '렝가',
  'Riven': '리븐',
  'Rumble': '럼블',
  'Ryze': '라이즈',
  'Samira': '사미라',
  'Sejuani': '세주아니',
  'Senna': '세나',
  'Seraphine': '세라핀',
  'Sett': '세트',
  'Shaco': '샤코',
  'Shen': '쉔',
  'Shyvana': '쉬바나',
  'Singed': '신지드',
  'Sion': '사이온',
  'Sivir': '시비르',
  'Skarner': '스카너',
  'Sona': '소나',
  'Soraka': '소라카',
  'Swain': '스웨인',
  'Sylas': '사일러스',
  'Syndra': '신드라',
  'TahmKench': '탐켄치',
  'Taliyah': '탈리야',
  'Talon': '탈론',
  'Taric': '타릭',
  'Teemo': '티모',
  'Thresh': '쓰레쉬',
  'Tristana': '트리스타나',
  'Trundle': '트런들',
  'Tryndamere': '트린다미어',
  'TwistedFate': '트위스티드 페이트',
  'Twitch': '트위치',
  'Udyr': '우디르',
  'Urgot': '우르곳',
  'Varus': '바루스',
  'Vayne': '베인',
  'Veigar': '베이가',
  'Velkoz': '벨코즈',
  'Vi': '바이',
  'Viego': '비에고',
  'Viktor': '빅토르',
  'Vladimir': '블라디미르',
  'Volibear': '볼리베어',
  'Warwick': '워윅',
  'Wukong': '오공',
  'Xayah': '자야',
  'Xerath': '제라스',
  'XinZhao': '신 짜오',
  'Yasuo': '야스오',
  'Yone': '요네',
  'Yorick': '요릭',
  'Yuumi': '유미',
  'Zac': '자크',
  'Zed': '제드',
  'Ziggs': '직스',
  'Zilean': '질리언',
  'Zoe': '조이',
  'Zyra': '자이라',
  'Aurora': '오로라',
  'Briar': '브라이어',
  'Smolder': '스몰더',
  'Hwei': '흐웨이'
};

const MatchInfo = () => {
  const [gameName, setGameName] = useState<string>();
  const [tagLine, setTagLine] = useState<string>();
  const [allData, setAllData] = useState<any>();
  const [myData, setMyData] = useState<any>();
  const [puuid, setPuuid] = useState<any>();
  const [winLossData, setWinLossData] = useState<any[]>([]);
  const [winRate, setWinRate] = useState<number>(0);
  const [topChampions, setTopChampions] = useState<any[]>([]);

  const router = useRouter();
  const path = router.asPath;
  const [__, ___, userInfo] = path.split('/');
  const [name, tag] = userInfo.split('%20-%20');

  const getdata = async () => {
    try {
      const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/match20info',
        params: {
          playerName: gameName,
          playerTag: tagLine,
        },
      });
      setAllData(data);
      setPuuid(data.data.PUUID);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (allData && puuid) {
      const allParticipants: any = [];

      allData.data.validGameData.forEach((game: any) => {
        if (game !== undefined) {
          const participant = game?.info.participants.find((participant: any) => participant.puuid === puuid);
          if (participant) {
            allParticipants.push({
              champ: participant.championName,
              kill: participant.kills,
              Death: participant.deaths,
              assist: participant.assists,
              win: participant.win,
              a: participant.role,
              line: participant.lane,
            });
          }
        }
      });

      if (allParticipants.length > 0) {
        setMyData(allParticipants);

        const wins = allParticipants.filter((participant: any) => participant.win).length;
        const losses = allParticipants.length - wins;
        const totalGames = wins + losses;
        const winRatePercentage = ((wins / totalGames) * 100).toFixed(2);
        setWinRate(Number(winRatePercentage));

        setWinLossData([{
          name: `승리 `,
          value: wins
        }, {
          name: `패배 `,
          value: losses
        }]);

        const champCounts = allParticipants.reduce((acc: any, game: any) => {
          acc[game.champ] = (acc[game.champ] || { count: 0, kills: 0, deaths: 0, assists: 0 });
          acc[game.champ].count += 1;
          acc[game.champ].kills += game.kill;
          acc[game.champ].deaths += game.Death;
          acc[game.champ].assists += game.assist;
          return acc;
        }, {});

        const topThree = Object.entries(champCounts)
          .map(([champ, stats]: any) => ( {
            champ: championNameMapping[champ] || champ, // 매핑된 한글 이름 사용
            originalChamp: champ, // 원래 영문 이름도 저장
            count: stats.count,
            averageKDA: ((stats.kills + stats.assists) / stats.deaths).toFixed(2),
          }))
          .sort((a: any, b: any) => b.count - a.count)
          .slice(0, 3);

        setTopChampions(topThree);
      } else {
        console.log('해당 puuid와 일치하는 참가자를 찾지 못했습니다.');
      }
    }
  }, [allData, puuid]);

  useEffect(() => {
    if (name !== undefined && tag !== undefined) {
      setGameName(decodeURIComponent(name));
      setTagLine(tag);
    }
  }, [name, tag]);

  useEffect(() => {
    if (gameName !== undefined && tagLine !== undefined) {
      getdata();
    }
  }, [gameName, tagLine]);

  const COLORS = ['#0088FE', '#FF8042'];

  const renderCustomizedLabel = ({ viewBox }: any) => {
    const { cx, cy } = viewBox;
    return (
      <text x={cx} y={cy} fill="black" textAnchor="middle" dominantBaseline="central" fontSize="20px">
        {`${winRate}%`}
      </text>
    );
  };

  useEffect(() => {
    console.log('Top Champions Data:', topChampions); // 데이터 확인
  }, [topChampions]);

  return (
    <MatchInfoStyled>
      <div className="main" style={{ display: "flex", flexDirection: "row" }}>
        {winLossData.length > 0 && (
          <ResponsiveContainer width="50%" height={400}>
            <PieChart>
              <Pie
                data={winLossData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {winLossData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label content={renderCustomizedLabel} position="center" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}

        {/* Top 3 챔피언 데이터 추가 */}
        <div style={{ width: "50%", height: "100%", marginTop: '0px', padding: '20px', backgroundColor: '#white', borderRadius: '8px' }}>
          <h2 style={{ marginBottom: "30px" }}>최근에 많이 플레이한 챔피언</h2>
          {topChampions.length > 0 && topChampions.map((champion, index) => (
            <div key={index} style={{ marginBottom: '50px', display: 'flex', alignItems: 'center' }}>
              {/* 추가된 부분: 챔피언 초상화 이미지 */}
              <img 
                src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/champion/${champion.originalChamp}.png`} 
                alt={champion.champ}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <div>
                <div><strong>{champion.champ}</strong></div> {/* 한글 이름 표시 */}
                <div>KDA: {champion.averageKDA}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MatchInfoStyled>
  );
};

export default MatchInfo;
