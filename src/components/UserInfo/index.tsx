import axios from 'axios';
import { useEffect, useState } from 'react';
import UserProfile from '../UserProfile';

interface DataProps {
  name: string | undefined;
}

const UserInfo = ({ name }: DataProps) => {
  const [playerName, setPlayerName] = useState<string>();
  const [playerTag, setPlayerTag] = useState<string>();
  const [userLev, setUserLev] = useState<object>()
  const [userNameTag, setUserNameTag] = useState<object>()
  useEffect(() => {
    if (name) {
      const [namePart, tagPart] = name.split(' - ');
      setPlayerName(namePart);
      setPlayerTag(tagPart);
    }
  }, []);
  
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(playerName);
        console.log(playerTag);
        const data = await axios({
          method: 'get',
          url: 'http://localhost:4000/past5Games',
          params: {
            playerName,
            playerTag,
          },
        });
        setUserLev(data.data.userLev)
        setUserNameTag(data.data.APUUID)
        console.log('=======================================', data); // 데이터 처리
      } catch (error) {
        console.error(error);
      }
    };

    if (playerName !== undefined && playerTag !== undefined) {
      getData();
    } else {
      return;
    }
  }, [playerName]); // name을 의존성 배열에 추가

  return (
    <>
      <UserProfile data={userLev} user={userNameTag}/>
    </>
  );
};

export default UserInfo;
