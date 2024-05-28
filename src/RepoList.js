import React from "react";
import PropTypes from "prop-types";

function RepoList({ repos }) {
  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RepoList;
