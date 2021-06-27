import React from "react";
import user from "../../data/user.json";
import {
  ProfileCard,
  ProfileDescription,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from "./Profile.styles";

function Profile() {
  return (
    <ProfileCard>
      <ProfileDescription>
        <img src={user.avatar} width="80px" alt={user.name} />
        <ProfileName>{user.name}</ProfileName>
        <ProfileTag>{user.tag}</ProfileTag>
        <ProfileLocation>{user.location}</ProfileLocation>
      </ProfileDescription>
      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{user.stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{user.stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{user.stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
}

export default Profile;
