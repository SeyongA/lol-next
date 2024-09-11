import { useEffect, useState } from 'react';
import { BottomDivStyled } from './styled';
import MatchDetail from '../MatchDetail';
import axios from 'axios';

interface DataProps {
  data?: any;
  champ?: object;
  userNameTag?: object;
}

const BottomDiv = ({ data, champ, userNameTag }: DataProps) => {
  const [spell, setSpell] = useState<any>();
  const [rune, setRune] = useState<any>();
  const getData = async () => {
    try {
      const getSpell = await axios({
        method: 'get',
        url: 'http://localhost:4000/spell',
      });
      setSpell(getSpell.data.getSpell.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getRune = async () => {
    try {
      const getRune = await axios({
        method: 'get',
        url: 'http://localhost:4000/rune',
      });
      setRune(getRune.data.getRune);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
    getRune();
  }, []);

  return (
    <>
      <BottomDivStyled>
        <div className="bottomDiv">
          <div className="kdaDiv"></div>
          <div className="matchDiv">
            {data?.map((x: any, i: number) => (
              <MatchDetail data={x} key={i} champ={champ} userNameTag={userNameTag} spell={spell} rune={rune}/>
            ))}
          </div>
        </div>
      </BottomDivStyled>
    </>
  );
};

export default BottomDiv;
