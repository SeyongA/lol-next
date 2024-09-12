import { useEffect, useState } from 'react';
import { BottomDivStyled } from './styled';
import MatchDetail from '../MatchDetail';

interface DataProps {
  data?: any;
  champ?:object;
  userNameTag?:object;
}
const BottomDiv = ({ data, champ, userNameTag}: DataProps) => {
  return (
    <>
      <BottomDivStyled>
        <div className="bottomDiv">
          <div className="kdaDiv"></div>
          <div className="matchDiv">
            {data?.map((x: any, i: number) => (
              <MatchDetail data={x} key={i} champ={champ} userNameTag={userNameTag}/>
            ))}
          </div>
        </div>
      </BottomDivStyled>
    </>
  );
};

export default BottomDiv;
