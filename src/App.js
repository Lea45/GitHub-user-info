import React, { Component } from "react";
import "./App.css";
import UserForm from "./UserForm";
import UserInfo from "./UserInfo";
import RepoList from "./RepoList";

class App extends Component {
  state = {
    username: "",
    userData: null,
    repos: [],
    error: "",
  };

  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username } = this.state;
    this.setState({ error: "", userData: null, repos: [] });

    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!userResponse.ok) {
        throw new Error("User not found");
      }

      const userData = await userResponse.json();
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();
      this.setState({ userData, repos: reposData });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleReset = () => {
    this.setState({ username: "", userData: null, repos: [], error: "" });
  };

  render() {
    const { username, userData, repos, error } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Info</h1>
          <div className="form-container">
            <UserForm
              username={username}
              onInputChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
            />
            {error && <p className="error">{error}</p>}
            {userData && (
              <UserInfo userData={userData} onReset={this.handleReset} />
            )}
            {repos.length > 0 && <RepoList repos={repos} />}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
