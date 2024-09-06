const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

const api_key = 'RGAPI-93139d5d-15fe-47cb-b2f9-b3cffff45578';

function getPlayerPUUID(playerName, playerTag) {
  return axios
    .get(
      `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${playerName}/${playerTag}?api_key=${api_key}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(`Error fetching PUUID: ${err}`);
      return null;
    });
}

app.get('/past5Games', async (req, res) => {
  try {
    const { playerName, playerTag } = req.query;

    // 유저 정보 검색 (PUUID 얻기 위함)
    const APUUID = await getPlayerPUUID(playerName, playerTag);
    if (!APUUID || !APUUID.puuid) {
      return res.status(404).json({ error: 'Player not found' });
    }
    const PUUID = APUUID.puuid;

    // 유저의 최근 20경기 ID 받는 코드
    const API_CALL = `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids?start=0&count=5&api_key=${api_key}`;
    
    const gameIDs = await axios
      .get(API_CALL)
      .then((response) => response.data)
      .catch((err) => {
        console.error(`Error fetching game IDs: ${err}`);
        return [];
      });

    // 게임 데이터 요청 함수
    const fetchGameData = async (gameID) => {
      try {
        const response = await axios.get(
          `https://asia.api.riotgames.com/lol/match/v5/matches/${gameID}?api_key=${api_key}`
        );
        return response.data;
      } catch (error) {
        console.error(`Error fetching data for game ID: ${gameID}`, error);
        return null;
      }
    };

    // 모든 게임 데이터 요청

    const fetchAllGameData = async () => {
      const allGameData = [];

      for (const gameID of gameIDs) {
        const data = await fetchGameData(gameID);
        allGameData.push(data);
      }

      return allGameData;
    };

    // 게임 데이터를 비동기적으로 가져옴
    const validGameData = await fetchAllGameData();

    // 유저 정보 검색 (레벨, 프로필 아이콘 코드)
    const API_USER = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${PUUID}?api_key=${api_key}`;
    const userLev = await axios
      .get(API_USER)
      .then((response) => response.data)
      .catch((err) => {
        console.error(`Error fetching user level: ${err}`);
        return null;
      });

    // 유저 티어 정보 (id)
    const userID = userLev?.id;
    const API_TIER = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userID}?api_key=${api_key}`;
    const userTier = await axios
      .get(API_TIER)
      .then((res) => res.data)
      .catch((err) => {
        console.error(`Error fetching user tier: ${err}`);
        return null;
      });

    // 챔피언 정보 받아오기
    const urlChamp = `https://ddragon.leagueoflegends.com/cdn/14.17.1/data/ko_KR/champion.json`;
    const champion = await axios
      .get(urlChamp)
      .then((response) => response.data)
      .catch((err) => {
        console.error(`Error fetching champion data: ${err}`);
        return null;
      });

    // 가장 많이 플레이한 챔피언 ID
    const urlMost = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${PUUID}?api_key=${api_key}`;
    const MostChampId = await axios
      .get(urlMost)
      .then((response) => response.data[0]?.championId)
      .catch((err) => {
        console.error(`Error fetching most played champion: ${err}`);
        return null;
      });

    // 모든 데이터를 클라이언트로 반환
    res.json({
      return: true,
      userLev,
      userTier,
      APUUID,
      champion,
      MostChampId,
      gameIDs,
      validGameData,
    });
  } catch (error) {
    console.error(`Error in /past5Games: ${error}`);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(4000, function () {
  console.log('Server is running on http://localhost:4000');
});
