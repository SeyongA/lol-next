import { useEffect, useState } from 'react';
import { MatchDetailStyled } from './styled';
import TeamInfo from '../TeamInfo';

interface DataProps {
  data?: any;
  champ?: any;
  userNameTag?: any;
  spell?: any;
  rune?: any;
}

const MatchDetail = ({ data, champ, userNameTag, spell, rune: runeAPI }: DataProps) => {
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
  const [spelln0, setSpelln0] = useState<any>();
  const [spelln1, setSpelln1] = useState<any>();
  const [spell0, setSpell0] = useState<any>();
  const [spell1, setSpell1] = useState<any>();
  const [endtime, setEndTime] = useState<any>();
  const [rune0, setRune0] = useState<number>();
  const [rune1, setRune1] = useState<number>();
  const [runeString0, setRuneString0] = useState<string>();
  const [runeString1, setRuneString1] = useState<string>();
  const [min, setMin] = useState<number>();
  const [sec, setSec] = useState<string>();
  const [queType, setQueType] = useState<string>();
  const { puuid } = userNameTag;

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
    if (data !== undefined) {
      if (data.info.queueId === 400) {
        setQueType(`일반`);
      } else if (data.info.queueId === 420) {
        setQueType(`솔로랭크`);
      } else if (data.info.queueId === 430) {
        setQueType(`일반`);
      } else if (data.info.queueId === 440) {
        setQueType(`자유랭크`);
      } else if (data.info.queueId === 450) {
        setQueType(`무작위 총력전`);
      } else if (data.info.queueId === 900) {
        setQueType(`URF`);
      } else {
        setQueType(`모드`);
      }
    }
  }, [data]);
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

      setSpelln0(myData?.summoner1Id);
      setSpelln1(myData?.summoner2Id);
      setRune0(myData?.perks.styles[0].selections[0].perk);
      setRune1(myData?.perks.styles[1].style);
      setMin(Math.floor(myData?.challenges.gameLength / 60));
      setSec(String(Math.round(myData?.challenges.gameLength % 60)).padStart(2, '0'));
    }
  }, [myData]);

  useEffect(() => {
    if (myData !== undefined) {
      console.log(myData);
    }
  }, [item0]);

  //스펠
  useEffect(() => {
    if (spelln0 !== undefined && spelln1 !== undefined) {
      if (spell !== undefined) {
        const spell00: any = Object.values(spell).find((spell00: any) => spell00?.key === `${spelln0}`);
        const spell01: any = Object.values(spell).find((spell01: any) => spell01?.key === `${spelln1}`);
        setSpell0(spell00?.id);
        setSpell1(spell01?.id);
      }
    }
  }, [spelln0, spelln1]);

  // 룬
  useEffect(() => {
    if (rune0 !== undefined && rune1 !== undefined) {
      if (runeAPI !== undefined) {
        const two: any = Math.floor(rune0 / 100) * 100;
        const runeS0: any = Object.values(runeAPI).find((runeS1: any) => runeS1?.id === two);

        if (runeS0 && runeS0.slots) {
          const runeS1: any = runeS0.slots
            .flatMap((slot: any) => slot.runes) // 각 slot 안의 runes 배열을 하나의 배열로 펼침
            .find((rune: any) => rune.id === rune0); // id가 rune0 룬을 찾음
          setRuneString0(runeS1.icon);
        }
        const runeS2: any = Object.values(runeAPI).find((runeS2: any) => runeS2?.id === rune1);
        setRuneString1(runeS2.icon);
      }
    }
  }, [rune0, rune1]);

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
      return `${months}개월 전`;
    } else if (days > 0) {
      return `${days}일 전`;
    } else if (hours > 0) {
      return `${hours}시간 전`;
    } else if (minutes > 0) {
      return `${minutes}분 전`;
    } else {
      return `${seconds}초 전`;
    }
  };

  return (
    <>
      <MatchDetailStyled>
        <div className="detailDiv" id={result ? 'win' : 'losses'}>
          <div className="winInfo">
            <p className="result">{result ? '승리' : '패배'}</p>
            <p>{queType}</p>
            <p>{`${min}분 ${sec}초`}</p>
            <p>{gameTime()}</p>
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
            <div className="d9">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/spell/${spell1}.png`} alt="" />
            </div>
            <div className="d10">
              <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/spell/${spell0}.png`} alt="" />
            </div>
            <div className="d11">
              <img src={`https://ddragon.leagueoflegends.com/cdn/img/${runeString0}`} alt="" />
            </div>
            <div className="d12">
              <img src={`https://ddragon.leagueoflegends.com/cdn/img/${runeString1}`} alt="" />
            </div>
            <p className="kd">{`${k} / ${d} / ${a}`} </p>
            <p className="kda">{`KDA ${(myData?.challenges.kda).toFixed(2)}`}</p>
          </div>
          <div className="lineInfo">
            <p>0.0인분 0등</p>
            <p>라인전 00 : 00</p>
            <p>분당 : 0.0 CS</p>
            <p>팀운 0</p>
            <p>MVP</p>
          </div>
          <div className="teamInfo">
            <div className="team1">
              {data.info.participants.slice(0, 5).map((x: any, i: number) => {
                return <TeamInfo data={x} key={i} />;
              })}
            </div>
            <div className="team2">
              {data.info.participants.slice(5, 10).map((x: any, i: number) => {
                return <TeamInfo data={x} key={i} />;
              })}
            </div>
          </div>
        </div>
      </MatchDetailStyled>
    </>
  );
};

export default MatchDetail;
