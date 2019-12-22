import React, { Component } from 'react';
import './style.scss';

export class Profile extends Component {
  render() {
    const { avatar_url, bio, login, name, company, blog, location, email} = this.props.user;
    const myemail = "kdashivantha@gmail.com";
    const linkedin = "https://www.linkedin.com/in/amith-shivantha-b1661ab/";

    return (
      <div id="card-user">
        <div className="header"></div>
        <div className="avatar">
          {avatar_url &&
            <img id="UserAvatar" src={avatar_url} alt={name} />
          }
        </div>
        <div className="text">
          <h3 rel="name">{name}</h3>
          { company && <p rel="company">{company}</p> }
          { bio && <p rel="bio">{bio}</p> }
        </div>
        <div className="user-details-list">
          <div className="user-details-list-item" data-user-name>
            <i className="octicon icon-mark-github"></i>
            <a className="user-details-list-item-content" rel="username" href={`https://github.com/${login}`}>
              @{login}
            </a>
          </div>
          { myemail && 
            <div className="user-details-list-item" data-user-email>
              <i className="octicon icon-mail"></i>
              <a className="user-details-list-item-content" href={`mailto:${myemail}`}>
                {myemail}
              </a>
            </div>
          }
          { linkedin &&
            <div className="user-details-list-item" data-user-linkedin>
              <i className="octicon icon-mortar-board"></i>
              <a className="user-details-list-item-content" rel="username" href={linkedin}>
              linkedin.com/amith-shivantha
              </a>
            </div>
          }
          { location &&
            <div className="user-details-list-item" data-user-location>
              <i className="octicon icon-location"></i>
              <span className="user-details-list-item-content">{location}</span>
            </div>
          }
        </div>
      </div>
    );
  }
}