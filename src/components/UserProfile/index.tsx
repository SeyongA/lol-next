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
      <div style={{ marginTop: 100 }}>
        {/* <div style={{width:120, height:120, backgroundImage : `https://ddragon.leagueoflegends.com/cdn/14.17.1/img/profileicon/${data?.profileIconId}.png`}}></div> */}
        <div>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/profileicon/${data?.profileIconId}.png`}
            alt="profileImg"
            style={{width : 120}}
          />
          <p>{data?.summonerLevel}</p>
        </div>
        <p>
          {user?.gameName} # {user?.tagLine}
        </p>
      </div>
    </>
  );
};

export default UserProfile;
