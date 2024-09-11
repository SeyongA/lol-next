import { useRouter } from "next/router";

interface DataProps {
  data: any;
}

const TeamInfo = ({ data }: DataProps) => {
  const router = useRouter();

  return (
    <>
      <div>
        <img src={`https://ddragon.leagueoflegends.com/cdn/14.17.1/img/champion/${data.championName}.png`} alt="" />
        <p onClick={()=>{
          router.push(`/search/${data.riotIdGameName} - ${data.riotIdTagline}`);
        }}>{data.riotIdGameName}</p>``
      </div>
    </>
  );
};

export default TeamInfo;
