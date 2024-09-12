import { useEffect, useState } from 'react';
import { BkDivStyled } from './styled';

interface DataProps {
  data: any;
}

const BkDiv = ({ data }: DataProps) => {
  const [most, setMost] = useState<string>();

  useEffect(() => {
    setMost(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data}_1.jpg`);
  }, [data]);
  return (
    <>
      <BkDivStyled>
        <div className='fullBox'>
          <div className="bg-crop">
            <img src={most} alt="" className="bg-img" />
          </div>
        </div>
      </BkDivStyled>
    </>
  );
};

export default BkDiv;
