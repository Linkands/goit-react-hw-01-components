import styled from "@emotion/styled";

// <li className="item">
//   <span className="status"></span>
//   <img className="avatar" src="" alt="" width="48" />
//   <p className="name"></p>
// </li>

export const FriendsList = styled.ul`
  padding: 0px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #dbdbdb;
  border: solid 1px black;
  width: 200px;
  padding: 5px;
  margin: 5px;
  border-radius: 25px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  color: teal;
`;

export const FriendOnline = styled.span`
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 25px;
`;
export const FriendOffline = styled.span`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 25px;
`;

export const FriendAvatar = styled.img`
  width: 48px;
`;

export const FriendName = styled.p`
  color: black;
`;
