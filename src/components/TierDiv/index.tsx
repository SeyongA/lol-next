import { TierDivStyled } from './styled';
import Solo from '../Solo';

interface DataProps {
  solo?: any;
  flex?: any;
}
const TierDiv = ({ solo, flex }: DataProps) => {
  return (
    <>
      <TierDivStyled>
        <div className="main1">
          <div className="SoloDiv">
            <Solo data={solo} />
          </div>
          <div className="FlexDiv">
            <Solo data={flex} />
          </div>
        </div>
      </TierDivStyled>
    </>
  );
};

export default TierDiv;
