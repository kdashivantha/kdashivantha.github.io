import React, { Component } from 'react';

export class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
      errored: false,
      width: '100%'
    };

    this.onError = () => {
      if (!this.state.errored) {
        this.setState({
          src: this.props.fallbackSrc,
          errored: true,
          width: '0px'
        });
      }
    }
  }
  
  render() {
    const { src, width } = this.state;
    const {
      src: _1,
      fallbackSrc: _2,
      ...props
    } = this.props;

    return (
      <img
        src={src}
        onError={this.onError}
        width={width}
        {...props}
      />
    );
  }
}