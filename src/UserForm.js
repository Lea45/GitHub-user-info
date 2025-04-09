import React from "react";
import PropTypes from "prop-types";

function UserForm({ username, onInputChange, onSubmit }) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-xl shadow-md">
      <input
        type="text"
        value={username}
        onChange={onInputChange}
        placeholder="Enter GitHub username"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
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