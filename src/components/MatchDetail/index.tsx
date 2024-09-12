import { useEffect, useState } from 'react';
import { MatchDetailStyled } from './styled';

interface DataProps {
  data?: any;
  champ?: any;
  userNameTag?: any;
}

const MatchDetail = ({ data, champ, userNameTag }: DataProps) => {
  const [myData, setMyData] = useState<any>();
  const [champion, setChampion] = useState<string>();
  const [item0, setItem0] = useState<any>();
  const [item1, setItem1] = useState<number>();
  const [item2, setItem2] = useState<number>();
  const [item3, setItem3] = useState<number>();
  const [item4, setItem4] = useState<number>();
  const [item5, setItem5] = useState<number>();
  const [item6, setItem6] = useState<number>();
  const [k, setK] = useState<any>();
  const [d, setD] = useState<any>();
  const [a, setA] = useState<any>();
  const [result, setResult] = useState<boolean>();
  const { puuid } = userNameTag;
  const [endtime, setEndTime] = useState<any>();

  useEffect(() => {
    if (data !== undefined) {
      if (champ !== undefined) {
        const matchingParticipant = data.info.participants.find((participant: any) => participant.puuid === puuid);
        setMyData(matchingParticipant);
        setEndTime(data.info.gameEndTimestamp);
      }
    }
  }, [champ, data]);

  useEffect(() => {
    if (myData !== undefined) {
      setChampion(myData?.championName);
      setItem0(myData?.item0);
      setItem1(myData?.item1);
      setItem2(myData?.item2);
      setItem3(myData?.item3);
      setItem4(myData?.item4);
      setItem5(myData?.item5);
      setItem6(myData?.item6);
      setResult(myData?.win);
      setK(myData?.kills);
      setD(myData?.deaths);
      setA(myData?.assists);
    }
  }, [myData]);
  useEffect(() => {
    if (myData !== undefined) {
      console.log(myData);
    }
  }, [item0]);

  // 현재시간
  const currenTime = Date.now();

  const gameTime = () => {
    const result = currenTime - endtime;
    // 밀리초를 초로 변환
    const seconds = Math.floor(result / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); 

    if (months > 0) {
      return `${months}개월`;
    } else if (days > 0) {
      return `${days}일`;
    } else if (hours > 0) {
      return `${hours}시간`;
    } else if (minutes > 0) {
      return `${minutes}분`;
    } else {
      return `${seconds}초`;
    }
  };

  return (
    <>
      <MatchDetailStyled>
        <div className="detailDiv" id={result ? 'win' : 'losses'}>
          <div className="winInfo">
            <p className="result">{result ? '승리' : '패배'}</p>
            <p>솔랭 : 22:22</p>
            <p>{gameTime()}</p>
            <div className="lpInfo">
              <p>↑ 21LP</p>
            </div>
          </div>
          <div className="champInfo">
            <div className="d1">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/champion/${champion}.png`} alt="" />
            </div>
            <div className="d2">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/item/${item0}.png`} alt="" />
            </div>
            <div className="d3">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/item/${item1}.png`} alt="" />
            </div>
            <div className="d4">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/item/${item2}.png`} alt="" />
            </div>
            <div className="d5">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/item/${item3}.png`} alt="" />
            </div>
            <div className="d6">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/item/${item4}.png`} alt="" />
            </div>
            <div className="d7">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/item/${item5}.png`} alt="" />
            </div>
            <div className="d8">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/item/${item6}.png`} alt="" />
            </div>
            <div className="d9"></div>
            <div className="d10"></div>
            <div className="d11"></div>
            <div className="d12"></div>
            <p className="kd">{`${k} / ${d} / ${a}`} </p>
            <p className="kda">{d === 0 ? 'Perfect' : `${((k + a) / d).toFixed(2)} 평점`}</p>
          </div>
          <div className="lineInfo">
            <p>1.9인분 1등</p>
            <p>라인전 55 : 45</p>
            <p>분당 : 8.2 CS</p>
            <p>팀운 보통</p>
            <p>MVP</p>
          </div>
          <div className="teamInfo">
            <div className="team1">
              <div>
                <img src={``} alt="" />
                <p>JustLikeThatKRAAAA</p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
            </div>
            <div className="team2">
              <div>
                <img src={``} alt="" />
                <p>JustLikeThatKssdadsadasdsadadRAAAA</p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </MatchDetailStyled>
    </>
  );
};

export default MatchDetail;
