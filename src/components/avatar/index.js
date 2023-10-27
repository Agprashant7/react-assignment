import React from "react";

const Avatar = ({ profileLink }) => {
  return (
    <img
      src={profileLink}
      style={{ borderRadius: "50%" }}
      height={32}
      alt="profile"
    />
  );
};
export default Avatar;
