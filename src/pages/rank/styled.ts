import styled from 'styled-components';

export const RankListContainer = styled.div`
  background-color: white;
  z-index: 9999;
  width: 100vw;
  margin: 100px auto;
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  justify-content: center;
  border-radius: 30px;
  margin: 30px auto;
`;

export const HeaderRow = styled.tr`
  background-color: #D1DBFF;
  text-align: center;
`;

export const BodyRow = styled.tr`
  border-bottom: 1px solid #ddd;
  text-align: center;

  td {
    padding: 10px;
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  background-color: #D1DBFF;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  &.active {
    background-color: #4CAF50;
  }
`;
