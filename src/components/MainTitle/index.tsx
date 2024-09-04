import React from 'react';
import { Select } from 'antd';
import { MainTitleStyled } from './styled';

const { Option } = Select;

// props 타입 정의
interface MainTitleProps {
  selectedLine: string;
  setSelectedLine: (line: string) => void;
}

const MainTitle: React.FC<MainTitleProps> = ({ selectedLine, setSelectedLine }) => {
  // 라인 선택 시 호출되는 함수
  const handleChange = (value: string) => {
    setSelectedLine(value); // 상위 컴포넌트에서 전달받은 상태 업데이트
  };

  return (
    <MainTitleStyled>
      <div className="titleDiv">
        <h2>
          | 라인별 추천 챔피언 | 
          <Select defaultValue={selectedLine} style={{ width: 120 }} onChange={handleChange}>
            <Option value="탑">TOP</Option>
            <Option value="미드">MID</Option>
            <Option value="정글">JUNGLE</Option>
            <Option value="원딜">ADC</Option>
            <Option value="서폿">SUPPORT</Option>
          </Select>
        </h2>
      </div>
    </MainTitleStyled>
  );
};

export default MainTitle;
