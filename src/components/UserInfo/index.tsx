import axios from 'axios';
import { useEffect, useState } from 'react';
import UserProfile from '../UserProfile';
import BkDiv from '../BkDiv';
import Search from '../Search';

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
      console.log('=======================================', data); // 데이터 처리
    } catch (error) {
      console.error(error);
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
  }, [playerName, playerTag]);

  return (
    <>
      <BkDiv data={mostA} />
      <Search />
      <UserProfile data={userLev} user={userNameTag} />
    </>
  );
};

export default UserInfo;
