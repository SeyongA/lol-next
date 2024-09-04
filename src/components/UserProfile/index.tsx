import { UserProfileStyled } from './styled';

interface DataProps {
  data?: {
    profileIconId?: number;
    summonerLevel?: number;
  };
  user?: {
    gameName?: string;
    tagLine?: string;
  };
}

const UserProfile = ({ data, user }: DataProps) => {
  return (
    <>
      <UserProfileStyled>
        <div className="profileDiv">
          {/* <div style={{width:120, height:120, backgroundImage : `https://ddragon.leagueoflegends.com/cdn/14.17.1/img/profileicon/${data?.profileIconId}.png`}}></div> */}
          <div className='imgDiv'>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/profileicon/${data?.profileIconId}.png`}
              alt="profileImg"
              className='img'
            />
            <div className='levelDiv'>
              <p>{data?.summonerLevel}</p>
            </div>
          </div>
          <div className='gameName'>
            <span>{user?.gameName}</span> #{user?.tagLine}
          </div>
        </div>
      </UserProfileStyled>
    </>
  );
};

export default UserProfile;
