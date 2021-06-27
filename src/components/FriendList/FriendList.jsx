import React from "react";
import {
  FriendsList,
  FriendName,
  FriendItem,
  FriendOnline,
  FriendOffline,
} from "./FriendsList.styles";
import friends from "../../data/friends.json";

function FriendList() {
  return (
    <FriendsList>
      {friends.map((friend) => (
        <FriendItem key={friend.id}>
          {friend.isOnline ? <FriendOnline /> : <FriendOffline />}
          <img src={friend.avatar} width="48px" alt={friend.name} />
          <FriendName>{friend.name}</FriendName>
        </FriendItem>
      ))}
    </FriendsList>
  );
}
export default FriendList;
