import axios from 'axios';
import { useEffect, useState } from 'react';
import UserProfile from '../UserProfile';
import BkDiv from '../BkDiv';
import Search from '../Search';
import MidDiv from '../MidDiv';
import { UserInfoStyled } from './styled';
import { useRouter } from 'next/router';
import BottomDiv from '../BottomDiv';

interface DataProps {
  name: string | undefined;
}

const UserInfo = ({ name }: DataProps) => {
  const [playerName, setPlayerName] = useState<string>();
  const [playerTag, setPlayerTag] = useState<string>();
  const [userLev, setUserLev] = useState<object>();
  const [userNameTag, setUserNameTag] = useState<object>();
  const [champ, setChamp] = useState<object>();
  const [most, setMost] = useState<string>();
  const [mostA, setMostA] = useState<string>();
  const [tier, setTier] = useState<object>();
  const [matchData, setMatchData] = useState<object>();

  const router = useRouter();
  const getData = async () => {
    try {
      const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/past5Games',
        params: {
          playerName,
          playerTag,
        },
      });
      setUserLev(data.data.userLev);
      setUserNameTag(data.data.APUUID);
      setMost(data.data.MostChampId);
      setChamp(data.data.champion.data);
      setTier(data.data.userTier);
      setMatchData(data.data.validGameData);
      console.log('=======================================', data); // 데이터 처리
    } catch (error) {
      console.error(error);
      router.push('/404');
    }
  };

  useEffect(() => {
    if (champ !== undefined) {
      if (most !== undefined) {
        const champion = Object.values(champ).find((champion) => champion.key === `${most}`);
        setMostA(champion?.id);
      }
    }
  }, [champ, most]);

  useEffect(() => {
    const savedName = localStorage.getItem('playerName');
    const savedTag = localStorage.getItem('playerTag');

    if (name) {
      const [namePart, tagPart] = name.split(' - ');
      setPlayerName(namePart);
      setPlayerTag(tagPart);
      localStorage.setItem('playerName', namePart);
      localStorage.setItem('playerTag', tagPart);
    } else {
      if (!savedName || !savedTag) {
        if (playerName !== undefined && playerTag !== undefined) {
          getData();
        }
      } else {
        setPlayerName(savedName);
        setPlayerTag(savedTag);
      }
    }
  }, []);

  useEffect(() => {
    if (playerName !== undefined && playerTag !== undefined) {
      getData();
    } else {
      return;
    }
  }, [name, playerName, playerTag]);

  return (
    <>
      <UserInfoStyled>
        <BkDiv data={mostA} />
        <div className="titleBox">
          <Search />
          <UserProfile data={userLev} user={userNameTag} />
        </div>
      </UserInfoStyled>
      <MidDiv data={tier} />
      <BottomDiv data={matchData} champ={champ} userNameTag={userNameTag}/>
    </>
  );
};

export default UserInfo;
