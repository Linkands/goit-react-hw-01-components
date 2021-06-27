import React from "react";
import {
  FriendsList,
  FriendName,
  FriendItem,
  FriendOnline,
  FriendOffline,
} from "./FriendsList.styles";
import friends from "../../data/friends.json";
import PropTypes from "prop-types";

function FriendList() {
  return (
    <FriendsList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id}>
          {isOnline ? <FriendOnline /> : <FriendOffline />}
          <img src={avatar} width="48px" alt={name} />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.node,
  id: PropTypes.number,
};

export default FriendList;
