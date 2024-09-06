import { useEffect, useState } from 'react';
import { BottomDivStyled } from './styled';
import MatchDetail from '../MatchDetail';

interface DataProps {
  data?: any;
}
const BottomDiv = ({ data }: DataProps) => {
  useEffect(() => {
    if (data !== undefined) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <BottomDivStyled>
        <div className="bottomDiv">
          <div className="kdaDiv"></div>
          <div className="matchDiv">
            {data?.map((x: any, i: number) => (
              <MatchDetail data={x} key={i} />
            ))}
          </div>
        </div>
      </BottomDivStyled>
    </>
  );
};

export default BottomDiv;
