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
    .catch((err) => err);
}

app.get('/past5Games', async (req, res) => {
  const { playerName, playerTag } = req.query;
  // 유저 정보 검색( PUUID 얻기 위함)
  const APUUID = await getPlayerPUUID(playerName, playerTag);
  const PUUID = APUUID.puuid;

  const API_CALL = `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids?api_key=${api_key}`;
  // 유저의 최근 20경기 ID 받는 코드
  const gameIDs = await axios
    .get(API_CALL)
    .then((response) => response.data)
    .catch((err) => err);
  const API_USER = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${PUUID}?api_key=${api_key}`;
  // 유저 정보 검색( 레벨, 프로필 아이콘 코드)
  const userLev = await axios
    .get(API_USER)
    .then((response) => response.data)
    .catch((err) => err);

  // 유저 티어 정보 (id)
  const userID = userLev.id;
  const API_TIER = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userID}?api_key=${api_key}`;
  const userTier = await axios
    .get(API_TIER)
    .then((res) => res.data)
    .catch((err) => err);

  const urlChamp = `https://ddragon.leagueoflegends.com/cdn/14.17.1/data/ko_KR/champion.json`;
  //챔피언 정보 받아오기
  const champion = await axios
    .get(urlChamp)
    .then((response) => response.data)
    .catch((err) => err);

  const urlMost = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${PUUID}?api_key=${api_key}`;
  const MostChampId = await axios
    .get(urlMost)
    .then((response) => response.data[0].championId)
    .catch((err) => err);

  res.json({ return: true, userLev, userTier, APUUID, champion, MostChampId });
});

app.listen(4000, function () {
  console.log('http://localhost:4000');
});
