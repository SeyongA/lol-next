import { MatchDetailStyled } from './styled';

interface DataProps {
  data?: any;
}

const MatchDetail = ({ data }: DataProps) => {
  return (
    <>
      <MatchDetailStyled>
        <div className="detailDiv">
          <div className="winInfo">
            <p>승리</p>
            <p>솔랭 : 22:22</p>
            <p>5일 전</p>
            <div className="lpInfo">
              <p>↑ 21LP</p>
            </div>
          </div>
          <div className="champInfo">
            <div className="d1"></div>
            <div className="d2"></div>
            <div className="d3"></div>
            <div className="d4"></div>
            <div className="d5"></div>
            <div className="d6"></div>
            <div className="d7"></div>
            <div className="d8"></div>
            <div className="d9"></div>
            <div className="d10"></div>
            <div className="d11"></div>
            <div className="d12"></div>
            <p className="kd">7 / 1 / 8 </p>
            <p className="kda">15.0 KDA</p>
          </div>
          <div className="lineInfo">
            <p>1.9인분 1등</p>
            <p>라인전 55 : 45</p>
            <p>분당 : 8.2 CS</p>
            <p>팀운 보통</p>
            <p>MVP</p>
          </div>
          <div className="teamInfo">
            <div className="team1">
              <div>
                <img src={``} alt="" />
                <p>JustLikeThatKRAAAA</p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
            </div>
            <div className="team2">
              <div>
                <img src={``} alt="" />
                <p>JustLikeThatKssdadsadasdsadadRAAAA</p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
              <div>
                <img src={``} alt="" />
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </MatchDetailStyled>
    </>
  );
};

export default MatchDetail;
