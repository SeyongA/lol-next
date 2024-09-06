import { useEffect, useState } from 'react';
import { SoloStyled } from './styled';
import { rankImages } from '@/utill';

interface DataProps {
  data?: {
    leaguePoints?: number;
    losses?: number;
    wins?: number;
    tier?: string;
    rank?: string;
    queueType? : string;
  };
}
const Solo = ({ data }: DataProps) => {
  const [win, setWin] = useState<number>(0);
  const [losses, setLosses] = useState<number>(0);
  const [rankImageSrc, setRankImageSrc] = useState<string>('');

  useEffect(() => {
    if (data?.wins !== undefined) {
      setWin(data.wins);
    }
    if (data?.losses !== undefined) {
      setLosses(data.losses);
    }
  }, [data]);

  useEffect(() => {
    if (data?.tier) {
      const rank = rankImages.find((item) => item.tier === data.tier);
      // console.log(rank);
      
      if (rank) {
        setRankImageSrc(rank.src.src); 
      }
    }
  }, [data?.tier]);

  
  return (
    <>
      <SoloStyled>
        <div className="content">
          <p className="title">{data?.queueType ==='RANKED_SOLO_5x5' ? '개인/2인 랭크 게임' : "자유 랭크 게임"}</p>
          <div className="mainContent">
            <div className="imgDiv">
              <img src={rankImageSrc} />
            </div>
            <p className="tier">
              {data?.tier}{' '}
              {data?.tier === 'CHALLENGER' || data?.tier === 'GRANDMASTER' || data?.tier === 'MASTER' ? '' : data?.rank}
            </p>
            <p className="point">{data?.leaguePoints}LP</p>
            <p className="win">
              {data?.wins}승 {data?.losses}패
            </p>
            <p className='winP'>승률 {((win / (win + losses)) * 100).toFixed(0)}%</p>
          </div>
        </div>
      </SoloStyled>
    </>
  );
};

export default Solo;
