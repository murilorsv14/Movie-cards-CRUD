import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="content">Carregando... </div>
      </div>
    );
  }
}

export default Loading;
