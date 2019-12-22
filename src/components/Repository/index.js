import React, { Component } from 'react';
import { Image } from "../Image";
import './style.scss';

export class Repository extends Component {

  descriptionWithoutTags(description) {
    return description.replace(/\[(.*?)\]/g,"");
  }
  descriptionExtractTags(description) {
    let tags = description.match(/\[(.*?)\]/g);
    return (tags != null)? tags[0].replace(/\[|\]/g,'').split(','): [];
  }
  render() {
    const repos = this.props.repos;
    return (
      <div className="repo-flex-container">
        {
          repos.map((repo, key) => (
            (!repo.fork && repo.description && repo.description.includes("..")) &&
              <div className="repo-component" key={key}>
                <div className="repo-component-head">
                  <h1 className="repo-component-title">
                    <a className="repo-component--repolink" href={repo.html_url}>
                        <i className="octicon icon-repo"></i>
                        {repo.full_name}
                    </a>
                  </h1>
                </div>
                <div className="repo-component-detail">
                  { this.descriptionWithoutTags(repo.description) }
                  <div className="repo-component-tags">
                  {
                    this.descriptionExtractTags(repo.description).map(tag => ( 
                      <div className="repo-component__tag">{tag}</div>
                    ))
                  }
                  </div>
                  <div className="gif-image">
                  {(repo.name && repo.description.includes("...")) &&
                      <Image src={`https://raw.githubusercontent.com/kdashivantha/${repo.name}/master/${repo.name}.gif`} fallbackSrc="http://www.1x1px.me/FFFFFF-0.png"></Image>        
                  }
                  </div>
                  
                  {(repo.name && repo.description.includes("...")) &&
                    <div className="demo-link">
                      <i className="octicon icon-eye"></i>
                      <a href={`https://kdashivantha.github.io/${repo.name}/`} target="_blank">DEMO</a>      
                    </div>  
                  }
                  
                </div>
                <div className="repo-component-meta">
                  {repo.language &&
                    <a href={repo.languages_url} className="repo-component__repolink repo-component__lang">
                      {repo.language}
                    </a>
                  }
                  {repo.stargazers_count > 0 &&
                    <a href={repo.stargazers_url} className="repo-component__repolink">
                      <i className="octicon icon-star"></i> {repo.stargazers_count}
                    </a>
                  }
                  {repo.forks_count > 0 &&
                    <a className="repo-component__repolink" href={repo.forks_url}>
                      <i className="octicon icon-git-branch"></i>
                      {repo.forks_count}
                    </a>
                  }
                </div>
              </div>
          ))
        }
      </div>
    );
  }
}