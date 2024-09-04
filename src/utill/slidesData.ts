
// 각 슬라이드의 데이터 구조를 위한 타입 정의
export interface SlideData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  winRate: string;     // 승률
  pickRate: string;    // 픽률
  banRate: string;     // 밴률
  points: string;      // 주요 변경 사항 또는 주목해야 할 포인트
}

// 슬라이드 데이터 배열
const slidesData: SlideData[] = [
  {
    id: 1,
    title: '아리 (미드)',
    description: '14.17 패치 승률 52.3%, 픽률 8.1%, 밴률 2.2%',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg',
    winRate: '52.3%',   // 승률
    pickRate: '8.1%',   // 픽률
    banRate: '2.2%',    // 밴률
    points: 'W - 여우불: 피해량 50 → 55, E - 매혹: 쿨다운 12초 → 10초',  // 주요 변경 사항
  },
  {
    id: 2,
    title: '애쉬 (원딜)',
    description: '14.17 패치 승률 49.7%, 픽률 12.5%, 밴률 3.1%',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg',
    winRate: '49.7%',  
    pickRate: '12.5%', 
    banRate: '3.1%',
    points: 'R - 마법의 수정화살: 쿨다운 100초 → 80초, W - 일제 사격: 폭 20% 감소',
  },
  {
    id: 3,
    title: '가렌 (탑)',
    description: '14.17 패치 승률 50.2%, 픽률 7.8%, 밴률 0.5%',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_0.jpg',
    winRate: '50.2%',  
    pickRate: '7.8%',  
    banRate: '0.5%',
    points: 'Q - 결정타: 추가 피해량 10% 증가, E - 심판: 방어력 30% 증가',
  },
  {
    id: 4,
    title: '카타리나 (미드)',
    description: '14.17 패치 승률 48.9%, 픽률 5.5%, 밴률 6.8%',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Katarina_7.jpg',
    winRate: '48.9%',  
    pickRate: '5.5%',  
    banRate: '6.8%',
    points: 'R - 죽음의 연꽃: 추가 공격력 비례 피해량 증가',
  },
  {
    id: 5,
    title: '킨드레드 (정글)',
    description: '14.17 패치 승률 49.0%, 픽률 3.7%, 밴률 1.6%',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kindred_3.jpg',
    winRate: '49.0%',  
    pickRate: '3.7%',  
    banRate: '1.6%',
    points: 'Q - 화살 세례: 공격 속도 30% 증가, E - 차오르는 공포: 피해량 10% 증가',
  },
];

export default slidesData;
