import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
  font-size: 9px;
  height: 75px;
  width: 200px;
  border: solid 1px black;
  margin-top: 16px;
  position: relative;
  padding: 0;
`;
export const StatisticsUpload = styled.h2``;
export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
`;
export const StatisticsItem = styled.li`
  display: flex;
  color: #fff;
  width: 40px;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const StatisticsLabel = styled.span``;
export const StatisticsPercentage = styled.span`
  font-size: 12px;
`;
