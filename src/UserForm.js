import React from "react";
import PropTypes from "prop-types";

function UserForm({ username, onInputChange, onSubmit }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={username}
        onChange={onInputChange}
        placeholder="Enter GitHub username"
      />
      <button type="submit" onClick={onSubmit}>
        Get User Info
      </button>
    </div>
  );
}

UserForm.propTypes = {
  username: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
