import React from "react";
import PropTypes from "prop-types";

function UserInfo({ userData, repos, onReset }) {
  return (
    <div className="user-card">
      {/* GORNJI DIO: korisnik info */}
      <div className="user-info">
      <img
  src={userData.avatar_url}
  alt={`${userData.name}'s avatar`}
  className="avatar"
/>

        <h2>{userData.name || "Unknown User"}</h2>
        <p><span>📍</span> {userData.location || "No location"}</p>
        {userData.bio && <p className="bio">“{userData.bio}”</p>}
        <button className="reset" onClick={onReset}>Reset</button>
      </div>

      {/* DONJI DIO: repozitoriji - SVE je i dalje unutar user-card */}
      <div className="repos">
        <h3>📦 Repositories</h3>
        <div className="repo-list">
          {(repos && repos.length > 0) ? (
            repos.map((repo) => (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card"
                key={repo.id}
              >
                <h4>{repo.name}</h4>
                {repo.description && <p>{repo.description}</p>}
              </a>
            ))
          ) : (
            <p style={{ color: "#aaa", fontStyle: "italic" }}>No repositories found.</p>
          )}
        </div>
      </div>
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
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  onReset: PropTypes.func.isRequired,
};

export default UserInfo;
