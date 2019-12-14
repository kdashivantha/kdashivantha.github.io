import React, { Component } from 'react';
import { Profile } from "../components/Profile";
import { Description } from "../components/Description";
import { Repository } from "../components/Repository";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      profileDetails: {},
      userName: null,
      repos: null
    };
  }

  componentDidMount() {
    let userName = 'kdashivantha';//window.location.host.split(".")[0];
    this.getUserDetails(userName);
    this.getUserRepo(userName);

  }

  getUserDetails(userName) {
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            profileDetails: result,
            userName
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            userName,
            error
          });
        }
      );
  }
  
  getUserRepo(userName) {
    fetch(`https://api.github.com/users/${userName}/repos?per_page=100&sort=interactions-desc`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            repos: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <div className="container">
        {this.state.profileDetails &&
        <aside className="aside-bio">
          <Profile user={this.state.profileDetails}></Profile>
        </aside>
        }
        { this.state.repos &&
          <main className="main-details">
            <Description></Description>
            <Repository repos={this.state.repos}></Repository>
          </main>
        }
      </div>
    );
  }
}

export default App;
