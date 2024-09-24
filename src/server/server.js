const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

const api_key = 'RGAPI-93139d5d-15fe-47cb-b2f9-b3cffff45578';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
      return res.status(500).json({ result: false, message: 'Error fetching data' });
    });
}

function getPlayerMatchInfo(PUUID, start, end) {
  return axios
    .get(
      `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids?start=${start}&count=${end}&api_key=${api_key}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(`Error fetching PUUID: ${err}`);
      return res.status(500).json({ result: false, message: 'Error fetching data' });
    });
}

function fetchGameData(gameID) {
  try {
    return axios
      .get(`https://asia.api.riotgames.com/lol/match/v5/matches/${gameID}?api_key=${api_key}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(`error: ${err}`);
        return res.status(500).json({ result: false, message: 'Error fetching data' });
      });
  } catch (error) {
    console.error(`Error fetching data for game ID: ${gameID}`, error);
    return res.status(500).json({ result: false, message: 'Error fetching data' });
  }
}

//챔피언 정보
function getChamp() {
  try {
    return axios
      .get(`https://ddragon.leagueoflegends.com/cdn/14.17.1/data/ko_KR/champion.json`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(`error: ${err}`);
        return res.status(500).json({ result: false, message: 'Error fetching data' });
      });
  } catch (error) {
    console.error(`Error : ${error}`);
    return res.status(500).json({ result: false, message: 'Error fetching data' });
  }
}

//매치20경기 KDA, 경기수 표시 win / losse 표시
app.get('/match20info', async (req, res) => {
  // 한번에 20경기가 아니라 1경기씩 20개를 호출? (이게 더빠른가?)
  try {
    const { playerName, playerTag } = req.query;

    // 유저 정보 검색 (PUUID 얻기 위함)
    const APUUID = await getPlayerPUUID(playerName, playerTag);
    const PUUID = APUUID.puuid;

    const gameIDs = await getPlayerMatchInfo(PUUID, 0, 10);
    if (!gameIDs) {
      return res.status(404).json({ error: 'MATCH not found' });
    }

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
    const champion = await getChamp();

    res.json({ result: true, PUUID, validGameData, champion });
  } catch (error) {
    console.error(`error: ${error}`);
    return res.status(500).json({ result: false, message: 'Error fetching data' });
  }
});

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

    const gameIDs = await getPlayerMatchInfo(PUUID, 0, 10);
    if (!gameIDs) {
      return res.status(404).json({ error: 'MATCH not found' });
    }

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
        return res.status(500).json({ result: false, message: 'Error fetching data' });
      });

    // 유저 티어 정보 (id)
    const userID = userLev?.id;
    const API_TIER = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userID}?api_key=${api_key}`;
    const userTier = await axios
      .get(API_TIER)
      .then((res) => res.data)
      .catch((err) => {
        console.error(`Error fetching user tier: ${err}`);
        return res.status(500).json({ result: false, message: 'Error fetching data' });
      });

    // 챔피언 정보 받아오기
    const champion = await getChamp();

    // 가장 많이 플레이한 챔피언 ID
    const urlMost = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${PUUID}?api_key=${api_key}`;
    const MostChampId = await axios
      .get(urlMost)
      .then((response) => response.data[0]?.championId)
      .catch((err) => {
        console.error(`Error fetching most played champion: ${err}`);
        return res.status(500).json({ result: false, message: 'Error fetching data' });
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

app.get('/spell', async (req, res) => {
  try {
    const API_SPELL = `https://ddragon.leagueoflegends.com/cdn/14.17.1/data/en_US/summoner.json?api_key=${api_key}`;
    const getSpell = await axios
      .get(API_SPELL)
      .then((res) => res.data)
      .catch((err) => {
        console.error(`Error fetching user tier: ${err}`);
        return res.status(500).json({ result: false, message: 'Error fetching data' });
      });

    res.json({ result: true, getSpell });
  } catch (error) {
    console.error(`Error`);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/rune', async (req, res) => {
  try {
    const API_RUNE = `https://ddragon.leagueoflegends.com/cdn/14.17.1/data/ko_KR/runesReforged.json`;
    const getRune = await axios
      .get(API_RUNE)
      .then((res) => res.data)
      .catch((err) => {
        console.error(`Error fetching user tier: ${err}`);
        return res.status(500).json({ result: false, message: 'Error fetching data' });
      });

    res.json({ result: true, getRune });
  } catch (error) {
    console.error(`Error`);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 소환사 ID로부터 이름과 기타 정보를 가져오는 API 호출 함수
async function getNameFunc(id) {
  try {
    const response = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/${id}?api_key=${api_key}`);
    return response.data;
  } catch (err) {
    console.error(`error for id ${id}: ${err}`);
    return null; // 오류 발생 시 null 반환
  }
}
// PUUID로부터 소환사의 상세 정보를 가져오는 함수
async function getName(PUUID) {
  try {
    const response = await axios.get(
      `https://asia.api.riotgames.com/riot/account/v1/accounts/by-puuid/${PUUID}?api_key=${api_key}`
    );
    return response.data;
  } catch (err) {
    console.error(`error for PUUID ${PUUID}: ${err}`);
    return res.status(500).json({ result: false, message: 'Error fetching data' }); // 오류 발생 시 null 반환
  }
}

const ChallengerRankData = async () => {
  try {
    const challengerRank = await axios.get(
      `https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${api_key}`
    );
    return challengerRank.data.entries;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return res.status(500).json({ result: false, message: 'Error fetching data' });
  }
};

app.get('/userRank', async (req, res) => {
  try {
    const [challengerData] = await Promise.all([ChallengerRankData()]);
    const summonerIds = challengerData.map((player) => player);

    res.json({ result: true, data: summonerIds });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      result: false,
      message: '데이터를 가져오는 중 오류가 발생했습니다.',
    });
  }
});

app.get('/top100', async (req, res) => {
  try {
    const { data } = req.query;
    console.log(data);

    await delay(50); // 각 요청에 50ms 딜레이 적용
    const puuid = await getNameFunc(data);

    if (!puuid) {
      return res.status(500).json({ result: false, message: 'Error fetching PUUID' });
    }

    console.log(puuid);
    res.json({ result: true, data: puuid });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      result: false,
      message: '데이터를 가져오는 중 오류가 발생했습니다.',
    });
  }
});



app.listen(4000, function () {
  console.log('Server is running on http://localhost:4000');
});
