import { useRouter } from 'next/router';
import { MatchInfoStyled } from './styled';
import { use, useEffect, useState } from 'react';
import axios from 'axios';

const MatchInfo = () => {
  const [gameName, setGameName] = useState<string>();
  const [tagLine, setTagLine] = useState<string>();
  const [allData, setAllData] = useState<any>();
  const [myData, setMyData] = useState<any>();
  const [champ, setChamp] = useState<any>();
  const [puuid, setPuuid] = useState<any>();

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
      setChamp(data.data.champion);
      setPuuid(data.data.PUUID);
      console.log(data, '12321321313213=');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (allData && puuid) {
      const allParticipants: any = [];

      // 각 게임의 participants 데이터를 수집
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
            }); // 참가자 정보를 배열에 추가
          }
        }
      });

      // 참가자 데이터를 상태로 저장
      if (allParticipants.length > 0) {
        setMyData(allParticipants); // 20 게임의 참가자 데이터를 상태로 저장
      } else {
        console.log('해당 puuid와 일치하는 참가자를 찾지 못했습니다.');
      }
    }
  }, [allData, puuid]);

  useEffect(() => {
    if (myData !== undefined) {
      console.log(myData, 'MyData');
    }
  }, [myData]);

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

  return (
    <>
      <MatchInfoStyled>
        <div className="main">
        </div>
      </MatchInfoStyled>
    </>
  );
};

export default MatchInfo;
