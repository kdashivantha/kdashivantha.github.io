import React, { Component } from 'react';
import './style.scss';

export class Description extends Component {
  render() {
    return (
      <div className="section-heading">
        <div className="section-heading-container">
          <h2 className="pb-10">My Repositories</h2>
          <p className="text-gray pb-15">GitHub repositories that I've built.</p>
        </div>
      </div>
    );
  }
}