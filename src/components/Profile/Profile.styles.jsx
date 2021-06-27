import styled from "@emotion/styled";

export const ProfileCard = styled.div`
  width: 150px;
  border: 1px solid black;
  padding: 0px;
`;

export const ProfileDescription = styled.div``;

export const ProfileName = styled.p`
  margin: 0px;
`;

export const ProfileTag = styled.p`
  margin: 5px;
  font-size: 10px;
`;

export const ProfileLocation = styled.p`
  margin: 5px;
  font-size: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0;
  margin-bottom: 0px;
  margin-top: 5px;
  justify-content: space-evenly;
`;

export const StatsItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: #e9e9e9;
  width: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const StatsLabel = styled.span`
  font-size: 7px;
`;

export const StatsQuantity = styled.span`
  font-size: 12px;
`;
