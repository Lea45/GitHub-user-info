import React from "react";
import PropTypes from "prop-types";

function UserInfo({ userData, onReset }) {
  return (
    <div>
      <h2>User Details</h2>
      <img
        src={userData.avatar_url}
        alt={`${userData.name}'s avatar`}
        width="150"
        height="150"
      />
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Location:</strong> {userData.location}
      </p>
      <p>
        <strong>Bio:</strong> {userData.bio}
      </p>
      <button className="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

UserInfo.propTypes = {
  userData: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserInfo;
