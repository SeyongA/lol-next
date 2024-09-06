import { useEffect, useState } from 'react';
import MatchInfo from '../MatchInfo';
import TierDiv from '../TierDiv';
import { MidDivStyled } from './styled';

interface DataProps {
  data?: {
    0?: object;
    1?: object;
  };
}
const MidDiv = ({ data }: DataProps) => {
  const [rankedSolo, setRankedSolo] = useState(null);
  const [rankedFlex, setRankedFlex] = useState(null);

  useEffect(() => {
    if (Array.isArray(data)) {
      const foundRankedSolo = data.find((item) => item.queueType === 'RANKED_SOLO_5x5');
      const foundRankedFive = data.find((item) => item.queueType === "RANKED_FLEX_SR");
      setRankedSolo(foundRankedSolo);
      setRankedFlex(foundRankedFive);
    }
  }, [data]);
  
  return (
    <>
      <MidDivStyled>
        <div className="content1">
          <TierDiv solo={rankedSolo} flex={rankedFlex} />
          <MatchInfo />
        </div>
      </MidDivStyled>
    </>
  );
};

export default MidDiv;
